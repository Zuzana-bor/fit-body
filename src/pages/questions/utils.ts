import { FormAnswers } from '../../config';
import { TrainingPlanDay, trainingPlans } from '../../data/trainingsPlans';

export const getKoefTarget = (target: FormAnswers['target']) => {
  switch (target) {
    case 'weightloss':
      return 0.8;
    case 'maintenance':
      return 1;
    default:
      return 1.2;
  }
};

export const getTrainingPlanDays = (
  intensity: FormAnswers['intensity'],
): TrainingPlanDay[] | undefined => {
  return trainingPlans.find((day) => day.id === intensity)?.days;
};

export const getSleepInfo = (sleep: FormAnswers['sleep']) => {
  switch (sleep) {
    case '5':
      return 'Pozor na nezdravý spánek. Dlouhodobá spánková deprivace významně zvyšuje riziko vážných chronických onemocnění. Jedná se například o kardiovaskulární potíže, hormonální nerovnováhu, cukrovku, vysoký krevní tlak, demenci, Alzheimerovu chorobu a další. Lidem, kteří spí méně než 6 hodin, jde hubnutí o poznání hůře. Spánek má totiž vliv na metabolismus. V případě nedostatečného odpočinku organismus daleko hůř hospodaří s bílkovinami. Dochází také ke snížení hladiny leptinu, což má za následek to, že máme pocit hladu. Ideální doba spánku je okolo 8 hodin.';
    case '6':
      return 'Tvůj spánek je zdravý.';
    default:
      return 'Pozor na nezdravý spánek. Lidé, kteří denně spí víc než 9 hodin, můžou být více ohroženi onemocněním srdce a cév a předčasným úmrtím. Ideální doba spánku je okolo 8 hodin.';
  }
};

export const getAf = (activity: FormAnswers['activity']) => {
  switch (activity) {
    case 'activLevel1':
      return 1.2;

    case 'activLevel2':
      return 1.4;

    case 'activLevel3':
      return 1.6;

    case 'activLevel4':
      return 1.8;

    case 'activLevel5':
      return 2;

    default:
      return 2.2;
  }
};

export const getIsFilled = ({
  weight,
  gender,
  height,
  age,
  activity,
  target,
  sleep,
  intensity,
}: FormAnswers): boolean =>
  weight > 0 &&
  !!gender.length &&
  height > 0 &&
  age > 0 &&
  !!activity.length &&
  !!target.length &&
  !!sleep.length &&
  !!intensity.length;

export const getResult = ({
  weight,
  height,
  age,
  activity,
  target,
  intensity,
  sleep,
}: FormAnswers) => {
  const af = getAf(activity);
  const koefTarget = getKoefTarget(target);
  const sleepInfo = getSleepInfo(sleep);
  const trainingPlanDays = getTrainingPlanDays(intensity);

  const bmr = 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
  const tdee = bmr * af;
  const kcl = Math.round(tdee * koefTarget);
  return { trainingPlanDays, kcl, sleepInfo };
};
