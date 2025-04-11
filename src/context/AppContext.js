// src/context/AppContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { createLightTheme, createDarkTheme, lightModeVars, darkModeVars } from '../theme/theme';

// Create context
export const AppContext = createContext();

// Custom hook for using the context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  // Theme state
  const getInitialThemeMode = () => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      return savedMode === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialThemeMode);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);bb
  // Theme object
  const theme = isDarkMode ? createDarkTheme() : createLightTheme();

  // Toggle theme
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  // Toggle animations
  const toggleAnimations = () => {
    const newState = !animationsEnabled;
    setAnimationsEnabled(newState);
    localStorage.setItem('animationsEnabled', newState.toString());
  };

  // Load animation preference from localStorage
  useEffect(() => {
    const savedPref = localStorage.getItem('animationsEnabled');
    if (savedPref !== null) {
      setAnimationsEnabled(savedPref === 'true');
    }
    
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Apply CSS variables and save preference when theme changes
  useEffect(() => {
    const currentStyles = isDarkMode ? darkModeVars : lightModeVars;
    Object.entries(currentStyles).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Context value
  const contextValue = {
    theme,
    isDarkMode,
    toggleTheme,
    animationsEnabled,
    toggleAnimations,
    isLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};