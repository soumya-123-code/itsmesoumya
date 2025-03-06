import React from "react";
import { Chip } from "@mui/material";
import { AppBar, Toolbar, IconButton,Grid, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, CssBaseline, Menu, MenuItem, Box, Container } from "@mui/material";

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
  return (
    <section style={styles.skills}>
    <div className="section-header">
      <h2>
        <span className="accent">#</span>skills
      </h2>
    </div>

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
                <h3 style={styles.categoryTitle}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul style={styles.skillsList}>
                  {skillsList.map((skill, skillIndex) => (
                    <li key={skillIndex} style={styles.skillItem}>
                      {`${skill.emoji} ${skill.name}`}
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

const styles = {
  skills: {
    padding: '40px 20px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  accent: {
    color: '#c778dd',
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
    color: '#c778dd',
  },
  skillsList: {
    listStyleType: 'none',
    padding: 0,
  },
  skillItem: {
    backgroundColor: '#282c34',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '5px',
    transition: 'background-color 0.3s',
  },
};

// Add hover effect using JavaScript
const skillItemHoverStyle = {
  backgroundColor: '#c778dd',
  color: '#1e1e1e',
};

