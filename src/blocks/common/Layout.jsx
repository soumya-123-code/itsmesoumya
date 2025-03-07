import React, { useState } from "react";
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
  useMediaQuery,
  CssBaseline,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import Projects from "../projects/Projects";
import About from "../../about/About";
import Intro from "../intro/Intro";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Contact from "../contacts/Contacts";

const sections = [
  { title: "About", url: "#about" },
  { title: "Skills", url: "#skills" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div style={{ margin: "0 auto", position: "relative", overflow: "hidden" }}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          zIndex: 1100,
          borderBottom: "1px solid purple",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
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
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: isMobile ? "center" : "left" }}>
  ITS<span style={{ color: "purple" }}>me</span>
  <span style={{ color: "#e62070" }}>Soumya</span>
</Typography>


          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {sections.map((section) => (
                <Button key={section.title} color="inherit" href={section.url}>
                  <span className="accent">#</span> {section.title}
                </Button>
              ))}
            </Box>
          )}

          {/* GitHub Icon */}
          <IconButton color="inherit" href="https://github.com/soumya-123-code" target="_blank">
            <GitHubIcon />
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
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            width: "250px",
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
          ITS<span style={{ color: "purple" }}>me</span>
  <span style={{ color: "#e62070" }}>Soumya</span>
          </Typography>
          <List>
            {sections.map((section) => (
              <ListItem
                button
                key={section.title}
                onClick={handleDrawerToggle}
                component="a"
                href={section.url}
              >
                <span className="accent">#</span>
                <ListItemText primary={section.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ marginTop: "70px", paddingBottom: "50px" }}>
        <Box id="intro">
          <Intro />
        </Box>
        <Box id="about" sx={{ padding: 4 }}>
          <About />
        </Box>
        <Box id="skills" sx={{ padding: 4 }}>
          <Skills />
        </Box>
        <Box id="experience" sx={{ padding: 4 }}>
          <Experience />
        </Box>
        <Box id="projects" sx={{ padding: 4 }}>
          <Projects />
        </Box>
        <Box id="contact" sx={{ padding: 4 }}>
          <Contact />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
