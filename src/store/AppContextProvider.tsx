import { ReactNode } from 'react';
import { AppContext } from './AppContext ';
import {
  FirebaseUser,
  FormAnswers,
  initialFormAnswers,
  signIn,
} from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';
import useData from '../data-mapping/useData';
import { signOut } from 'firebase/auth';

type Props = {
  children: ReactNode;
};

export type FirebaseType = {
  user: FirebaseUser | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );
  const { exercises, trainings, loading, trainingPlans, user } = useData();

  return (
    <AppContext.Provider
      value={{
        formAnswers,
        setFormAnswers,
        trainings,
        exercises,
        trainingPlans,
        loading,
        user,
        signOut,
        signIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
