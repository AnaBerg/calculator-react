import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeStorage = ({ children }) => {
  const [darkMode, setDarkMode] = useState('light');

  const handleTheme = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
