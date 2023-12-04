import { ReactNode, useState } from 'react';
import { AppContext } from './AppContext ';
import { FormAnswers, initialFormAnswers } from '../config';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] =
    useState<FormAnswers>(initialFormAnswers);

  return (
    <AppContext.Provider value={{ formAnswers, setFormAnswers }}>
      {children}
    </AppContext.Provider>
  );
};
