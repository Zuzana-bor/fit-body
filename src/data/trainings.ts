export type TrainingDataPart = {
  number: string;
  exerciseId: string;
};

export type TrainingData = TrainingDataPart[];

export const createTrainingPart = (
  number: string,
  exerciseId: string,
): TrainingDataPart => {
  return { number, exerciseId };
};

const upperBody: TrainingData = [
  { exerciseId: 'jumping-jack', number: '1 minuta' },
  { exerciseId: 'inner-bicep-curl', number: '15 / 3' },
  { exerciseId: 'tricep-overhead-extensions', number: '15 / 2' },
  { exerciseId: 'arnoldpress', number: '20 / 3' },
  { exerciseId: 'single-arm-dumbbell-row', number: '20 / 3' },
  { exerciseId: 'push-ups', number: '15 / 2' },
  { exerciseId: 'burpee', number: '10 / 2' },
  { exerciseId: 'plank-arm-lifts', number: '12 / 2' },
  { exerciseId: 'sit-ups', number: '30 / 3' },
  { exerciseId: 'reverse-Plank-Kicks', number: '20 / 3' },
];

const fullBody = [
  { exerciseId: 'jumping-rope', number: '1 minuta' },
  { exerciseId: 'dumbbell-squat', number: '30/3' },
  { exerciseId: 'pendulum-lunge', number: '20/3' },
  { exerciseId: 'side-leg-lift', number: '20/3' },
  { exerciseId: 'push-Ups', number: '15/2' },
  { exerciseId: 'dumbbell-Standing-Lateral-Raise', number: '15/2' },
  { exerciseId: 'inner-bicep-curl', number: '15/3' },
  { exerciseId: 'tricep-overhead-extensions', number: '15/2' },
  { exerciseId: 'reverse-snow-angle', number: '10/3' },
  { exerciseId: 'cross-Crunch', number: '30/3' },
  { exerciseId: 'plank', number: '50 sekund/2' },
];

const lowerBody = [
  { exerciseId: 'jumping-jack', number: '1 minuta' },
  { exerciseId: 'dumbbell-deadlifts', number: '20 / 3' },
  { exerciseId: 'dumbbell-sumo-deadlift', number: '20 / 3' },
  { exerciseId: 'jump-squat', number: '20 / 3' },
  { exerciseId: 'side-Lunge', number: '20 / 3' },
  { exerciseId: 'power-lunge', number: '30 / 3' },
  { exerciseId: 'burpee', number: '10 / 2' },
  { exerciseId: 'pelvic-tilt', number: '15 / 2' },
];

const cardio = [
  { exerciseId: 'jumping-rope', number: '1 minuta' },
  { exerciseId: 'jumping-jack', number: '1 minuta' },
  { exerciseId: 'sit-ups', number: '30 / 3' },
  { exerciseId: 'burpee', number: '10 / 2' },
  { exerciseId: 'jump-squat', number: '20 / 3' },
  { exerciseId: 'side-lunge', number: '20 / 3' },
  { exerciseId: 'power-lunge', number: '30 / 3' },
  { exerciseId: 'push-ups', number: '15/2' },
];

export type TrainingDataObject = {
  id: string;
  training: TrainingData;
};

export type TrainingsData = TrainingDataObject[];

export const trainingsData: TrainingsData = [
  {
    id: 'upperBody',
    training: upperBody,
  },
  {
    id: 'lowerBody',
    training: lowerBody,
  },
  {
    id: 'fullBody',
    training: fullBody,
  },
  {
    id: 'cardio',
    training: cardio,
  },
];
