import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db, provider, providerFB } from './store/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getISOWeek } from 'date-fns';

const currentWeekNumber: number = getISOWeek(new Date());
console.log(currentWeekNumber);

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
  weeks: { 1: { burned: 0 } },
  likePlan: [''],
};

export type FirebaseUser = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  weeks: { [weekNumber: number]: { burned: number } };
  likePlan: string[];
};

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

export const addBurned = async (burned: number, user: FirebaseUser) => {
  try {
    if (user) {
      await addDoc(collection(db, 'users'), {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        weeks: { [currentWeekNumber]: { burned: burned } },
      });

      console.log('Document written with ID: ', burned);
    }
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const addLikePlan = async (likePlan: string, user: FirebaseUser) => {
  try {
    if (user) {
      await addDoc(collection(db, 'users'), {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        likePlan: [likePlan],
      });
      console.log('Document about favorite Plans ');
    }
  } catch (e) {
    console.error('error addind favorte plan', e);
  }
};

export const signByFB = async () => {
  await signInWithPopup(auth, providerFB);
};
