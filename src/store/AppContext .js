import { createContext } from 'react';

export const initialState = {
  name: 'Ahoj',
  answers: {},
};
export const AppContext = createContext(initialState);
