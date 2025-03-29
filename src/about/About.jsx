import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

// Text options to be typed out
const textOptions = ["React.js", "React Native", "Full Stack Development"];

export default function About() {
  const [currentText, setCurrentText] = useState(""); // The text being typed out
  const [textIndex, setTextIndex] = useState(0); // The current index of the text options
  const [charIndex, setCharIndex] = useState(0); // The index of the character being typed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're deleting or typing

  useEffect(() => {
    const currentString = textOptions[textIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentString.substring(0, charIndex - 1)); // Delete character
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(currentString.substring(0, charIndex + 1)); // Add character
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentString.length) {
        setIsDeleting(true); // Start deleting when the word is fully typed
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false); // Stop deleting and start typing the next text
        setTextIndex((textIndex + 1) % textOptions.length); // Move to the next text option
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, charIndex, isDeleting, textIndex]);

  return (
    <div>
      {/* Section header */}


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
              <span style={{ color: "#c778dd" }}>#</span>  about-me
            </Typography>

      {/* About content */}
      <div className="about-content">
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} md={12}>
      <div className="about-text">
        {/* Introduction Text */}
        <Typography variant="h5">Hello, I'm Soumya!</Typography>
        <Typography paragraph>
          I'm a passionate Full-Stack Developer with over 5 years of experience, specializing in React.js and React Native. My journey into web development started with a deep curiosity for technology and a desire to build impactful digital experiences.
        </Typography>
        <Typography paragraph>
          I specialize in <span style={{ color: '#c778dd' }}>{currentText}</span>, bringing ideas to life with a perfect blend of creativity and technical expertise. From crafting sleek, responsive UI designs to optimizing backend performance, I focus on creating seamless digital solutions that are both visually appealing and highly functional.
        </Typography>
        <Typography paragraph>
          With a strong commitment to continuous learning, I stay ahead of industry trends, embracing new technologies and innovative approaches. I thrive on challenges and love collaborating with teams and clients to develop high-quality applications that enhance user experience and business growth.
        </Typography>
      </div>
    </Grid>
  </Grid>
</div>

    </div>
  );
}
