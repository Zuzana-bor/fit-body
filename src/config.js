import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { cardio, fullBody, lowerBody, upperBody } from './data/trainings';

export const Urls = {
  Plans: '/plans',
  Questions: '/questions',
  Exercise: '/exercise',
  Home: '/',
};

export const Pages = {
  Home: 'home',
  Plans: 'tréningové plány',
  Questions: 'dotazník',
  Exercise: 'databáze cviků',
};

export const plansTabs = [
  {
    id: 'upperBody',
    name: 'Horní část těla',
    icon: EmojiPeopleIcon,
    content: upperBody,
  },
  {
    id: 'lowerBody',
    name: 'Dolní část těla',
    icon: TransferWithinAStationIcon,
    content: lowerBody,
  },
  {
    id: 'fullBody',
    name: 'FullBody',
    icon: AccessibilityNewIcon,
    content: fullBody,
  },
  {
    id: 'cardio',
    name: 'Kardio cvičení',
    icon: FavoriteIcon,
    content: cardio,
  },
];
