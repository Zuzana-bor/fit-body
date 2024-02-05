import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, provider, providerFB } from './store/firebase';

export enum Urls {
  Profile = '/profile',
  Plans = '/plans',
  Questions = '/questions',
  Exercise = '/exercise',
  Home = '/',
}

export enum ApiUrls {
  Exercises = '/.netlify/functions/api-exercises',
  Trainings = '/.netlify/functions/api-trainings',
  TrainingPlans = '/.netlify/functions/api-trainingsPlans',
}

export const Pages: Record<keyof typeof Urls, string> = {
  Home: 'home',
  Questions: 'dotazník',
  Plans: 'tréningové plány',
  Exercise: 'databáze cviků',
  Profile: 'Můj profil',
};

export type SvgIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

export const initialFormAnswers: FormAnswers = {
  weight: 0,
  height: 0,
  age: 0,
  gender: '',
  activity: '',
  target: '',
  sleep: '',
  intensity: '',
};

export type FormAnswers = {
  weight: number;
  height: number;
  age: number;
  gender: string;
  activity: string;
  target: string;
  sleep: string;
  intensity: string;
};

export const initialUser: FirebaseUser = {
  uid: '',
  displayName: '',
  email: '',
};

export type FirebaseUser = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
};

export type NotesData = [
  {
    user: string;
    burned: number;
  },
];

export const initialNotes: NotesData = [
  {
    user: '',
    burned: 0,

    // other properties...
  },
];
// additional objects if needed...

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Přihlášení bylo úspěšné.');
  } catch (error) {
    console.error('Chyba při přihlašování:', error);
  }
};

export const signOut = async () => {
  await signOut();
};

export const registration = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    console.log('registrace byla uspěšná');
  } catch (error) {
    const errorMessage = error;
    console.log('registrace neproběhla', errorMessage);
  }
};

export const signByGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
    console.log('uspěšně přihlášen přes google');
  } catch (error) {
    console.log('nepodařilo se');
  }
};

export const signByFB = async () => {
  await signInWithPopup(auth, providerFB);
};
