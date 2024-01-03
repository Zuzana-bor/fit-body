import { ReactNode } from 'react';
import { AppContext } from './AppContext ';
import { FormAnswers, initialFormAnswers } from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';
import { trainingPlans } from '../data/trainingsPlans';
import useData from '../data-mapping/useData';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );
  const { exercises, trainings, loading, trainingPlans } = useData();

  return (
    <AppContext.Provider
      value={{
        formAnswers,
        setFormAnswers,
        trainings,
        exercises,
        trainingPlans,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
