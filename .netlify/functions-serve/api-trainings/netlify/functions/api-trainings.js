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

// netlify/functions/api-trainings.ts
var api_trainings_exports = {};
__export(api_trainings_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(api_trainings_exports);

// src/data/trainings.ts
var upperBody = [
  { exerciseId: "jumping-jack", number: "1 minuta" },
  { exerciseId: "inner-bicep-curl", number: "15 / 3" },
  { exerciseId: "tricep-overhead-extensions", number: "15 / 2" },
  { exerciseId: "arnoldpress", number: "20 / 3" },
  { exerciseId: "single-arm-dumbbell-row", number: "20 / 3" },
  { exerciseId: "push-ups", number: "15 / 2" },
  { exerciseId: "burpee", number: "10 / 2" },
  { exerciseId: "plank-arm-lifts", number: "12 / 2" },
  { exerciseId: "sit-ups", number: "30 / 3" },
  { exerciseId: "reverse-Plank-Kicks", number: "20 / 3" }
];
var fullBody = [
  { exerciseId: "jumping-rope", number: "1 minuta" },
  { exerciseId: "dumbbell-squat", number: "30/3" },
  { exerciseId: "pendulum-lunge", number: "20/3" },
  { exerciseId: "side-leg-lift", number: "20/3" },
  { exerciseId: "push-Ups", number: "15/2" },
  { exerciseId: "dumbbell-Standing-Lateral-Raise", number: "15/2" },
  { exerciseId: "inner-bicep-curl", number: "15/3" },
  { exerciseId: "tricep-overhead-extensions", number: "15/2" },
  { exerciseId: "reverse-snow-angle", number: "10/3" },
  { exerciseId: "cross-Crunch", number: "30/3" },
  { exerciseId: "plank", number: "50 sekund/2" }
];
var lowerBody = [
  { exerciseId: "jumping-jack", number: "1 minuta" },
  { exerciseId: "dumbbell-deadlifts", number: "20 / 3" },
  { exerciseId: "dumbbell-sumo-deadlift", number: "20 / 3" },
  { exerciseId: "jump-squat", number: "20 / 3" },
  { exerciseId: "side-Lunge", number: "20 / 3" },
  { exerciseId: "power-lunge", number: "30 / 3" },
  { exerciseId: "burpee", number: "10 / 2" },
  { exerciseId: "pelvic-tilt", number: "15 / 2" }
];
var cardio = [
  { exerciseId: "jumping-rope", number: "1 minuta" },
  { exerciseId: "jumping-jack", number: "1 minuta" },
  { exerciseId: "sit-ups", number: "30 / 3" },
  { exerciseId: "burpee", number: "10 / 2" },
  { exerciseId: "jump-squat", number: "20 / 3" },
  { exerciseId: "side-lunge", number: "20 / 3" },
  { exerciseId: "power-lunge", number: "30 / 3" },
  { exerciseId: "push-ups", number: "15/2" }
];
var trainingsData = [
  {
    id: "upperBody",
    training: upperBody
  },
  {
    id: "lowerBody",
    training: lowerBody
  },
  {
    id: "fullBody",
    training: fullBody
  },
  {
    id: "cardio",
    training: cardio
  }
];

// netlify/functions/api-trainings.ts
var handler = async ({ queryStringParameters }) => {
  const delay = parseInt(queryStringParameters?.delay || "") || 0;
  await new Promise((resolve) => setTimeout(resolve, delay * 1e3));
  return {
    statusCode: 200,
    body: JSON.stringify(trainingsData)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=api-trainings.js.map
