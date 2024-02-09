import { ReactNode, useState } from 'react';
import { AppContext } from './AppContext ';
import {
  FormAnswers,
  addBurned,
  initialFormAnswers,
  registration,
  signByFB,
  signByGoogle,
  signIn,
} from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';
import useData from '../data-mapping/useData';
import { signOut } from 'firebase/auth';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );
  const [notes, setNotes] = useState<number | undefined>(0);
  const [newNote, setNewNote] = useState<number | undefined>(0);
  const [likePlan, setLikePlan] = useState<string | undefined>('');

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
        registration,
        signByGoogle,
        signByFB,
        addBurned,
        notes,
        setNotes,
        newNote,
        setNewNote,
        likePlan,
        setLikePlan,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
