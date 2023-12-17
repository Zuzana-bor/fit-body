import { ReactNode } from 'react';
import { AppContext } from './AppContext ';
import { FormAnswers, initialFormAnswers } from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';
import { getTrainings } from '../data-mapping/trainings';
import { trainingsData } from '../data/trainings';
import { exercises } from '../data/exercises';
import { getKoefIntensity } from '../pages/questions/utils';
import { trainingPlanData } from '../data/trainingsPlans';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );
  const trainings = getTrainings(trainingsData, exercises);
  const plans = trainingPlanData;

  return (
    <AppContext.Provider
      value={{ formAnswers, setFormAnswers, trainings, exercises, plans }}
    >
      {children}
    </AppContext.Provider>
  );
};
