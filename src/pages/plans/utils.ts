import { PlansTabsPart, PlansTabsPartConfig } from '../../config';
import {
  TrainingConfig,
  TrainingPart,
  TrainingType,
} from '../../data/trainings';

export const getPlansTabs = (
  plansTabsConfig: PlansTabsPartConfig[],
  trainings: TrainingConfig,
): PlansTabsPart[] => {
  plansTabsConfig.map((item) => ({
    ...item,
    content: trainings.find(({ id }) => id === item.id),
  }));
};
