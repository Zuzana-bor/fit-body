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
    id: 'reverse-snow-angle',
    name: 'obrácený anděl',
    description:
      ' Lehneme si na břicho, nohy máme pár centimetrů od sebe a ruce natažené směrem dopředu. S nádechem nadzvedneme vršek těla lehce nad zem a držíme ho zvedlý. Pohled směruje vpřed. Natažené ruce začneme pomalým obloukem zapažovat až směrem k nohám. Konečná pozice je těsně vedle nohu.A zpět.',
    media: '/assets/reverse-snow-angle.png',
    category: 'Horní část těla',
    mainMuscleGroupe: 'záda',
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
    id: 'Push-Ups (Womens)',
    name: 'Kliky (dámské)',
    description:
      'Výchozí pozice je, že klečíme na kolenou a holeně máme opřené o zem, současně se opřeme o dlaně, vzdálenost by měla být na šířku ramen. Celé tělo by mělo být v rovině. Nepropadejte mezi lopatkami. Síla by měla vycházet z prsniho svalstva a ramen. ',
    media: '/assets/push-up.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'prsa',
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
    id: 'Cross-Crunch',
    name: 'Zkracovačky do kříže',
    description:
      'Ruce dáme na prsa, případně v týl, stehna míří svisle vzhůru a nohy jsou ohnuté v kolenou.S nádechem odlepte ramena od země a přirozeným zakulacením zad přibližte loket k jednomu kolenu.Během zvedání probíhá výdech. A zpět. Kolena střídejte.',
    media: '/assets/Cross-Crunch.gif',
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
    id: 'Dumbbell-Standing-Lateral-Raise',
    name: 'Upažování ve stoje',
    description:
      'Tělo je pevné a ruce drží činky podél těla. Dlaně směřují k tělu. Nadechneme se a plynule zvedáme ruce nahoru tak, aby lokty neklesaly pod úroveň zápěstí. Finální poloha končí na úrovni, kdy jsou paže rovnoběžně se zemí.',
    media: '/assets/Dumbbell-Standing-Lateral-Raise.gif',
    category: 'Horní část těla',
    mainMuscleGroupe: 'ramena',
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
    id: 'Plank',
    name: 'Plank',
    description:
      ' Opřete se o lokty a prsty na nohou, dejte tělo do jedné roviny jako prkno a v této poloze setrvejte.',
    category: 'Horní část těla',
    media: '/assets/plank.gif',
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
    id: 'dumbbell-squat',
    name: 'dřep s jednuručkama',
    description:
      ' Jednoručky mějte podél těla nebo  je držte položené na ramenou. Záda mějte rovná, nohy rozkročené na šířku ramen, pohled směřuje vpřed. S nádechem pokrčte kolena a kyčle jako při sedu, s výdechem se vráťte do výchozí polohy',
    media: '/assets/dumbbell-squat.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'zadek',
  },
  {
    id: 'dumbbell-sumo-deadlift',
    name: 'sumo dřep s jednoručkama',
    description:
      ' Postavte se do širokého postoje se špičkami směřujícími ven. Zvedněte jednoručku za rukojeť nebo jeden konec (kotoučovou část) a po celou dobu ji držte nataženýma rukama, které jsou rovnoběžně s tělem. Nadechněte se a pokrčením kolen udělejte dřep. S výdechem se  plynule narovnejte. ',
    media: '/assets/dumbbell-sumo-deadlift.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'hýždě,stehna',
  },
  {
    id: 'jump-Squat',
    name: 'dřep s výskokem',
    description:
      ' stojíme rovně, nohy jsou rozkročené o něco více, než je šíře ramen, špičky směřují mírně ven. S nádechem jdeme do dřepu, s výdechem se odrazíme od země a vyskočíme co nejvýše. ',
    media: '/assets/jump-Squat.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'hýždě,stehna',
  },
  {
    id: 'dumbbell-deadlifts',
    name: 'Mrtvý tah',
    description:
      'Postoje je na šíři ramen.Nadechneme se a zpevníme střed těla společně se zádovým svalstvem a zvedneme činky ze země. Držíme je nadhmatem. Začneme pomalu a kontrolovaně klesat směrem k zemi středním tempem, držíme tělo zpevněné. Jakmile dosáhneme spodní polohy, tak s výdechem vyrazíme směrem vzhůru do původní polohy, kde na sekundu zatneme i přední stehna a hýždě pro lepší intenzitu a zapojení daných svalů.S postupným nádechem začneme opět klesat směrem dolu a celý postup opakujeme. ',
    media: '/assets/dumbbell-deadlifts.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'stehna,hýždě,záda',
  },
  {
    id: 'pendulum-lunge ',
    name: 'výpady vzad/vpřed',
    description:
      'nohy jsou od sebe na úrovni kyčlí, chodidla i pohled směřují vpřed, střed těla je zpevněný. Paže máme podél těla, spojené před tělem nebo v bok. V případě výpadu vpřed s nádechem jednou nohou vykročíme dopředu (v případě výpadu vzad jednou nohou zakročíme dozadu). S výdechem se vrátíme do výchozí pozice. ',
    media: '/assets/pendulum-lunge.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'zadek, stehna',
  },
  {
    id: 'side-Lunge ',
    name: 'Výpady do strany',
    description:
      'Postavíme se s nohama od sebe. Začneme pohybem hýždí směrem vzad a následně ukročíme jednou nohou směrem do strany. Zároveň s tím se ohneme i v koleni a začneme klesat až do spodní pozice.Po dosažení spodní pozice celý pohyb obrátíme a dostaneme se do původní pozice. Záda jsou rovná',
    media: '/assets/side-Lunge.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'stehna',
  },
  {
    id: 'power-lunge',
    name: 'Výpady s výskokem',
    description:
      'Nohy u sebe. Pravou nohu dejte před sebe tak, aby stehno svíralo pravý úhel s lýtkem, levou nohu dejte za sebe. Při rozkročení jde  těžiště automaticky níže k zemi. Pomocí explozivní síly se vymrštěte, vyskočte a vyměňte nohy.',
    media: '/assets/power-lunge.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'stehna',
  },
  {
    id: 'side-leg-lift ',
    name: 'Unožování ve stoje s expanderem',
    description:
      'Postavte se rovně s expanderem kolem stehen a s nádechem tahem unožujte a s výdechem zase vracejte nohu zpět.',
    media: '/assets/side-leg-lift.png',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'boky',
  },
  {
    id: 'pelvic-tilt ',
    name: 'Zvedání pánve v leže',
    description:
      'Ležíme na zádech, paže  podél těla, nohy pokrčenée. S výdechem zvedáme pánev vzhůru, v horní pozici zatneme hýždě, s nádechem se vracíme do výchozí pozice.',
    media: '/assets/pelvic-tilt.gif',
    category: 'Dolní část těla',
    mainMuscleGroupe: 'hýždě',
  },
  {
    id: 'jumping-rope',
    name: 'švihadlo',
    description:
      'Postavte se na švihadlo s chodidlama vedle sebe. Chytněte rukojeti, narovnejte se a vytáhněte jej podél těla až do výše vašich ramen. Délka lanka švihadla by měla dosahovat až do výše vaší podpažní jamky. V základním postoji zůstávají záda v přirozeném zakřivení, což znamená, že se během skákání nezakláníte dozadu ani neprohýbáte dopředu.Soustřeďte se na to, že pohyb vychází zejména z kotníků a zápěstí. Nadloktí držte těsně vedle těla a paže pokrčte v loktech. Při skákání nezapomínejte na aktivaci středu těla. Dýchejte. Doskakujte zejména na špičky.    Snažte se skákat v pravidelném rytmu. Skákejte jen několik centimetrů nad zem. ',
    media: '/assets/jump-rope.gif',
    category: 'cardio',
    mainMuscleGroupe: '',
  },
  {
    id: 'burpee ',
    name: 'angličák',
    description:
      'Začněte ve stoje. Nohy na šířku ramen. Jděte do dřepu. Ve spodní poloze dřepu jdete rukama před tělo a následně na zem. Dlaně dejte na zem a nohy přemístěte dozadu. Poloha vzporu. Udělejte klik. Hrudník se dotýká země.  Při návratu do vrchní polohy cviku přemístěte nohy pod sebe a přejděte do výskoku. Výskok je dynamický. Ruce jdou  nad hlavu.',
    media: '/assets/Burpees.gif',
    category: 'cardio',
    mainMuscleGroupe: '',
  },
  {
    id: 'Jumping jack',
    name: 'Jumping jack',
    description:
      'Výchozí pozice je vzpřímený postoj s nohama u sebe a rukama podél těla. Mírně povyskoč, nohy jdou od sebe. Naskakujte na špičky. Při dopadu na špičky mějte kolena mírně pokrčená. Kolena celou dobu směřují před sebe. současně s pohybem nohou zvedejte ruce z výchozí polohy do polohy nad hlavou. Ruce nad hlavou se jemně dotýkají. Ruce nejsou úplně narovnané, ale lehce pokrčené v loktech.Po celou dobu pohybu mějte zatnuté břicho. Pohyb opakujte tam a zpět ',
    media: '/assets/jumping-jacks.gif',
    category: 'cardio',
    mainMuscleGroupe: '',
  },
];
