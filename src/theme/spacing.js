// src/theme/spacing.js
/**
 * Simplified spacing system for the portfolio
 * Designed to avoid conflicts with global styles
 */

// Base spacing unit in pixels (much smaller to avoid problems)
const BASE_UNIT = 1;

// Simple spacing values that won't override your existing styles
export const spacing = {
  // These values are in pixels
  xs: 4,       // Extra small
  sm: 8,       // Small 
  md: 16,      // Medium
  lg: 24,      // Large
  xl: 32,      // Extra large
};

// Simple section styles that don't conflict with your existing design
export const sectionStyles = {
  // Avoiding huge padding/margin values
  container: {
    padding: { xs: '1rem', md: '2rem' },
    marginTop: { xs: '2rem', md: '2.5rem' },
    marginBottom: { xs: '2rem', md: '2.5rem' },
    borderRadius: '8px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    // Explicitly setting max-width to avoid stretching
    maxWidth: '1200px',
    mx: 'auto', // Center horizontally
  },
  
  // Header style that matches your current design
  sectionHeader: {
    fontWeight: 600,
    position: "relative",
    display: "inline-block",
    marginBottom: "30px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: 0,
      width: "60%",
      height: "3px",
      background: "linear-gradient(90deg, #c778dd, transparent)"
    }
  }
};