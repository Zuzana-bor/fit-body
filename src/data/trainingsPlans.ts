export type TrainingPlanDay = {
  day: string;
  trainingId: string;
};

export type TrainingPlan = {
  id: string;
  days: TrainingPlanDay[];
};

export const trainingPlan: TrainingPlan[] = [
  {
    id: 'intensity1',
    days: [{ day: 'pondělí', trainingId: 'fullBody' }],
  },
  {
    id: 'intensity2',
    days: [
      { day: 'pondělí', trainingId: 'fullBody' },
      { day: 'čtvrtek', trainingId: 'cardio' },
    ],
  },
  {
    id: 'intensity3',
    days: [
      { day: 'pondělí', trainingId: 'upperBody' },
      { day: 'středa', trainingId: 'cardio' },
      { day: 'pátek', trainingId: 'lowerBody' },
    ],
  },
  {
    id: 'intensity4',
    days: [
      { day: 'pondělí', trainingId: 'upperBody' },
      { day: 'úterý', trainingId: 'cardio' },
      { day: 'čtvrtek', trainingId: 'lowerBody' },
      { day: 'sobota', trainingId: 'fullBody' },
    ],
  },
  {
    id: 'intensity5',
    days: [
      { day: 'pondělí', trainingId: 'upperBody' },
      { day: 'úterý', trainingId: 'lowerBody' },
      { day: 'středa', trainingId: 'cardio' },
      { day: 'pátek', trainingId: 'fullBody' },
      { day: 'sobota', trainingId: 'cardio' },
    ],
  },
  {
    id: 'intensity6',
    days: [
      { day: 'pondělí', trainingId: 'upperBody' },
      { day: 'úterý', trainingId: 'lowerBody' },
      { day: 'středa', trainingId: 'cardio' },
      { day: 'čtvrtek', trainingId: 'fullBody' },
      { day: 'pátek', trainingId: 'cardio' },
      { day: 'sobota', trainingId: 'fullBody' },
    ],
  },
  {
    id: 'intensity7',
    days: [
      { day: 'pondělí', trainingId: 'upperBody' },
      { day: 'úterý', trainingId: 'lowerBody' },
      { day: 'středa', trainingId: 'cardio' },
      { day: 'čtvrtek', trainingId: 'fullBody' },
      { day: 'pátek', trainingId: 'cardio' },
      { day: 'sobota', trainingId: 'fullBody' },
      { day: 'neděle', trainingId: 'cardio' },
    ],
  },
];
