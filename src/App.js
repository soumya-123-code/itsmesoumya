// src/App.js
import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Layout from './blocks/common/Layout';
import { AppProvider, useAppContext } from './context/AppContext';
import './utils/animations.css'; // Will create this file below

// Main App inner component (receives context)
const AppContent = () => {
  const { theme, isLoading } = useAppContext();
  
  // Block scrolling when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);
  
  // Set theme color in meta tags
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.palette.primary.main);
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

// Root App component
const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;