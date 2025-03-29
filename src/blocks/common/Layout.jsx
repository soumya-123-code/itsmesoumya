import React, { useState, useEffect } from "react";
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
  CssBaseline,
  Switch
} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Projects from "../projects/Projects";
import About from "../../about/About";
import Intro from "../intro/Intro";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Contact from "../contacts/Contacts";

// Theme configurations for Light and Dark Mode
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#e62070",
    },
    text: {
      primary: "#000000", 
      secondary: "#555555", 
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#e62070",
    },
    text: {
      primary: "#ffffff",
      secondary: "#dddddd",
    },
  },
});

const sections = [
  { title: "About", url: "#about" },
  { title: "Skills", url: "#skills" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  // Set the default active section to "about" on initial load
  const [activeSection, setActiveSection] = useState("about");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Monitor scroll position to determine active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements
      const sectionElements = sections.map(section => {
        const element = document.querySelector(section.url);
        if (element) {
          return {
            id: section.url.substring(1),  // Remove the # character
            offsetTop: element.offsetTop - 100, // Offset for navbar
            height: element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);
      
      // Find the section that is currently visible
      let foundVisibleSection = false;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          foundVisibleSection = true;
          break;
        }
      }
      
      // If we're at the top of the page and intro section exists, set it as active
      if (!foundVisibleSection && scrollPosition < sectionElements[0]?.offsetTop) {
        const introElement = document.querySelector("#intro");
        if (introElement && scrollPosition < introElement.offsetTop + introElement.offsetHeight) {
          setActiveSection("intro");
        } else {
          // Fallback to about if no section is visible
          setActiveSection("about");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial call to set the active section when the component mounts
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle manual section selection
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <div style={{ margin: "0 auto", position: "relative", overflow: "hidden" }}>
          {/* Navbar */}
          <AppBar
            position="fixed"
            sx={{
              width: "100%",
              zIndex: 1100,
              borderBottom: "1px solid purple",
              backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.9)",
              color: isDarkMode ? "white" : "black",
            }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}

              {/* Title */}
              <Typography variant="h6" sx={{ flexGrow: 1, textAlign: isMobile ? "center" : "left", color: isDarkMode ? "white" : "black" }}>
                ITS<span style={{ color: "purple" }}>me</span>
                <span style={{ color: "#e62070" }}>Soumya</span>
              </Typography>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: "flex", gap: 2 }}>
                  {sections.map((section) => (
                    <Button 
                      key={section.title} 
                      color="inherit"
                      href={section.url} 
                      onClick={() => handleSectionClick(section.url.substring(1))}
                      sx={{ 
                        color: isDarkMode ? "white" : "black",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "0px",
                          left: 10,
                          width: "60%",
                          height: "3px",
                          opacity: activeSection === section.url.substring(1) ? 1 : 0,
                          background: "linear-gradient(90deg, #c778dd, transparent)",
                          transition: "opacity 0.3s ease"
                        }
                      }}
                    >
                      <span style={{ color: "#c778dd" }}>#</span> {section.title}
                    </Button>
                  ))}
                </Box>
              )}
              
              {/* GitHub Icon */}
              <IconButton color="inherit" href="https://github.com/soumya-123-code" target="_blank" sx={{ color: isDarkMode ? "white" : "black" }}>
                <GitHubIcon />
              </IconButton>
              <IconButton
                data-screenshot="toggle-mode"
                onClick={toggleTheme}
                disableRipple
                size="small"
                aria-haspopup="true"
                sx={{ color: isDarkMode ? "white" : "black" }}
              >
                {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Mobile Drawer */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
                color: isDarkMode ? "white" : "black",
                width: "250px",
              },
            }}
          >
            <Box sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ marginBottom: 2, color: isDarkMode ? "white" : "black" }}>
                ITS<span style={{ color: "purple" }}>me</span>
                <span style={{ color: "#e62070" }}>Soumya</span>
              </Typography>
              <List>
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section.title}
                    onClick={() => {
                      handleDrawerToggle();
                      handleSectionClick(section.url.substring(1));
                    }}
                    component="a"
                    href={section.url}
                    sx={{ 
                      color: isDarkMode ? "white" : "black",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "0px",
                        left: 10,
                        width: "60%",
                        height: "3px",
                        opacity: activeSection === section.url.substring(1) ? 1 : 0,
                        background: "linear-gradient(90deg, #c778dd, transparent)",
                        transition: "opacity 0.3s ease"
                      }
                    }}
                  >
                    <span style={{ color: "#c778dd" }}>#</span>
                    <ListItemText primary={section.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

          {/* Main Content */}
          <Box sx={{ marginTop: "70px", paddingBottom: "50px", color: isDarkMode ? "white" : "black" }}>
            <Box id="intro">
              <Intro />
            </Box>
            <Box id="about" sx={{ padding: window.innerWidth > 768 ? 4 : 1.5 }}>
              <About />
            </Box>
            <Box id="skills" sx={{ padding: window.innerWidth > 768 ? 4 : 1.5 }}>
              <Skills />
            </Box>
            <Box id="experience" sx={{ padding: window.innerWidth > 768 ? 4 : 1.5 }}>
              <Experience />
            </Box>
            <Box id="projects" sx={{ padding: window.innerWidth > 768 ? 4 : 1.5 }}>
              <Projects />
            </Box>
            <Box id="contact" sx={{ padding: window.innerWidth > 768 ? 4 : 1.5 }}>
              <Contact />
            </Box>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;