import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './store/firebase';

export enum Urls {
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
  uid: '0',
  displayName: 'Jan',
  email: 'z@gmail.com',
};

export type FirebaseUser = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
};

export const signIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// Funkce pro odhlášení
export const signOut = async () => {
  await signOut();
};
