export type TrainingPlanDay = {
  day: string;
  trainingId: string;
};

export type TrainingPlan = {
  id: string;
  days: TrainingPlanDay[];
};

export const trainingPlans: TrainingPlan[] = [
  {
    id: 'intensity1',
    days: [{ day: 'pondělí', trainingId: 'Full body' }],
  },
  {
    id: 'intensity2',
    days: [
      { day: 'pondělí', trainingId: 'Full body' },
      { day: 'čtvrtek', trainingId: 'Cardio' },
    ],
  },
  {
    id: 'intensity3',
    days: [
      { day: 'pondělí', trainingId: 'Upper body' },
      { day: 'středa', trainingId: 'Cardio' },
      { day: 'pátek', trainingId: 'Lower body' },
    ],
  },
  {
    id: 'intensity4',
    days: [
      { day: 'pondělí', trainingId: 'Upper body' },
      { day: 'úterý', trainingId: 'Cardio' },
      { day: 'čtvrtek', trainingId: 'Lower body' },
      { day: 'sobota', trainingId: 'Full body' },
    ],
  },
  {
    id: 'intensity5',
    days: [
      { day: 'pondělí', trainingId: 'Upper body' },
      { day: 'úterý', trainingId: 'Lower body' },
      { day: 'středa', trainingId: 'Cardio' },
      { day: 'pátek', trainingId: 'Full body' },
      { day: 'sobota', trainingId: 'Cardio' },
    ],
  },
  {
    id: 'intensity6',
    days: [
      { day: 'pondělí', trainingId: 'Upper body' },
      { day: 'úterý', trainingId: 'Lower body' },
      { day: 'středa', trainingId: 'Cardio' },
      { day: 'čtvrtek', trainingId: 'Full body' },
      { day: 'pátek', trainingId: 'Cardio' },
      { day: 'sobota', trainingId: 'Full body' },
    ],
  },
  {
    id: 'intensity7',
    days: [
      { day: 'pondělí', trainingId: 'Upper body' },
      { day: 'úterý', trainingId: 'Lower body' },
      { day: 'středa', trainingId: 'Cardio' },
      { day: 'čtvrtek', trainingId: 'Full body' },
      { day: 'pátek', trainingId: 'Cardio' },
      { day: 'sobota', trainingId: 'Full body' },
      { day: 'neděle', trainingId: 'Cardio' },
    ],
  },
];
