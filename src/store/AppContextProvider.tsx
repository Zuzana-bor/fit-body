import { ReactNode } from 'react';
import { AppContext } from './AppContext ';
import { FormAnswers, initialFormAnswers } from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';
import { getTrainings } from '../data-mapping/trainings';
import { trainingsData } from '../data/trainings';
import { exercises } from '../data/exercises';
import { trainingPlans } from '../data/trainingsPlans';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );
  const trainings = getTrainings(trainingsData, exercises);

  return (
    <AppContext.Provider
      value={{
        formAnswers,
        setFormAnswers,
        trainings,
        exercises,
        trainingPlans,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
