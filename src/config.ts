import {
  AccessibilityNew,
  Favorite,
  EmojiPeople,
  TransferWithinAStation,
} from '@mui/icons-material';

import {
  TrainingPart,
  cardio,
  fullBody,
  lowerBody,
  upperBody,
} from './data/trainings';

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

export type PlansTabsPart = {
  id: string;
  name: string;
  icon: string;
  content: TrainingPart;
};

export const plansTabs = [
  {
    id: 'upperBody',
    name: 'Horní část těla',
    icon: EmojiPeople,
    content: upperBody,
  },
  {
    id: 'lowerBody',
    name: 'Dolní část těla',
    icon: TransferWithinAStation,
    content: lowerBody,
  },
  {
    id: 'fullBody',
    name: 'FullBody',
    icon: AccessibilityNew,
    content: fullBody,
  },
  {
    id: 'cardio',
    name: 'Kardio cvičení',
    icon: Favorite,
    content: cardio,
  },
];
