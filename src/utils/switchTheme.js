import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'system';
  const [theme, setTheme] = useState(storedTheme);

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    if (theme === 'system') {
      document.body.setAttribute('data-theme', systemTheme);
    } else {
      document.body.setAttribute('data-theme', theme);
    }

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme, systemTheme]);

  useEffect(() => {
    if (theme !== 'system') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
