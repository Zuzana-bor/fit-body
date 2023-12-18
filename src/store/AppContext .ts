import { createContext } from 'react';
import { FormAnswers, initialFormAnswers } from '../config';
import { Exercise } from '../data/exercises';
import { Trainings } from '../data-mapping/trainings';
import { TrainingPlan } from '../data/trainingsPlans';

export type AppState = {
  formAnswers: FormAnswers;
  setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
  exercises?: Exercise[];
  trainings?: Trainings;
  trainingPlans?: TrainingPlan[];
};

export const initialState: AppState = {
  formAnswers: initialFormAnswers,
  setFormAnswers: () => undefined,
};
export const AppContext = createContext(initialState);
