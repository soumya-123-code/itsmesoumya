// src/components/Layout.jsx (improved version)
import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  CircularProgress,
  Slide,
  Fade,
  Backdrop,
  Switch,
  FormControlLabel,
  Zoom,
  Divider,
  Badge,
  Avatar
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import { useAppContext } from '../../context/AppContext';

// Import sections with lazy loading
const Intro = lazy(() => import('../intro/Intro'));
const About = lazy(() => import('../about/About'));
const Skills = lazy(() => import('../skills/Skills'));
const Experience = lazy(() => import('../experience/Experience'));
const Projects = lazy(() => import('../projects/Projects'));
const Contact = lazy(() => import('../contacts/Contacts'));

// Navigation sections configuration with exact offset values and additional eye-catching icons
const sections = [
  { id: "about", title: "About", component: About, offset: -100, icon: "👤" },
  { id: "skills", title: "Skills", component: Skills, offset: -100, icon: "🚀" },
  { id: "experience", title: "Experience", component: Experience, offset: -80, icon: "💼" },
  { id: "projects", title: "Projects", component: Projects, offset: -100, icon: "🔧" },
  { id: "contact", title: "Contact", component: Contact, offset: -100, icon: "📧" },
];

// Enhanced NavButton with refined animation and micro-interactions
const NavButton = styled(Button)(({ theme, active }) => ({
  position: "relative",
  color: theme.palette.text.primary,
  fontWeight: active ? 700 : 400,
  transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
  padding: "8px 12px",
  margin: "0 4px",
  overflow: "hidden",
  borderRadius: "8px",
  backgroundColor: active ? 
    (theme.palette.mode === 'dark' ? 'rgba(0, 120, 255, 0.1)' : 'rgba(0, 120, 255, 0.08)') : 
    'transparent',
  '&::before': {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "0",
    background: "linear-gradient(90deg, #0078FF, #6C47FF)",
    opacity: 0.7,
    transition: "height 0.3s ease",
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: "absolute",
    bottom: "2px",
    left: "50%",
    width: active ? "70%" : "0%",
    height: "3px",
    transform: "translateX(-50%)",
    background: "linear-gradient(90deg, #0062FF, #6C47FF, #0091FF)",
    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
    borderRadius: "3px",
  },
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 120, 255, 0.15)' : 'rgba(0, 120, 255, 0.1)',
    '&::before': {
      height: "0%",
    },
    '&::after': {
      width: "50%",
      bottom: "2px",
    }
  },
  '& .nav-icon': {
    marginRight: '6px',
    opacity: 0.9,
    transform: active ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  },
}));

// Enhanced mobile nav item
const MobileNavItem = styled(ListItem)(({ theme, active }) => ({
  position: "relative",
  transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
  borderRadius: '12px',
  margin: '8px 0',
  padding: '12px 16px',
  backgroundColor: active ? 'rgba(0, 120, 255, 0.15)' : 'transparent',
  fontWeight: active ? 600 : 400,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: "absolute",
    left: "0px",
    top: "0",
    height: "100%",
    width: "4px",
    backgroundColor: '#0078FF',
    opacity: active ? 1 : 0,
    transition: "all 0.3s ease",
    borderRadius: "0 4px 4px 0",
    boxShadow: active ? "0 0 15px rgba(0, 120, 255, 0.5)" : "none",
  },
  '&::after': {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: active ? "0" : "-100%",
    width: "100%",
    height: "1px",
    opacity: 0.5,
    background: "linear-gradient(90deg, #0078FF, transparent)",
    transition: "all 0.3s ease",
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
    transform: 'translateX(4px)',
    '&::after': {
      left: "0",
    }
  },
  '& .nav-text': {
    transition: 'transform 0.3s ease, color 0.3s ease',
    color: active ? '#0078FF' : theme.palette.text.primary,
  },
  '& .nav-icon': {
    display: 'inline-block',
    width: '24px',
    textAlign: 'center',
    marginRight: '8px',
    transition: 'transform 0.3s ease',
    transform: active ? 'scale(1.2)' : 'scale(1)',
  },
  '&:hover .nav-text': {
    transform: 'translateX(4px)',
    color: '#0078FF',
  },
  '&:hover .nav-icon': {
    transform: 'scale(1.2) rotate(5deg)',
  }
}));

// Enhanced scroll-to-top button
const ScrollToTopButton = styled(IconButton)(({ theme, visible }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: 'linear-gradient(135deg, #0078FF, #6C47FF)',
  color: '#fff',
  opacity: visible ? 1 : 0,
  transform: visible ? 'scale(1)' : 'scale(0.8)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  zIndex: 1000,
  padding: '14px',
  '&:hover': {
    background: 'linear-gradient(135deg, #0062FF, #6C47FF)',
    transform: 'translateY(-5px) scale(1.1)',
    boxShadow: '0 10px 20px rgba(0, 120, 255, 0.4)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    padding: '2px',
    background: 'linear-gradient(135deg, #0078FF, #6C47FF)',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'xor',
    WebkitMaskComposite: 'exclude',
    pointerEvents: 'none',
    opacity: 0.5,
  }
}));

