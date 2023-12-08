import {
  AccessibilityNew,
  Favorite,
  EmojiPeople,
  TransferWithinAStation,
} from '@mui/icons-material';

import {
  TrainingPart,
  TrainingType,
  cardio,
  fullBody,
  lowerBody,
  upperBody,
} from './data/trainings';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/types';

export enum Urls {
  Plans = '/plans',
  Questions = '/questions',
  Exercise = '/exercise',
  Home = '/',
}

export const Pages: Record<keyof typeof Urls, string> = {
  Home: 'home',
  Plans: 'tréningové plány',
  Questions: 'dotazník',
  Exercise: 'databáze cviků',
};

export type PlansTabsPartConfig = {
  id: string;
  name: string;
  icon: SvgIcon;
};
export type PlansTabsPart = PlansTabsPartConfig & {
  content: TrainingType;
};
type SvgIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};
export const plansTabsConfig: PlansTabsPartConfig[] = [
  {
    id: 'upperBody',
    name: 'Horní část těla',
    icon: EmojiPeople,
  },
  {
    id: 'lowerBody',
    name: 'Dolní část těla',
    icon: TransferWithinAStation,
  },
  {
    id: 'fullBody',
    name: 'FullBody',
    icon: AccessibilityNew,
  },
  {
    id: 'cardio',
    name: 'Kardio cvičení',
    icon: Favorite,
  },
];

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
