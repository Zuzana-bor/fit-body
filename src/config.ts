import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/types';

export enum Urls {
  Plans = '/plans',
  Questions = '/questions',
  Exercise = '/exercise',
  Home = '/',
}

export enum ApiUrls {
  Exercises = '/.netlify/functions/api-exercises',
  Trainings = '/.netlify/functions/api-trainings',
}

export const Pages: Record<keyof typeof Urls, string> = {
  Home: 'home',
  Plans: 'tréningové plány',
  Questions: 'dotazník',
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
