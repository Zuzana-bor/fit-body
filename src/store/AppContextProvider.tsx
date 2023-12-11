import { ReactNode } from 'react';
import { AppContext } from './AppContext ';
import { FormAnswers, initialFormAnswers } from '../config';
import { useLocalStorage } from '@uidotdev/usehooks';

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [formAnswers, setFormAnswers] = useLocalStorage<FormAnswers>(
    'formAnswers',
    initialFormAnswers,
  );

  return (
    <AppContext.Provider value={{ formAnswers, setFormAnswers }}>
      {children}
    </AppContext.Provider>
  );
};
