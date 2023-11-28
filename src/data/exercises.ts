export type Exercise = {
  name: string;
  description: string;
  media: string;
  category: string;
  mainMuscleGroupe: string;
  id: string;
};

export const exercises: Exercise[] = [
  {
    id: 'curls',
    name: 'Bicepsový zdvih s jednoručkami',
    description:
      'S výdechem zvedáme ohýbáním lokte střídavě jednoručky na úroven ramene',
    media: '/assets/single-arm-dumbbell-row.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'biceps',
  },
  {
    id: 'single-arm-dumbbell-row',
    name: 'Přítahy jednoruček v předklonu',
    description:
      'Podepřete se jednou paží o židli. V druhé ruce máte činku, kterou přitahujete k tělu. Zatínáte svaly okoolo lopatky a zpět. ',
    media: '/assets/single-arm-dumbbell-row.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'záda',
  },
  {
    id: 'inner-bicep-curl',
    name: 'Bicepsové zdvihy s rotací',
    description:
      'Stůjte s činkama podél těla, dlaň směřuje také k tělu.Zpevněte střed těla. S výdechem zvedněte činky směrem k hrudníku. Lokty se nehnou. Držíme až 2 sekundy a s nádechem se vracíme zpět. ',
    media: '/assets/inner-bicep-curl.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'biceps',
  },
  {
    id: 'tricep-overhead-extensions',
    name: 'Tricepsové tlaky',
    description:
      'Stůjte s činkou uchopenou oběma rukama nad hlavou. Činku spouštějte s nádechem za hlavu do pravého úhlu lokte. S výdechem zpět.',
    media: '/assets/tricep-overhead-extensions.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'triceps',
  },
  {
    id: 'Close-Grip-Push-up',
    name: 'Tricepsové kliky',
    description:
      'Posaďte se zády k židli, ruce dejte za sebe na židli a pokrčte v loktech. Nohy jsou natažené nebo lehce pokrčené. Zvedejte se narovnáním rukou v lokti.',
    media: '/assets/Close-Grip-Push-up.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'triceps',
  },

  {
    id: 'dumbbell-tricep-kickback',
    name: 'Tricepsové kick-backy',
    description:
      'Stůjte v pozici výpadu (jednoha vpřed), protilehlá ruka drží činku, loket u těla. Předloktí je kolmo k zemi. Paže s činkou jde nahoru tak, aby v konečné pozici byla rovnoběžně s tupem. Následuje chvilková výdrž a vrátíme se do výchozí pozice. ',
    media: '/assets/dumbbell-tricep-kickback.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'triceps',
  },
  {
    id: 'arnoldpress',
    name: 'Arnoldovy tlaky',
    description:
      'Stůjte v pozici výpadu (jednoha vpřed), protilehlá ruka drží činku, loket u těla. Předloktí je kolmo k zemi. Paže s činkou jde nahoru tak, aby v konečné pozici byla rovnoběžně s tupem. Následuje chvilková výdrž a vrátíme se do výchozí pozice. ',
    media: 'assets/arnoldpress.png',
    category: 'Horní část těla',
    mainMuscleGroupe: 'triceps',
  },
  {
    id: 'plank-arm-lifts',
    name: 'Zvedání paží v planku',
    description:
      'Začněte v pozici planku. Stáhněte břicho. Zvedejte střídavě ruky před sebe, anižbyste rotovali s bokama ',
    media: '/assets/plank-arm-lifts.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'břicho',
  },

  {
    id: 'sit-ups',
    name: 'Sedy-lehy',
    description:
      'Výchozí pozice- leh na zádach, nohy pokrčené s patama u sebe, ruce složené na prsou. Zvedáme se do sedu a vracíme se zpět.',

    media: '/assets/sit-ups.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'břicho',
  },

  {
    id: 'Reverse-Plank-Kicks',
    name: 'Vykopávání v obráceném vzporu.',
    description:
      'Začínáme v pozici obráceného prkna. pánev směřujeme nahoru. Kolenem pohybujeme směrem k hrudi a zpět. Kolena střídáme. ',

    media: '/assets/Reverse-Plank-Kicks.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'břicho',
  },
  {
    id: 'squat',
    name: 'dřep',
    description: 'Lorem ipsum ',
    media: '.',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'zadek',
  },
  {
    id: 'lunges ',
    name: 'výpady',
    description: 'Lorem ipsum ',
    media: '.',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'zadek',
  },
  {
    id: 'jumping-rope',
    name: 'švihadlo',
    description: 'Lorem ipsum ',
    media: '.',
    category: 'cardio',
    mainMuscleGroupe: '',
  },
  {
    id: 'burpee ',
    name: 'angličák',
    description: 'Lorem ipsum ',
    media: '.',
    category: 'cardio',
    mainMuscleGroupe: '',
  },
];
