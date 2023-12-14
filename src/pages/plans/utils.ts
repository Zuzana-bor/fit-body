import { PlansTabsPart, PlansTabsPartConfig } from './config';
import { Trainings } from '../../data-mapping/trainings';

export const getPlansTabs = (
  plansTabsConfig: PlansTabsPartConfig[],
  trainings: Trainings,
): PlansTabsPart[] => {
  return plansTabsConfig
    .map((item) => ({
      ...item,
      content: trainings.find(({ id }) => id === item.id)?.training,
    }))
    .filter((item): item is PlansTabsPart => !!item.content);
};
