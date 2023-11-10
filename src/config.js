import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Cardio from './pages/plans/splitPlans/Cardio';
import UpperBody from './pages/plans/splitPlans/UpperBody';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import FullBody from './pages/plans/splitPlans/FullBody';
import LowerBody from './pages/plans/splitPlans/LowerBody';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

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
    content: UpperBody,
  },
  {
    id: 'lowerBody',
    name: 'Dolní část těla',
    icon: TransferWithinAStationIcon,
    content: LowerBody,
  },
  {
    id: 'fullBody',
    name: 'FullBody',
    icon: AccessibilityNewIcon,
    content: FullBody,
  },
  {
    id: 'cardio',
    name: 'Kardio cvičení',
    icon: FavoriteIcon,
    content: Cardio,
  },
];
