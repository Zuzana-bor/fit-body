"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/api-exercises.ts
var api_exercises_exports = {};
__export(api_exercises_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(api_exercises_exports);

// src/data/exercises.ts
var exercises = [
  {
    id: "curls",
    name: "Bicepsov\xFD zdvih s jednoru\u010Dkami",
    description: "S v\xFDdechem zved\xE1me oh\xFDb\xE1n\xEDm lokte st\u0159\xEDdav\u011B jednoru\u010Dky na \xFAroven ramene",
    media: "/assets/single-arm-dumbbell-row.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "biceps"
  },
  {
    id: "single-arm-dumbbell-row",
    name: "P\u0159\xEDtahy jednoru\u010Dek v p\u0159edklonu",
    description: "Podep\u0159ete se jednou pa\u017E\xED o \u017Eidli. V druh\xE9 ruce m\xE1te \u010Dinku, kterou p\u0159itahujete k t\u011Blu. Zat\xEDn\xE1te svaly okoolo lopatky a zp\u011Bt. ",
    media: "/assets/single-arm-dumbbell-row.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "z\xE1da"
  },
  {
    id: "inner-bicep-curl",
    name: "Bicepsov\xE9 zdvihy s rotac\xED",
    description: "St\u016Fjte s \u010Dinkama pod\xE9l t\u011Bla, dla\u0148 sm\u011B\u0159uje tak\xE9 k t\u011Blu.Zpevn\u011Bte st\u0159ed t\u011Bla. S v\xFDdechem zvedn\u011Bte \u010Dinky sm\u011Brem k hrudn\xEDku. Lokty se nehnou. Dr\u017E\xEDme a\u017E 2 sekundy a s n\xE1dechem se vrac\xEDme zp\u011Bt. ",
    media: "/assets/inner-bicep-curl.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "biceps"
  },
  {
    id: "tricep-overhead-extensions",
    name: "Tricepsov\xE9 tlaky",
    description: "St\u016Fjte s \u010Dinkou uchopenou ob\u011Bma rukama nad hlavou. \u010Cinku spou\u0161t\u011Bjte s n\xE1dechem za hlavu do prav\xE9ho \xFAhlu lokte. S v\xFDdechem zp\u011Bt.",
    media: "/assets/tricep-overhead-extensions.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "triceps"
  },
  {
    id: "reverse-snow-angle",
    name: "obr\xE1cen\xFD and\u011Bl",
    description: " Lehneme si na b\u0159icho, nohy m\xE1me p\xE1r centimetr\u016F od sebe a ruce nata\u017Een\xE9 sm\u011Brem dop\u0159edu. S n\xE1dechem nadzvedneme vr\u0161ek t\u011Bla lehce nad zem a dr\u017E\xEDme ho zvedl\xFD. Pohled sm\u011Bruje vp\u0159ed. Nata\u017Een\xE9 ruce za\u010Dneme pomal\xFDm obloukem zapa\u017Eovat a\u017E sm\u011Brem k noh\xE1m. Kone\u010Dn\xE1 pozice je t\u011Bsn\u011B vedle nohu.A zp\u011Bt.",
    media: "/assets/reverse-snow-angle.png",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "z\xE1da"
  },
  {
    id: "Close-Grip-Push-up",
    name: "Tricepsov\xE9 kliky",
    description: "Posa\u010Fte se z\xE1dy k \u017Eidli, ruce dejte za sebe na \u017Eidli a pokr\u010Dte v loktech. Nohy jsou nata\u017Een\xE9 nebo lehce pokr\u010Den\xE9. Zvedejte se narovn\xE1n\xEDm rukou v lokti.",
    media: "/assets/Close-Grip-Push-up.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "triceps"
  },
  {
    id: "Push-Ups (Womens)",
    name: "Kliky (d\xE1msk\xE9)",
    description: "V\xFDchoz\xED pozice je, \u017Ee kle\u010D\xEDme na kolenou a holen\u011B m\xE1me op\u0159en\xE9 o zem, sou\u010Dasn\u011B se op\u0159eme o dlan\u011B, vzd\xE1lenost by m\u011Bla b\xFDt na \u0161\xED\u0159ku ramen. Cel\xE9 t\u011Blo by m\u011Blo b\xFDt v rovin\u011B. Nepropadejte mezi lopatkami. S\xEDla by m\u011Bla vych\xE1zet z prsniho svalstva a ramen. ",
    media: "/assets/push-up.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "prsa"
  },
  {
    id: "dumbbell-tricep-kickback",
    name: "Tricepsov\xE9 kick-backy",
    description: "St\u016Fjte v pozici v\xFDpadu (jednoha vp\u0159ed), protilehl\xE1 ruka dr\u017E\xED \u010Dinku, loket u t\u011Bla. P\u0159edlokt\xED je kolmo k zemi. Pa\u017Ee s \u010Dinkou jde nahoru tak, aby v kone\u010Dn\xE9 pozici byla rovnob\u011B\u017En\u011B s tupem. N\xE1sleduje chvilkov\xE1 v\xFDdr\u017E a vr\xE1t\xEDme se do v\xFDchoz\xED pozice. ",
    media: "/assets/dumbbell-tricep-kickback.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "triceps"
  },
  {
    id: "arnoldpress",
    name: "Arnoldovy tlaky",
    description: "St\u016Fjte v pozici v\xFDpadu (jednoha vp\u0159ed), protilehl\xE1 ruka dr\u017E\xED \u010Dinku, loket u t\u011Bla. P\u0159edlokt\xED je kolmo k zemi. Pa\u017Ee s \u010Dinkou jde nahoru tak, aby v kone\u010Dn\xE9 pozici byla rovnob\u011B\u017En\u011B s tupem. N\xE1sleduje chvilkov\xE1 v\xFDdr\u017E a vr\xE1t\xEDme se do v\xFDchoz\xED pozice. ",
    media: "assets/arnoldpress.png",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "triceps"
  },
  {
    id: "plank-arm-lifts",
    name: "Zved\xE1n\xED pa\u017E\xED v planku",
    description: "Za\u010Dn\u011Bte v pozici planku. St\xE1hn\u011Bte b\u0159icho. Zvedejte st\u0159\xEDdav\u011B ruky p\u0159ed sebe, ani\u017Ebyste rotovali s bokama ",
    media: "/assets/plank-arm-lifts.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "b\u0159icho"
  },
  {
    id: "cross-Crunch",
    name: "Zkracova\u010Dky do k\u0159\xED\u017Ee",
    description: "Ruce d\xE1me na prsa, p\u0159\xEDpadn\u011B v t\xFDl, stehna m\xED\u0159\xED svisle vzh\u016Fru a nohy jsou ohnut\xE9 v kolenou.S n\xE1dechem odlepte ramena od zem\u011B a p\u0159irozen\xFDm zakulacen\xEDm zad p\u0159ibli\u017Ete loket k jednomu kolenu.B\u011Bhem zved\xE1n\xED prob\xEDh\xE1 v\xFDdech. A zp\u011Bt. Kolena st\u0159\xEDdejte.",
    media: "/assets/Cross-Crunch.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "b\u0159icho"
  },
  {
    id: "sit-ups",
    name: "Sedy-lehy",
    description: "V\xFDchoz\xED pozice- leh na z\xE1dach, nohy pokr\u010Den\xE9 s patama u sebe, ruce slo\u017Een\xE9 na prsou. Zved\xE1me se do sedu a vrac\xEDme se zp\u011Bt.",
    media: "/assets/sit-ups.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "b\u0159icho"
  },
  {
    id: "dumbbell-Standing-Lateral-Raise",
    name: "Upa\u017Eov\xE1n\xED ve stoje",
    description: "T\u011Blo je pevn\xE9 a ruce dr\u017E\xED \u010Dinky pod\xE9l t\u011Bla. Dlan\u011B sm\u011B\u0159uj\xED k t\u011Blu. Nadechneme se a plynule zved\xE1me ruce nahoru tak, aby lokty neklesaly pod \xFArove\u0148 z\xE1p\u011Bst\xED. Fin\xE1ln\xED poloha kon\u010D\xED na \xFArovni, kdy jsou pa\u017Ee rovnob\u011B\u017En\u011B se zem\xED.",
    media: "/assets/Dumbbell-Standing-Lateral-Raise.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "ramena"
  },
  {
    id: "reverse-Plank-Kicks",
    name: "Vykop\xE1v\xE1n\xED v obr\xE1cen\xE9m vzporu.",
    description: "Za\u010D\xEDn\xE1me v pozici obr\xE1cen\xE9ho prkna. p\xE1nev sm\u011B\u0159ujeme nahoru. Kolenem pohybujeme sm\u011Brem k hrudi a zp\u011Bt. Kolena st\u0159\xEDd\xE1me. ",
    media: "/assets/Reverse-Plank-Kicks.gif",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "b\u0159icho"
  },
  {
    id: "plank",
    name: "Plank",
    description: " Op\u0159ete se o lokty a prsty na nohou, dejte t\u011Blo do jedn\xE9 roviny jako prkno a v t\xE9to poloze setrvejte.",
    category: "Horn\xED \u010D\xE1st t\u011Bla",
    media: "/assets/plank.gif",
    mainMuscleGroupe: "b\u0159icho"
  },
  {
    id: "dumbbell-squat",
    name: "d\u0159ep s jednuru\u010Dkama",
    description: " Jednoru\u010Dky m\u011Bjte pod\xE9l t\u011Bla nebo  je dr\u017Ete polo\u017Een\xE9 na ramenou. Z\xE1da m\u011Bjte rovn\xE1, nohy rozkro\u010Den\xE9 na \u0161\xED\u0159ku ramen, pohled sm\u011B\u0159uje vp\u0159ed. S n\xE1dechem pokr\u010Dte kolena a ky\u010Dle jako p\u0159i sedu, s v\xFDdechem se vr\xE1\u0165te do v\xFDchoz\xED polohy",
    media: "/assets/dumbbell-squat.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "zadek"
  },
  {
    id: "dumbbell-sumo-deadlift",
    name: "sumo d\u0159ep s jednoru\u010Dkama",
    description: " Postavte se do \u0161irok\xE9ho postoje se \u0161pi\u010Dkami sm\u011B\u0159uj\xEDc\xEDmi ven. Zvedn\u011Bte jednoru\u010Dku za rukoje\u0165 nebo jeden konec (kotou\u010Dovou \u010D\xE1st) a po celou dobu ji dr\u017Ete nata\u017Een\xFDma rukama, kter\xE9 jsou rovnob\u011B\u017En\u011B s t\u011Blem. Nadechn\u011Bte se a pokr\u010Den\xEDm kolen ud\u011Blejte d\u0159ep. S v\xFDdechem se  plynule narovnejte. ",
    media: "/assets/dumbbell-sumo-deadlift.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "h\xFD\u017Ed\u011B,stehna"
  },
  {
    id: "jump-squat",
    name: "d\u0159ep s v\xFDskokem",
    description: " stoj\xEDme rovn\u011B, nohy jsou rozkro\u010Den\xE9 o n\u011Bco v\xEDce, ne\u017E je \u0161\xED\u0159e ramen, \u0161pi\u010Dky sm\u011B\u0159uj\xED m\xEDrn\u011B ven. S n\xE1dechem jdeme do d\u0159epu, s v\xFDdechem se odraz\xEDme od zem\u011B a vysko\u010D\xEDme co nejv\xFD\u0161e. ",
    media: "/assets/jump-Squat.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "h\xFD\u017Ed\u011B,stehna"
  },
  {
    id: "dumbbell-deadlifts",
    name: "Mrtv\xFD tah",
    description: "Postoje je na \u0161\xED\u0159i ramen.Nadechneme se a zpevn\xEDme st\u0159ed t\u011Bla spole\u010Dn\u011B se z\xE1dov\xFDm svalstvem a zvedneme \u010Dinky ze zem\u011B. Dr\u017E\xEDme je nadhmatem. Za\u010Dneme pomalu a kontrolovan\u011B klesat sm\u011Brem k zemi st\u0159edn\xEDm tempem, dr\u017E\xEDme t\u011Blo zpevn\u011Bn\xE9. Jakmile dos\xE1hneme spodn\xED polohy, tak s v\xFDdechem vyraz\xEDme sm\u011Brem vzh\u016Fru do p\u016Fvodn\xED polohy, kde na sekundu zatneme i p\u0159edn\xED stehna a h\xFD\u017Ed\u011B pro lep\u0161\xED intenzitu a zapojen\xED dan\xFDch sval\u016F.S postupn\xFDm n\xE1dechem za\u010Dneme op\u011Bt klesat sm\u011Brem dolu a cel\xFD postup opakujeme. ",
    media: "/assets/dumbbell-deadlifts.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "stehna,h\xFD\u017Ed\u011B,z\xE1da"
  },
  {
    id: "pendulum-lunge ",
    name: "v\xFDpady vzad/vp\u0159ed",
    description: "nohy jsou od sebe na \xFArovni ky\u010Dl\xED, chodidla i pohled sm\u011B\u0159uj\xED vp\u0159ed, st\u0159ed t\u011Bla je zpevn\u011Bn\xFD. Pa\u017Ee m\xE1me pod\xE9l t\u011Bla, spojen\xE9 p\u0159ed t\u011Blem nebo v bok. V p\u0159\xEDpad\u011B v\xFDpadu vp\u0159ed s n\xE1dechem jednou nohou vykro\u010D\xEDme dop\u0159edu (v p\u0159\xEDpad\u011B v\xFDpadu vzad jednou nohou zakro\u010D\xEDme dozadu). S v\xFDdechem se vr\xE1t\xEDme do v\xFDchoz\xED pozice. ",
    media: "/assets/pendulum-lunge.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "zadek, stehna"
  },
  {
    id: "side-lunge ",
    name: "V\xFDpady do strany",
    description: "Postav\xEDme se s nohama od sebe. Za\u010Dneme pohybem h\xFD\u017Ed\xED sm\u011Brem vzad a n\xE1sledn\u011B ukro\u010D\xEDme jednou nohou sm\u011Brem do strany. Z\xE1rove\u0148 s t\xEDm se ohneme i v koleni a za\u010Dneme klesat a\u017E do spodn\xED pozice.Po dosa\u017Een\xED spodn\xED pozice cel\xFD pohyb obr\xE1t\xEDme a dostaneme se do p\u016Fvodn\xED pozice. Z\xE1da jsou rovn\xE1",
    media: "/assets/side-Lunge.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "stehna"
  },
  {
    id: "power-lunge",
    name: "V\xFDpady s v\xFDskokem",
    description: "Nohy u sebe. Pravou nohu dejte p\u0159ed sebe tak, aby stehno sv\xEDralo prav\xFD \xFAhel s l\xFDtkem, levou nohu dejte za sebe. P\u0159i rozkro\u010Den\xED jde  t\u011B\u017Ei\u0161t\u011B automaticky n\xED\u017Ee k zemi. Pomoc\xED explozivn\xED s\xEDly se vymr\u0161t\u011Bte, vysko\u010Dte a vym\u011B\u0148te nohy.",
    media: "/assets/power-lunge.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "stehna"
  },
  {
    id: "side-leg-lift ",
    name: "Uno\u017Eov\xE1n\xED ve stoje s expanderem",
    description: "Postavte se rovn\u011B s expanderem kolem stehen a s n\xE1dechem tahem uno\u017Eujte a s v\xFDdechem zase vracejte nohu zp\u011Bt.",
    media: "/assets/side-leg-lift.png",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "boky"
  },
  {
    id: "pelvic-tilt ",
    name: "Zved\xE1n\xED p\xE1nve v le\u017Ee",
    description: "Le\u017E\xEDme na z\xE1dech, pa\u017Ee  pod\xE9l t\u011Bla, nohy pokr\u010Den\xE9e. S v\xFDdechem zved\xE1me p\xE1nev vzh\u016Fru, v horn\xED pozici zatneme h\xFD\u017Ed\u011B, s n\xE1dechem se vrac\xEDme do v\xFDchoz\xED pozice.",
    media: "/assets/pelvic-tilt.gif",
    category: "Doln\xED \u010D\xE1st t\u011Bla",
    mainMuscleGroupe: "boky"
  },
  {
    id: "jumping-rope",
    name: "\u0161vihadlo",
    description: "Postavte se na \u0161vihadlo s chodidlama vedle sebe. Chytn\u011Bte rukojeti, narovnejte se a vyt\xE1hn\u011Bte jej pod\xE9l t\u011Bla a\u017E do v\xFD\u0161e va\u0161ich ramen. D\xE9lka lanka \u0161vihadla by m\u011Bla dosahovat a\u017E do v\xFD\u0161e va\u0161\xED podpa\u017En\xED jamky. V z\xE1kladn\xEDm postoji z\u016Fst\xE1vaj\xED z\xE1da v p\u0159irozen\xE9m zak\u0159iven\xED, co\u017E znamen\xE1, \u017Ee se b\u011Bhem sk\xE1k\xE1n\xED nezakl\xE1n\xEDte dozadu ani neproh\xFDb\xE1te dop\u0159edu.Soust\u0159e\u010Fte se na to, \u017Ee pohyb vych\xE1z\xED zejm\xE9na z kotn\xEDk\u016F a z\xE1p\u011Bst\xED. Nadlokt\xED dr\u017Ete t\u011Bsn\u011B vedle t\u011Bla a pa\u017Ee pokr\u010Dte v loktech. P\u0159i sk\xE1k\xE1n\xED nezapom\xEDnejte na aktivaci st\u0159edu t\u011Bla. D\xFDchejte. Doskakujte zejm\xE9na na \u0161pi\u010Dky.    Sna\u017Ete se sk\xE1kat v pravideln\xE9m rytmu. Sk\xE1kejte jen n\u011Bkolik centimetr\u016F nad zem. ",
    media: "/assets/jump-rope.gif",
    category: "cardio",
    mainMuscleGroupe: ""
  },
  {
    id: "burpee ",
    name: "angli\u010D\xE1k",
    description: "Za\u010Dn\u011Bte ve stoje. Nohy na \u0161\xED\u0159ku ramen. Jd\u011Bte do d\u0159epu. Ve spodn\xED poloze d\u0159epu jdete rukama p\u0159ed t\u011Blo a n\xE1sledn\u011B na zem. Dlan\u011B dejte na zem a nohy p\u0159em\xEDst\u011Bte dozadu. Poloha vzporu. Ud\u011Blejte klik. Hrudn\xEDk se dot\xFDk\xE1 zem\u011B.  P\u0159i n\xE1vratu do vrchn\xED polohy cviku p\u0159em\xEDst\u011Bte nohy pod sebe a p\u0159ejd\u011Bte do v\xFDskoku. V\xFDskok je dynamick\xFD. Ruce jdou  nad hlavu.",
    media: "/assets/Burpees.gif",
    category: "cardio",
    mainMuscleGroupe: ""
  },
  {
    id: "jumping-jack",
    name: "Jumping jack",
    description: "V\xFDchoz\xED pozice je vzp\u0159\xEDmen\xFD postoj s nohama u sebe a rukama pod\xE9l t\u011Bla. M\xEDrn\u011B povysko\u010D, nohy jdou od sebe. Naskakujte na \u0161pi\u010Dky. P\u0159i dopadu na \u0161pi\u010Dky m\u011Bjte kolena m\xEDrn\u011B pokr\u010Den\xE1. Kolena celou dobu sm\u011B\u0159uj\xED p\u0159ed sebe. sou\u010Dasn\u011B s pohybem nohou zvedejte ruce z v\xFDchoz\xED polohy do polohy nad hlavou. Ruce nad hlavou se jemn\u011B dot\xFDkaj\xED. Ruce nejsou \xFApln\u011B narovnan\xE9, ale lehce pokr\u010Den\xE9 v loktech.Po celou dobu pohybu m\u011Bjte zatnut\xE9 b\u0159icho. Pohyb opakujte tam a zp\u011Bt ",
    media: "/assets/jumping-jacks.gif",
    category: "cardio",
    mainMuscleGroupe: ""
  }
];

// netlify/functions/api-exercises.ts
var handler = async ({ queryStringParameters }) => {
  const delay = parseInt(queryStringParameters?.delay || "") || 0;
  await new Promise((resolve) => setTimeout(resolve, delay * 1e3));
  return {
    statusCode: 200,
    body: JSON.stringify(exercises)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=api-exercises.js.map
