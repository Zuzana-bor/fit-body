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
  createTrainingPart(
    'Bicepsové zdvihy s rotací',
    '15 / 3',
    'biceps',
    '/assets/inner-bicep-curl.gif',
  ),
  createTrainingPart(
    'Tricepsové tlaky',
    '15 / 2',
    'triceps',
    '/assets/tricep-overhead-extensions.gif',
  ),
  createTrainingPart(
    'Arnoldovy tlaky',
    '20 / 3',
    'ramena, triceps',
    'assets/arnoldpress.png',
  ),
  createTrainingPart(
    'Přítahy jednoruček v předklonu',
    '20 / 3',
    'záda',
    '/assets/single-arm-dumbbell-row.gif',
  ),
  createTrainingPart('Kliky (dámské)', '15 / 2', 'prsa', '/assets/push-up.gif'),
  createTrainingPart('Angličák', '10 / 2', 'kardio', '/assets/Burpees.gif'),
  createTrainingPart(
    'Zvedání paží v planku',
    '12 / 2',
    'břicho',
    '/assets/plank-arm-lifts.gif',
  ),
  createTrainingPart('Sedy-lehy', '30 / 3', 'břicho', '/assets/sit-ups.gif'),
  createTrainingPart(
    'Vykopávání v obráceném vzporu',
    '20 / 3',
    'břicho',
    '/assets/Reverse-Plank-Kicks.gif',
  ),
];

const fullBody = [
  createTrainingPart('švihadlo', '1 minuta', 'kardio', '/assets/jump-rope.gif'),

  createTrainingPart(
    'dřep s jednuručkama',
    '30 / 3',
    'hýždě',
    '/assets/dumbbell-squat.gif',
  ),
  createTrainingPart(
    'výpady vzad/vpřed',
    '20 / 3',
    'hýždě,stehna',
    '/assets/pendulum-lunge.gif',
  ),
  createTrainingPart(
    'Unožování ve stoje s expanderem',
    '20 / 3',
    'hýždě',
    '/assets/side-leg-lift.png',
  ),
  createTrainingPart('Kliky (dámské)', '15 / 2', 'prsa', '/assets/push-up.gif'),

  createTrainingPart(
    'Upažování ve stoje',
    '15 / 2',
    'ramena',
    '/assets/Dumbbell-Standing-Lateral-Raise.gif',
  ),
  createTrainingPart(
    'Bicepsové zdvihy s rotací',
    '15 / 3',
    'biceps',
    '/assets/inner-bicep-curl.gif',
  ),
  createTrainingPart(
    'Tricepsové tlaky',
    '15 / 2',
    'triceps',
    '/assets/tricep-overhead-extensions.gif',
  ),
  createTrainingPart(
    'obrácený anděl',
    '10 / 3',
    'záda',
    '/assets/reverse-snow-angle.png',
  ),

  createTrainingPart(
    'Zkracovačky do kříže',
    '30/3',
    'břicho',
    '/assets/Cross-Crunch.gif',
  ),
  createTrainingPart('Plank', '50 sekund/2', 'břicho', '/assets/plank.gif'),
];

const lowerBody = [
  createTrainingPart(
    'jumping jack',
    '1 minuta',
    'kardio',
    '/assets/jumping-jacks.gif',
  ),
  createTrainingPart(
    'Mrtvý tah',
    '20 / 3',
    'stehna,hýždě,záda',
    '/assets/dumbbell-deadlifts.gif',
  ),
  createTrainingPart(
    'sumo dřep s jednoručkama',
    '20 / 3',
    'hýždě,stehna',
    '/assets/dumbbell-sumo-deadlift.gif',
  ),
  createTrainingPart(
    'dřep s výskokem',
    '20 / 3',
    'hýždě,stehna',
    '/assets/jump-Squat.gif',
  ),
  createTrainingPart(
    'Výpady do strany',
    '20 / 3',
    'stehna',
    '/assets/side-Lunge.gif',
  ),
  createTrainingPart(
    'Výpady s výskokem',
    '30 / 3',
    'stehna',
    '/assets/power-lunge.gif',
  ),
  createTrainingPart('Angličáky', '10 / 2', 'kardio', '/assets/Burpees.gif'),

  createTrainingPart(
    'Zvedání pánve v leže',
    '15 / 2',
    'hýždě',
    '/assets/pelvic-tilt.gif',
  ),
];

const cardio = [
  createTrainingPart('švihadlo', '1 minuta', 'kardio', '/assets/jump-rope.gif'),
  createTrainingPart(
    'Jumping jack',
    '50 sekund+10 pauza/3',
    'kardio',
    '/assets/jumping-jacks.gif',
  ),
  createTrainingPart('Sedy-lehy', '30 / 3', 'břicho', '/assets/sit-ups.gif'),
  createTrainingPart('Angličáky', '10 / 2', 'kardio', '/assets/Burpees.gif'),

  createTrainingPart(
    'dřep s výskokem',
    '20 / 3',
    'hýždě,stehna',
    '/assets/jump-Squat.gif',
  ),
  createTrainingPart(
    'výpady s jednoručkama',
    '20 / 3',
    'hýždě,stehna',
    '/assets/dumbbell-Lunge.gif',
  ),

  createTrainingPart(
    'Výpady s výskokem',
    '30 / 3',
    'stehna',
    '/assets/power-lunge.gif',
  ),
  createTrainingPart('Kliky (dámské)', '15/3', 'prsa', '/assets/push-up.gif'),
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
