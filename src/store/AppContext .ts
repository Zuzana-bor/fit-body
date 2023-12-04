import { createContext } from 'react';
import { FormAnswers, initialFormAnswers } from '../config';

export type AppState = {
  formAnswers: FormAnswers;
  setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
};

export const initialState: AppState = {
  formAnswers: initialFormAnswers,
  setFormAnswers: () => undefined,
};
export const AppContext = createContext(initialState);
