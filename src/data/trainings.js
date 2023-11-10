function createData(name, number, muscle, media) {
  return { name, number, muscle, media };
}

export const upperBody = [
  createData('Jumping jack', '1 minuta', 'kardio', '/assets/jumping-jacks.gif'),
  createData(
    'Bicepsové zdvihy s rotací',
    '15 / 3',
    'biceps',
    '/assets/inner-bicep-curl.gif',
  ),
  createData(
    'Tricepsové tlaky',
    '15 / 2',
    'triceps',
    '/assets/tricep-overhead-extensions.gif',
  ),
  createData(
    'Arnoldovy tlaky',
    '20 / 3',
    'ramena, triceps',
    'assets/arnoldpress.png',
  ),
  createData(
    'Přítahy jednoruček v předklonu',
    '20 / 3',
    'záda',
    '/assets/single-arm-dumbbell-row.gif',
  ),
  createData('Kliky (dámské)', '15 / 2', 'prsa', '/assets/push-up.gif'),
  createData('Angličáky', '10 / 2', 'kardio', '/assets/Burpees.gif'),
  createData(
    'Zvedání paží v planku',
    '12 / 2',
    'břicho',
    '/assets/plank-arm-lifts.gif',
  ),
  createData('Sedy-lehy', '30 / 3', 'břicho', '/assets/sit-ups.gif'),
  createData(
    'Vykopávání v obráceném vzporu',
    '20 / 3',
    'břicho',
    '/assets/Reverse-Plank-Kicks.gif',
  ),
];

export const fullBody = [
  createData('švihadlo', '1 minuta', 'kardio', ''),

  createData('dřep s jednuručkama', '30 / 3', 'hýždě', ''),
  createData('výpady vzad/vpřed', '20 / 3', 'hýždě,stehna', ''),
  createData('Unožování ve stoje s expanderem', '20 / 3', 'hýždě', ''),
  createData('Kliky (dámské)', '15 / 2', 'prsa', '/assets/push-up.gif'),

  createData('Upažování ve stoje', '15 / 2', 'ramena', ''),
  createData(
    'Bicepsové zdvihy s rotací',
    '15 / 3',
    'biceps',
    '/assets/inner-bicep-curl.gif',
  ),
  createData(
    'Tricepsové tlaky',
    '15 / 2',
    'triceps',
    '/assets/tricep-overhead-extensions.gif',
  ),
  createData('reverse snow angel', '10 / 3', 'záda', '/assets/sit-ups.gif'),

  createData('Zkracovačky', '30/3', 'břicho', ''),
  createData('Plank', '50 sekund/2', 'břicho', ''),
];

export const lowerBody = [
  createData('jumping jack', '1 minuta', 'kardio', '/assets/jumping-jacks.gif'),
  createData('Mrtvý tah', '20 / 3', 'stehna,hýždě,záda', ''),
  createData('sumo dřep', '20 / 3', 'hýždě,stehna', ''),
  createData('dřep s výskokem', '20 / 3', 'hýždě,stehna', ''),
  createData('Výpady do strany', '20 / 3', 'stehna', ''),
  createData('Výpady s výskokem', '30 / 3', 'stehna', ''),
  createData('Angličáky', '10 / 2', 'kardio', '/assets/Burpees.gif'),

  createData('Zvedání pánve v leže', '15 / 2', 'hýždě', ''),
];

export const cardio = [
  createData('švihadlo', '1 minuta', 'kardio', ''),
  createData(
    'Jumping jack',
    '50 sekund+10 pauza/3',
    'kardio',
    '/assets/jumping-jacks.gif',
  ),
  createData('Sedy-lehy', '30 / 3', 'břicho', '/assets/sit-ups.gif'),
  createData('Angličáky', '10 / 2', 'kardio', '/assets/Burpees.gif'),

  createData('dřep s výskokem', '20 / 3', 'hýždě,stehna', ''),
  createData('výpady vzad', '20 / 3', 'hýždě,stehna', ''),

  createData('Výpady s výskokem', '30 / 3', 'stehna', ''),
  createData('Kliky (dámské)', '15/3', 'prsa', '/assets/push-up.gif'),
];
