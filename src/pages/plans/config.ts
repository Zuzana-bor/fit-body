import {
  AccessibilityNew,
  Favorite,
  EmojiPeople,
  TransferWithinAStation,
} from '@mui/icons-material';

import { SvgIcon } from '../../config';
import { Training } from '../../data-mapping/trainings';

export type PlansTabsPartConfig = {
  id: string;
  name: string;
  icon: SvgIcon;
};
export type PlansTabsPart = PlansTabsPartConfig & {
  content: Training;
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
