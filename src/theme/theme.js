// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Shared typography settings
const typography = {
  fontFamily: '"Preahvihear", sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  h1: { fontWeight: 700 },
  h2: { fontWeight: 700 },
  h3: { fontWeight: 600 },
  h4: { fontWeight: 600 },
  h5: { fontWeight: 500 },
  h6: { fontWeight: 500 },
  body1: { fontWeight: 400 },
  body2: { fontWeight: 400 }
};

// Color palette definitions - updated with WovvTech-inspired blues
const colors = {
  // Brand colors - consistent across themes
  primary: '#0078FF',    // Main accent color (blue)
  secondary: '#6C47FF',  // Secondary accent color (indigo)
  accent1: '#0062FF',    // Additional accent color
  accent2: '#0091FF',    // Additional accent color
  
  // Light mode specific colors
  lightBackground: '#ffffff',
  lightSecondaryBackground: '#f8fafc',
  lightText: '#000000',
  lightSecondaryText: '#555555',
  lightBorder: '#e0e7ff',
  
  // Dark mode specific colors
  darkBackground: '#161925',
  darkSecondaryBackground: '#1e2235',
  darkText: '#ffffff',
  darkSecondaryText: '#b6c0d0',
  darkBorder: '#2e3654'
};

// CSS custom properties for global scope access
export const lightModeVars = {
  '--background': colors.lightBackground,
  '--secondary-bg': colors.lightSecondaryBackground,
  '--text': colors.lightText,
  '--accent': colors.primary,
  '--secondary-text': colors.lightSecondaryText,
  '--border': colors.lightBorder,
};

export const darkModeVars = {
  '--background': colors.darkBackground,
  '--secondary-bg': colors.darkSecondaryBackground,
  '--text': colors.darkText,
  '--accent': colors.primary,
  '--secondary-text': colors.darkSecondaryText,
  '--border': colors.darkBorder,
};

// Theme factory functions
export const createLightTheme = () =>
  createTheme({
    palette: {
      mode: 'light',
      primary: { 
        main: colors.primary,
        dark: colors.accent1,
      },
      secondary: { 
        main: colors.secondary 
      },
      background: {
        default: colors.lightBackground,
        paper: colors.lightSecondaryBackground,
      },
      text: {
        primary: colors.lightText,
        secondary: colors.lightSecondaryText,
      },
      border: colors.lightBorder,
    },
    typography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0 4px 20px rgba(0, 120, 255, 0.08)'
          }
        }
      }
    },
  });

export const createDarkTheme = () =>
  createTheme({
    palette: {
      mode: 'dark',
      primary: { 
        main: colors.primary,
        dark: colors.accent1,
      },
      secondary: { 
        main: colors.secondary 
      },
      background: {
        default: colors.darkBackground,
        paper: colors.darkSecondaryBackground,
      },
      text: {
        primary: colors.darkText,
        secondary: colors.darkSecondaryText,
      },
      border: colors.darkBorder,
    },
    typography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0 4px 20px rgba(0, 30, 60, 0.2)'
          }
        }
      }
    },
  });

// Common styled section header for use across components
export const sectionHeaderStyles = {
  fontWeight: 600,
  position: 'relative',
  display: 'inline-block',
  marginBottom: '30px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '60%',
    height: '3px',
    background: 'linear-gradient(90deg, #0078FF, #6C47FF, transparent)'
  }
};

// Common section container styles
export const sectionContainerStyles = (theme) => ({
  py: { xs: 2, md: 6 },
  px: { xs: 2, md: 4 },
  bgcolor: 'background.paper',
  color: 'text.primary',
  borderRadius: '12px',
  boxShadow: `0 8px 32px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 120, 255, 0.08)'
  }`,
  margin: { xs: '20px auto', md: '40px auto' },
});