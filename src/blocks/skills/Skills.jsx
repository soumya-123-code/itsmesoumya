import React from "react";
import { Chip } from "@mui/material";
import { Grid, Typography, useTheme, Box,useMediaQuery } from '@mui/material';

const skills = {
  languages: [
    { name: "HTML", emoji: "🌐", color: "#2196F3" },
    { name: "CSS", emoji: "🎨", color: "#E91E63" },
    { name: "JavaScript", emoji: "⚡", color: "#4CAF50" },
    { name: "TypeScript", emoji: "🛠️", color: "#00BCD4" },
    { name: "Python", emoji: "🐍", color: "#FF9800" },
  ],
  frameworks: [
    { name: "React", emoji: "⚛️", color: "#3F51B5" },
    { name: "React Native", emoji: "📱", color: "#673AB7" },
    { name: "Django", emoji: "🐍", color: "#8BC34A" },
  ],
  databases: [
    { name: "PostgreSQL", emoji: "🐘", color: "#336791" },
    { name: "SQL", emoji: "🗄️", color: "#4479A1" },
    { name: "MySQL", emoji: "🐬", color: "#F29111" },
    { name: "NoSQL", emoji: "📂", color: "#6B57FF" },
  ],
  tools: [    { name: 'Share Hosting', emoji: '📡', color: '#795548' },
    { name: 'Visual Studio', emoji: '🖥️', color: '#007ACC' },
    { name: 'Sublime Text', emoji: '📝', color: '#FF9800' },],
  cloud: [
    { name: "Azure", emoji: "☁️", color: "#03A9F4" },
    { name: "Digital Ocean", emoji: "🌊", color: "#009688" },
  ],
  os: [
    { name: "Mac", emoji: "🍏", color: "#607D8B" },
    { name: "Windows", emoji: "🖥️", color: "#1E88E5" },
    { name: "Linux", emoji: "🐧", color: "#000000" },
  ],
  others: [],
};

export default function Skills() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark'; // Check if the current theme is dark mode
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box 
      id="contacts" 
sx={{ 

  py:isMobile?0.2:6, 
  px:isMobile?0.2: 4, 
        bgcolor: "background.paper", // Uses theme background
        color: "text.primary", // Uses theme text color
        borderRadius: "8px",
        boxShadow: (theme) => `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
        margin: "40px auto",
      
      }}
    >

      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
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
        }}
      >
        <span style={{ color: "#c778dd" }}>#</span> skills
      </Typography>

      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={4}>
          <div>
            <img src="assets/Group36.png" alt="Skills Illustration" style={styles.skillsImage} />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {Object.entries(skills).map(([category, skillsList], index) => (
              <Grid item xs={12} sm={6} md={4} key={index} style={styles.skillCategory}>
                <Typography variant="h6" style={{ ...styles.categoryTitle, color: isDarkMode ? '#fff' : '#000' }}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Typography>
                <ul style={styles.skillsList}>
                  {skillsList.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      style={{
                        ...styles.skillItem,
                        backgroundColor: isDarkMode ? '#282c34' : '#e0e0e0',
                      }}
                    >
                      {`${skill.emoji} ${skill.name}`}
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '2rem',
  },
  skillsImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  skillCategory: {
    marginBottom: '20px',
  },
  categoryTitle: {
    marginBottom: '10px',
    fontSize: '1.5rem',
  },
  skillsList: {
    listStyleType: 'none',
    padding: 0,
  },
  skillItem: {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '5px',
    transition: 'background-color 0.3s',
  },
};