const LoadingScreen = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.primary.main,
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #161925 0%, #1E2235 100%)' 
    : 'linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
}));

const ProgressContainer = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
});

// Enhanced logo text
const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: '600',
  letterSpacing: '0.5px',
  fontFamily: '"Preahvihear", sans-serif',
  background: `linear-gradient(135deg, #0062FF, #6C47FF, #0091FF)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '300% 300%',
  animation: 'gradient-shift 8s ease infinite',
  position: 'relative',
  '@keyframes gradient-shift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '60%',
    height: '3px',
    background: `linear-gradient(90deg, #0062FF, #6C47FF, transparent)`,
    borderRadius: '2px',
    animation: 'width-pulse 3s ease-in-out infinite',
  },
  '@keyframes width-pulse': {
    '0%': { width: '40%' },
    '50%': { width: '70%' },
    '100%': { width: '40%' },
  }
}));

// Suspense fallback loading component
const SectionLoading = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '300px',
        width: '100%' 
      }}
    >
      <CircularProgress 
        size={40} 
        thickness={5} 
        sx={{ 
          color: theme.palette.primary.main 
        }} 
      />
    </Box>
  );
};

// Custom progress indicator for scrolling
const ScrollProgress = ({ scrollProgress }) => {
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      zIndex: 2000,
      background: 'transparent',
    }}>
      <Box sx={{
        height: '100%',
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, #0062FF, #6C47FF, #0091FF)',
        transition: 'width 0.1s linear',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        boxShadow: '0 0 10px rgba(0, 120, 255, 0.5)',
      }} />
    </Box>
  );
};

