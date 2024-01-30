import { createContext } from 'react';
import {
  FirebaseUser,
  FormAnswers,
  initialFormAnswers,
  initialNotes,
  initialUser,
  signOut,
} from '../config';
import { Exercise } from '../data/exercises';
import { Trainings } from '../data-mapping/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, provider, providerFB } from './firebase';
import { DocumentData } from 'firebase/firestore';

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
  registration: (email: string, password: string) => Promise<void>;
  signByGoogle: () => Promise<void>;
  signByFB: () => Promise<void>;
  notes?: DocumentData;
  setNotes: React.Dispatch<React.SetStateAction<DocumentData>>;
  newNote?: DocumentData;
  setNewNote: React.Dispatch<React.SetStateAction<DocumentData>>;
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
  registration: async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  },
  signByGoogle: async () => {
    await signInWithPopup(auth, provider);
  },
  signByFB: async () => {
    await signInWithPopup(auth, providerFB);
  },
  notes: initialNotes,
  setNotes: () => undefined,
  newNote: initialNotes,
  setNewNote: () => undefined,
};
export const AppContext = createContext(initialState);
