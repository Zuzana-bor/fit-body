export type TrainingPlanDay = {
  day: string;
  trainingid: string;
};

export type TrainingPlan = {
  id: string;
  days: TrainingPlanDay[];
};

export const trainingPlan: TrainingPlan[] = [
  {
    id: 'intensity1',
    days: [{ day: 'pondělí', trainingiD: 'fullBody' }],
  },
  {
    id: 'intensity2',
    days: [
      { day: 'pondělí', trainingiD: 'fullBody' },
      { day: 'čtvrtek', trainingiD: 'cardio' },
    ],
  },
  {
    id: 'intensity3',
    days: [
      { day: 'pondělí', trainingiD: 'upperBody' },
      { day: 'středa', trainingiD: 'cardio' },
      { day: 'pátek', trainingiD: 'lowerBody' },
    ],
  },
  {
    id: 'intensity4',
    days: [
      { day: 'pondělí', trainingiD: 'upperBody' },
      { day: 'úterý', trainingiD: 'cardio' },
      { day: 'čtvrtek', trainingiD: 'lowerBody' },
      { day: 'sobota', trainingiD: 'fullBody' },
    ],
  },
  {
    id: 'intensity5',
    days: [
      { day: 'pondělí', trainingiD: 'upperBody' },
      { day: 'úterý', trainingiD: 'lowerBody' },
      { day: 'středa', trainingiD: 'cardio' },
      { day: 'pátek', trainingiD: 'fullBody' },
      { day: 'sobota', trainingiD: 'cardio' },
    ],
  },
  {
    id: 'intensity6',
    days: [
      { day: 'pondělí', trainingiD: 'upperBody' },
      { day: 'úterý', trainingiD: 'lowerBody' },
      { day: 'středa', trainingiD: 'cardio' },
      { day: 'čtvrtek', trainingiD: 'fullBody' },
      { day: 'pátek', trainingiD: 'cardio' },
      { day: 'sobota', trainingiD: 'fullBody' },
    ],
  },
  {
    id: 'intensity7',
    days: [
      { day: 'pondělí', trainingiD: 'upperBody' },
      { day: 'úterý', trainingiD: 'lowerBody' },
      { day: 'středa', trainingiD: 'cardio' },
      { day: 'čtvrtek', trainingiD: 'fullBody' },
      { day: 'pátek', trainingiD: 'cardio' },
      { day: 'sobota', trainingiD: 'fullBody' },
      { day: 'neděle', trainingiD: 'cardio' },
    ],
  },
];
