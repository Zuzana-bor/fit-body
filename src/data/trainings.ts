export type TrainingDataPart = {
  name?: string;
  number: string;
  muscle?: string;
  media?: string;
  exerciseId?: string;
};

export type TrainingData = TrainingDataPart[];

export const createTrainingPart = (
  name: string,
  number: string,
  muscle: string,
  media: string,
): TrainingDataPart => {
  return { name, number, muscle, media };
};

const upperBody: TrainingData = [
  { exerciseId: 'jumping-jack', number: '1 minuta' },
  { exerciseId: 'bicepsové-zdvihy-s-rotací', number: '15 / 3' },
  { exerciseId: 'tricepsove-tlaky', number: '15 / 2' },
  { exerciseId: 'arnoldovy-tlaky', number: '20 / 3' },
  { exerciseId: 'pritahy-jednorucek-v-predklonu', number: '20 / 3' },
  { exerciseId: 'kliky-damske', number: '15 / 2' },
  { exerciseId: 'anglicak', number: '10 / 2' },
  { exerciseId: 'zvedani-paží-v-planku', number: '12 / 2' },
  { exerciseId: 'sedy-lehy', number: '30 / 3' },
  { exerciseId: 'vykopavani-v-obracenem-vzporu', number: '20 / 3' },
];

const fullBody = [
  { exerciseId: 'švihadlo', number: '1 minuta' },
  { exerciseId: 'dřep-s-jednoručkama', number: '30/3' },
  { exerciseId: 'výpady-vzad/vpřed', number: '20/3' },
  { exerciseId: 'unožování-ve-stoje-s-expanderem', number: '20/3' },
  { exerciseId: 'kliky-damske', number: '15/2' },
  { exerciseId: 'upažování-ve-stoje', number: '15/2' },
  { exerciseId: 'bicepsove-zdvihy-s-rotací', number: '15/3' },
  { exerciseId: 'tricepsové-tlaky', number: '15/2' },
  { exerciseId: 'obrácený-anděl', number: '10/3' },
  { exerciseId: 'zkracovačky-do-kříže-anděl', number: '30/3' },
  { exerciseId: 'planky', number: '50 sekund/2' },
];

const lowerBody = [
  { exerciseId: 'jumping-jack', number: '1 minuta' },
  { exerciseId: 'mrtvý-tah', number: '20 / 3' },
  { exerciseId: 'sumo-dřep-s-jednoručkama', number: '20 / 3' },
  { exerciseId: 'dřep-s-výskokem', number: '20 / 3' },
  { exerciseId: 'výpady-do-strany', number: '20 / 3' },
  { exerciseId: 'výpady-s-výskokem', number: '30 / 3' },
  { exerciseId: 'angličáky', number: '10 / 2' },
  { exerciseId: 'zvedání-pánve-v-leže', number: '15 / 2' },
];

const cardio = [
  { exerciseId: 'švihadlo', number: '1 minuta' },
  { exerciseId: 'jumping-jack', number: '1 minuta' },
  { exerciseId: 'sedy-lehy', number: '30 / 3' },
  { exerciseId: 'angličáky', number: '10 / 2' },
  { exerciseId: 'dřep-s-výskokem', number: '20 / 3' },
  { exerciseId: 'výpady-s-jednoručkama', number: '20 / 3' },
  { exerciseId: 'výpady-s-výskokem', number: '30 / 3' },
  { exerciseId: 'kliky-damske', number: '15/2' },
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
