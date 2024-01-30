import { ReactNode, useState } from 'react';
import { AppContext } from './AppContext ';
import {
  FormAnswers,
  initialFormAnswers,
  registration,
  signByFB,
  signByGoogle,
  signIn,
} from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';
import useData from '../data-mapping/useData';
import { signOut } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );
  const [newNote, setNewNote] = useState<DocumentData>();

  const {
    exercises,
    trainings,
    loading,
    trainingPlans,
    user,
    notes,
    setNotes,
  } = useData();

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
        notes,
        setNotes,
        newNote,
        setNewNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
