import { createContext } from 'react';
import {
  FirebaseUser,
  FormAnswers,
  initialFormAnswers,
  initialUser,
  signOut,
} from '../config';
import { Exercise } from '../data/exercises';
import { Trainings } from '../data-mapping/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export type AppState = {
  formAnswers: FormAnswers;
  setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
  exercises?: Exercise[];
  trainings?: Trainings;
  trainingPlans?: TrainingPlan[];
  loading: boolean;
  user?: FirebaseUser;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: (auth: Auth) => Promise<void>;
};

export const initialState: AppState = {
  formAnswers: initialFormAnswers,
  setFormAnswers: () => undefined,
  user: initialUser,
  loading: false,
  signIn: async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  signOut: async () => {
    await signOut();
  },
};
export const AppContext = createContext(initialState);
