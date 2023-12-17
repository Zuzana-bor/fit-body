export type TrainingPlanData = {
  id: string;
  days: { day: string; trainingID: string }[];
};

export const trainingPlanData: TrainingPlanData[] = [
  {
    id: 'intensity1',
    days: [{ day: 'pondělí', trainingID: 'fullBody' }],
  },
  {
    id: 'intensity2',
    days: [
      { day: 'pondělí', trainingID: 'fullBody' },
      { day: 'čtvrtek', trainingID: 'cardio' },
    ],
  },
  {
    id: 'intensity3',
    days: [
      { day: 'pondělí', trainingID: 'upperBody' },
      { day: 'středa', trainingID: 'cardio' },
      { day: 'pátek', trainingID: 'lowerBody' },
    ],
  },
  {
    id: 'intensity4',
    days: [
      { day: 'pondělí', trainingID: 'upperBody' },
      { day: 'úterý', trainingID: 'cardio' },
      { day: 'čtvrtek', trainingID: 'lowerBody' },
      { day: 'sobota', trainingID: 'fullBody' },
    ],
  },
  {
    id: 'intensity5',
    days: [
      { day: 'pondělí', trainingID: 'upperBody' },
      { day: 'úterý', trainingID: 'lowerBody' },
      { day: 'středa', trainingID: 'cardio' },
      { day: 'pátek', trainingID: 'fullBody' },
      { day: 'sobota', trainingID: 'cardio' },
    ],
  },
  {
    id: 'intensity6',
    days: [
      { day: 'pondělí', trainingID: 'upperBody' },
      { day: 'úterý', trainingID: 'lowerBody' },
      { day: 'středa', trainingID: 'cardio' },
      { day: 'čtvrtek', trainingID: 'fullBody' },
      { day: 'pátek', trainingID: 'cardio' },
      { day: 'sobota', trainingID: 'fullBody' },
    ],
  },
  {
    id: 'intensity7',
    days: [
      { day: 'pondělí', trainingID: 'upperBody' },
      { day: 'úterý', trainingID: 'lowerBody' },
      { day: 'středa', trainingID: 'cardio' },
      { day: 'čtvrtek', trainingID: 'fullBody' },
      { day: 'pátek', trainingID: 'cardio' },
      { day: 'sobota', trainingID: 'fullBody' },
      { day: 'neděle', trainingID: 'cardio' },
    ],
  },
];
