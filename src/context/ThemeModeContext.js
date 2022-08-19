import { createContext } from 'react';

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children, themeMode }) => {

  return (
    <ThemeModeContext.Provider value={themeMode}>
      {children}
    </ThemeModeContext.Provider>
  );
};
