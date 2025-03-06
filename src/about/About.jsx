import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";

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

      // If we reach the end of the string, start deleting
      if (!isDeleting && charIndex === currentString.length) {
        setIsDeleting(true);
      } 
      // If we are deleting and reach the start, move to the next string
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % textOptions.length);
      }
    }, isDeleting ? 50 : 150); // Adjust typing speed here

    return () => clearTimeout(timeout);
  }, [currentText, charIndex, isDeleting, textIndex]);

  

  return (
    <Container maxWidth="xl">
       <section className="about-me" id="about-me">
      <div className="section-header">
      <h2 style={{ color: '#fff' }}><span className="accent">#</span>about-me</h2>
      </div>

      <div className="about-content" style={{ color: '#fff' }}>
        <div className="about-text">
          <p>Hello, I'm Elias!</p>
          <p>
            I'm a self-taught front-end developer based in Kyiv,
            Ukraine. I can develop responsive websites from
            scratch and raise them into modern user-friendly web
            experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a
            websites has been my passion for over a year. I have
            been helping various clients to establish their
            presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="btn-outline">
            Read more <span className="arrow">→</span>
          </button>
        </div>
        <div className="about-image">
          <img src="assets/aboutme.png" alt="Elias profile" />
          <div className="dot-pattern-4">
            <img src="assets/Dots.png" alt="Dot pattern" />
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
}