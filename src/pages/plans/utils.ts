import { TrainingsData } from '../../data/trainings';
import { PlansTabsPart, PlansTabsPartConfig } from './config';

export const getPlansTabs = (
  plansTabsConfig: PlansTabsPartConfig[],
  trainingsData: TrainingsData,
): PlansTabsPart[] => {
  return plansTabsConfig
    .map((item) => ({
      ...item,
      content: trainingsData.find(({ id }) => id === item.id)?.training,
    }))
    .filter((item): item is PlansTabsPart => !!item.content);
};
