import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, CssBaseline, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import Projects from "../projects/Projects";
import About from "../../about/About";
import Intro from "../intro/Intro";
import Skills from "../skills/Skills";
import Experience from "../exprience/Exprience";
import Contact from "../contacts/Contacts";

const sections = [
  { title: "About", url: "#about" },
  { title: "Skills", url: "#skills" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" }
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

      <AppBar position="fixed" sx={{ width: '100%', zIndex: 1,  borderBottom: "1px solid purple",  backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: isMobile ? "block" : "none" }}>
            <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </div>

          <Typography variant="h6" sx={{ textAlign: isMobile ? "center" : "left" }}>
            My Portfolio
          </Typography>

          {isMobile && (
            <IconButton color="inherit" href="https://github.com" target="_blank">
              <GitHubIcon />
            </IconButton>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <div>
                {sections.map((section) => (
                  <Button key={section.title} color="inherit" href={section.url}>
                   <span className="accent">#</span> {section.title}
                  </Button>
                ))}
              </div>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
  anchor="left"
  open={drawerOpen}
  onClose={handleDrawerToggle}
  sx={{
    "& .MuiDrawer-paper": {
      backgroundColor: "rgba(0, 0, 0, 0.9)", // Corrected syntax
    },
  }}
>
  <Box sx={{ width: 250, padding: 2 }}>
    <Typography variant="h6" sx={{ marginBottom: 2 }}>
      My Portfolio
    </Typography>
    <List>
      {sections.map((section) => (
        <ListItem
          button
          key={section.title}
          style={{ color: "white" }}
          onClick={handleDrawerToggle}
          component="a"
          href={section.url}
        >
         <span className="accent">#</span> <ListItemText primary={section.title} />
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>


      <Box sx={{ marginTop: "44px" }}>
        <Box id="intro">
          <Intro />
        </Box>
        <Box id="skills" sx={{ padding: 4 }}>
          <Skills />
        </Box>
        <Box id="experience" sx={{ padding: 4 }}>
          <Experience />
        </Box>
        <Box id="projects" sx={{ padding: 2 }}>
          <Projects />
        </Box>
        <Box id="about" sx={{ padding: 2 }}>
          <About />
        </Box>
        <Box id="contact" sx={{ padding: 4 }}>
          <Contact />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
