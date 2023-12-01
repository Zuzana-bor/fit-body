import { FormAnswers } from '../../config';

export const getKoefTarget = (target: string) => {
  switch (target) {
    case 'weightloss':
      return 0.8;
    case 'maintenance':
      return 1;
    default:
      return 1.2;
  }
};

export const getAf = (activity: string) => {
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
}: FormAnswers) =>
  weight > 0 &&
  gender.length &&
  height > 0 &&
  age > 0 &&
  activity.length &&
  target.length &&
  sleep.length &&
  intensity > 0;
