import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Switch } from '@mui/material';
import Layout from './blocks/common/Layout';

// Define common typography settings
const typography = {
  fontFamily: '"Fira Code", monospace',
};

// Define common palette settings
const commonPalette = {
  primary: { main: '#6200ea' },
};

// Light mode custom variables
const lightModeStyles = {
  '--background': '#ffffff',
  '--secondary-bg': '#f7f7f7',
  '--text': '#000000',
  '--accent': '#7127BA',
  '--secondary-text': '#555555',
  '--border': '#dddddd',
};

// Dark mode custom variables
const darkModeStyles = {
  '--background': '#191919',
  '--secondary-bg': '#24242b',
  '--text': '#fff',
  '--accent': '#7127BA',
  '--secondary-text': '#abb2bf',
  '--border': '#565656',
};

// Define light and dark themes
const createLightTheme = () =>
  createTheme({
    palette: {
      mode: 'light',
      ...commonPalette,
      background: {
        default: lightModeStyles['--background'],
        paper: lightModeStyles['--secondary-bg'],
      },
      text: {
        primary: lightModeStyles['--text'],
        secondary: lightModeStyles['--secondary-text'],
      },
    },
    typography,
  });

const createDarkTheme = () =>
  createTheme({
    palette: {
      mode: 'dark',
      primary: { main: darkModeStyles['--accent'] },
      background: {
        default: darkModeStyles['--background'],
        paper: darkModeStyles['--secondary-bg'],
      },
      text: {
        primary: darkModeStyles['--text'],
        secondary: darkModeStyles['--secondary-text'],
      },
    },
    typography,
  });

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? createDarkTheme() : createLightTheme();

  // Injecting custom CSS variables dynamically
  useEffect(() => {
    const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

    Object.keys(currentStyles).forEach((key) => {
      document.documentElement.style.setProperty(key, currentStyles[key]);
    });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <Layout />
        <div style={{ marginTop: '20px' }}>
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            name="themeSwitch"
            color="primary"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
