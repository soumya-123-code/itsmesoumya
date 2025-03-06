import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";

const textOptions = ["React.js", "React Native", "Full Stack Development"];

export default function About() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = textOptions[textIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentString.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % textOptions.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, charIndex, isDeleting, textIndex]);

  return (
    <Container maxWidth="xl">
      <section className="about-me" id="about-me">
        <div className="section-header">
          <h2 style={{ color: '#fff' }}><span className="accent">#</span> about-me</h2>
        </div>

        <div className="about-content" style={{ color: '#fff' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <div className="about-text">
                <Typography variant="h5">Hello, I'm Soumya!</Typography>
                <Typography paragraph>
                  I'm a passionate front-end developer based in the vibrant city of Kyiv, Ukraine. My journey into web development began with a curiosity for technology and a desire to create. Over the years, I have honed my skills in crafting responsive and visually stunning websites that provide seamless user experiences.
                </Typography>
                <Typography paragraph>
                  I specialize in utilizing <span style={{ color: '#c778dd' }}>{currentText}</span> to bring ideas to life. My approach combines creativity with technical expertise, allowing me to transform concepts into engaging digital solutions. I believe that every pixel matters, and I strive to create interfaces that not only look great but also function flawlessly.
                </Typography>
                <Typography paragraph>
                  With a commitment to continuous learning, I stay updated with the latest trends and technologies in the industry. I thrive on challenges and enjoy collaborating with clients to help them establish a strong online presence. My goal is to make the web a more beautiful and functional place, one project at a time.
                </Typography>
               
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="about-image">
                <img 
                  src="assets/aboutme.png" 
                  alt="Soumya profile" 
                  style={{ maxWidth: '300px', height: 'auto', borderRadius: '8px' }} 
                />
                <div className="dot-pattern-4">
                  <img src="assets/Dots.png" alt="Dot pattern" style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </Container>
  );
}