// Main Layout component with enhanced scroll detection
const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Override the automatic scroll detection when direct section click happens
  const [manualSectionChange, setManualSectionChange] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollVisible, setScrollVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isDarkMode, toggleTheme, isLoading } = useAppContext();
  
  // Enhanced intersection observer setup for more accurate section detection
  useEffect(() => {
    // Create an observer for each section
    const observers = [];
    const sectionElements = {};
    
    // Options for the observers - the threshold array means 
    // we'll get notifications when 10%, 25%, 50%, 75%, and 100% of the target is visible
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
    };

    // Function to calculate how much of the section is in view
    const calculateVisibility = (entry) => {
      const { top, height, bottom } = entry.boundingClientRect;
      const windowHeight = window.innerHeight;
      
      // If the section is fully outside the viewport
      if (bottom < 0 || top > windowHeight) return 0;
      
      // If the section is fully inside the viewport
      if (top >= 0 && bottom <= windowHeight) return 1;
      
      // If the section is partially visible
      const visibleHeight = Math.min(bottom, windowHeight) - Math.max(0, top);
      return visibleHeight / height;
    };
    
    // First get reference to the intro section
    const introElement = document.getElementById('intro');
    if (introElement) {
      sectionElements['intro'] = introElement;
    }
    
    // Then create observers for all other sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionElements[section.id] = element;
        
        const observer = new IntersectionObserver((entries) => {
          if (manualSectionChange) return; // Skip if manual navigation is happening
          
          entries.forEach(entry => {
            const visibility = calculateVisibility(entry);
            
            // Consider the section active if more than 30% is visible
            if (visibility > 0.3 && entry.isIntersecting) {
              setActiveSection(section.id);
              localStorage.setItem('activeSection', section.id);
            }
          });
        }, options);
        
        observer.observe(element);
        observers.push(observer);
      }
    });
    
    return () => {
      // Clean up all observers
      observers.forEach(observer => observer.disconnect());
    };
  }, [manualSectionChange]);

  // Add scroll listener with cleanup
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    
    // Update scroll progress for the progress bar
    setScrollProgress(scrollPercentage);
    
    // Show/hide scroll-to-top button
    if (scrollPosition > 300) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
    
    // Special case: if we're at the very top, always set to intro
    if (scrollPosition < 50 && !manualSectionChange) {
      setActiveSection("intro");
      localStorage.setItem('activeSection', "intro");
    }
  }, [manualSectionChange]);

  // Add scroll listener with cleanup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Modified section click handler with longer timeout
  const handleSectionClick = (sectionId) => {
    // Update active section and immediately store in localStorage
    setActiveSection(sectionId);
    localStorage.setItem('activeSection', sectionId);
    
    // Set manual flag to prevent scroll handler from changing section
    setManualSectionChange(true);
    setDrawerOpen(false);
    
    // Find the section to scroll to
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the section's offset based on its configuration
      const section = sections.find(s => s.id === sectionId);
      const offset = section ? section.offset : -80;
      
      // Calculate the position to scroll to
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
      
      // Perform smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Keep the manual change flag active longer to prevent overrides
      setTimeout(() => {
        setManualSectionChange(false);
      }, 1000); // 1 second is usually enough for the scroll animation
    }
  };
  
  // Enhanced scroll to top handler with smooth easing
  const scrollToTop = () => {
    const scrollDuration = 1000; // ms
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      } else {
        setActiveSection("intro");
        localStorage.setItem('activeSection', "intro");
      }
    };
    
    requestAnimationFrame(scrollAnimation);
  };

  return (
    <>
      {/* Custom scroll progress indicator */}
      <ScrollProgress scrollProgress={scrollProgress} />
      
      {/* Loading Screen */}
      <LoadingScreen open={isLoading}>
        <ProgressContainer>
          <CircularProgress size={60} thickness={4} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" sx={{ color: 'white' }}>
              {Math.round(isLoading ? 100 : scrollProgress)}%
            </Typography>
          </Box>
        </ProgressContainer>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading Portfolio...
        </Typography>
      </LoadingScreen>
      
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
          {/* Enhanced Navbar */}
          <AppBar
            position="fixed"
            sx={{
              width: "100%",
              zIndex: 1100,
              borderBottom: "1px solid",
              borderColor: "rgba(0, 120, 255, 0.2)",
              backgroundColor: isDarkMode ? "rgba(22, 28, 36, 0.8)" : "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: '0 4px 20px rgba(0, 120, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton 
                  edge="start" 
                  color="inherit" 
                  onClick={handleDrawerToggle}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      color: '#0078FF',
                      transform: 'rotate(90deg)'
                    }
                  }}
                >
                  🧭
                </IconButton>
              )}

              {/* Logo/Title */}
              <Fade in={true} timeout={1000}>
                <LogoText 
                  variant="h6" 
                  sx={{ 
                    flexGrow: 1, 
                    textAlign: isMobile ? "center" : "left",
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    }
                  }}
                  onClick={() => handleSectionClick('intro')}
                >
                  ITS<span style={{ 
                    background: "linear-gradient(135deg, #e62070, #e62070)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600
                  }}>me</span>
                  <span style={{ 
                    background: "linear-gradient(135deg, #6C47FF, #0091FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700
                  }}>Soumya</span>
                </LogoText>
              </Fade>

              {/* Desktop Navigation with Animated Icons */}
              {!isMobile && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {sections.map((section) => (
                    <NavButton 
                      key={section.id} 
                      color="inherit"
                      href={`#${section.id}`}
                      onClick={() => handleSectionClick(section.id)}
                      active={activeSection === section.id ? 1 : 0}
                    >
                      <span className="nav-icon">{section.icon}</span>
                      <span style={{ color: activeSection === section.id ? "#0078FF" : "inherit" }}>
                        {section.title}
                      </span>
                    </NavButton>
                  ))}
                </Box>
              )}
              
              {/* Enhanced Social & Theme Toggle */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                  <IconButton 
                    color="inherit" 
                    href="https://github.com/soumya-123-code" 
                    target="_blank" 
                    aria-label="GitHub profile"
                    sx={{
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': {
                        transform: 'translateY(-3px) rotate(5deg)',
                        color: '#0078FF',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                      },
                      fontSize: '1.2rem'
                    }}
                  >
                    <span role="img" aria-label="GitHub">🐱</span>
                  </IconButton>
                </Zoom>
                
                <Zoom in={true} style={{ transitionDelay: '550ms' }}>
                  <IconButton 
                    color="inherit" 
                    href="https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a" 
                    target="_blank" 
                    aria-label="LinkedIn profile"
                    sx={{
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': {
                        transform: 'translateY(-3px) rotate(-5deg)',
                        color: '#0078FF',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                      },
                      fontSize: '1.2rem'
                    }}
                  >
                    <span role="img" aria-label="LinkedIn">💼</span>
                  </IconButton>
                </Zoom>
                
                <Zoom in={true} style={{ transitionDelay: '600ms' }}>
                  <IconButton
                    onClick={toggleTheme}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    size="small"
                    sx={{
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0)',
                      '&:hover': {
                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                        transform: isDarkMode ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)',
                      },
                      fontSize: '1.2rem'
                    }}
                  >
                    {isDarkMode ? <span role="img" aria-label="Dark Mode">🌙</span> : <span role="img" aria-label="Light Mode">☀️</span>}
                  </IconButton>
                </Zoom>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Enhanced Mobile Drawer */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.background.paper,
                width: "300px",
                borderRadius: "0 16px 16px 0",
                boxShadow: '8px 0 20px rgba(0, 0, 0, 0.15)',
                borderRight: 'none',
                backgroundImage: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(to bottom, rgba(22, 28, 36, 0.97), rgba(28, 36, 46, 0.97))' 
                  : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.97), rgba(245, 245, 245, 0.97))',
                backdropFilter: 'blur(10px)',
              },
            }}
          >
            <Box sx={{ 
              padding: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Header with animated border */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid',
                borderImage: 'linear-gradient(90deg, #0078FF, transparent) 1',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, #0078FF80, transparent)',
                  filter: 'blur(1px)',
                }
              }}>
                <LogoText variant="h5">
                  ITS<span style={{ color: "#0078FF" }}>me</span>
                  <span style={{ color: "#6C47FF" }}>Soumya</span>
                </LogoText>
                
                <IconButton 
                  onClick={handleDrawerToggle} 
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : '#333',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      transform: 'rotate(90deg)'
                    }
                  }}
                >
                  🧭
                </IconButton>
              </Box>
              
              {/* Enhanced Navigation with Icons */}
              <Box sx={{ 
                flex: 1,
                padding: '16px 16px',
                overflow: 'auto'
              }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    ml: 2, 
                    mb: 2, 
                    opacity: 0.7,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: theme.palette.mode === 'dark' ? '#aaa' : '#666'
                  }}
                >
                  Navigation
                </Typography>
                
                <List sx={{ pt: 0 }}>
                  {sections.map((section, index) => (
                    <Fade 
                      key={section.id} 
                      in={drawerOpen} 
                      timeout={500}
                      style={{ transitionDelay: `${100 + index * 50}ms` }}
                    >
                      <MobileNavItem
                        button
                        onClick={() => handleSectionClick(section.id)}
                        component="a"
                        href={`#${section.id}`}
                        active={activeSection === section.id ? 1 : 0}
                      >
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        }}>
                          <span className="nav-icon">{section.icon}</span>
                          <Typography 
                            className="nav-text"
                            variant="body1"
                            sx={{
                              fontWeight: activeSection === section.id ? 600 : 400,
                              letterSpacing: '0.5px'
                            }}
                          >
                            {section.title}
                          </Typography>
                        </Box>
                      </MobileNavItem>
                    </Fade>
                  ))}
                </List>
              </Box>
              
              {/* Footer with theme toggle */}
              <Box sx={{ 
                padding: '16px 24px',
                borderTop: '1px solid',
                borderImage: 'linear-gradient(90deg, transparent, #0078FF80, transparent) 1',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -1,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #0078FF40, transparent)',
                  filter: 'blur(1px)',
                },
              }}>
                <Typography variant="subtitle2" sx={{ 
                  mb: 2, 
                  opacity: 0.7,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: theme.palette.mode === 'dark' ? '#aaa' : '#666'
                }}>
                  Theme
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#0078FF',
                    boxShadow: '0 0 10px rgba(0, 120, 255, 0.1)',
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isDarkMode ? 
                      <span role="img" aria-label="Dark Mode" style={{ marginRight: '12px', fontSize: '1.2rem' }}>🌙</span> : 
                      <span role="img" aria-label="Light Mode" style={{ marginRight: '12px', fontSize: '1.2rem' }}>☀️</span>
                    }
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </Typography>
                  </Box>
                  
                  <Switch
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    color="primary"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#0078FF',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#0078FF80',
                      },
                    }}
                  />
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mt: 3,
                  pt: 2,
                  borderTop: '1px solid',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                }}>
                  <Typography variant="caption" sx={{ opacity: 0.6 }}>
                    © 2025 • Designed with <span style={{ color: '#0078FF' }}>❤</span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Drawer>

          {/* Enhanced Scroll to Top Button with hover feedback */}
          <Zoom in={scrollVisible}>
            <ScrollToTopButton
              color="primary"
              aria-label="scroll to top"
              onClick={scrollToTop}
              visible={scrollVisible ? 1 : 0}
              size="large"
            >
              <span role="img" aria-label="Scroll to top" style={{ fontSize: '1.2rem' }}>⬆️</span>
            </ScrollToTopButton>
          </Zoom>

          {/* Main Content with enhanced transitions between sections */}
          <Box 
            sx={{ 
              marginTop: "70px", 
              paddingBottom: "50px",
              padding: { xs: 0 },
              maxWidth: "100%"
            }}
          >
            <Suspense fallback={<SectionLoading />}>
              <Box id="intro">
                <Intro />
              </Box>
              
              {sections.map((section) => (
                <Box 
                  key={section.id} 
                  id={section.id} 
                  sx={{ 
                    scrollMarginTop: "80px",
                  }}
                >
                  <section.component />
                </Box>
              ))}
            </Suspense>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;