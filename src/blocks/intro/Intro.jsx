import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";

const textOptions = ["React.js", "React Native", "Full Stack Development"];




export default function Intro() {

 

  return (
    <Container maxWidth="xl">
  <section className="hero" id="home">
      <div className="social-links">
        <a href="#" className="social-icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="social-icon"><i className="fa-brands fa-discord"></i></a>
        <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
      </div>

      <div className="hero-content">
      <div className="hero-text">
  <h1 style={{ color: "white" }}>
    Hi, I'm <span className="accent">Soumya</span> — a passionate <br />
    <span className="accent">Front-End Developer & UI Designer</span>
  </h1>
  <p className="hero-description">
    I build responsive, user-friendly websites that seamlessly blend <br />
    design and functionality to create engaging digital experiences.
  </p>
  <button className="btn-primary">Let's Connect!</button>
</div>

        <div className="hero-image">
          <img src="assets/header_img.png" alt="Elias in a hoodie" />
          <div className="status-badge" style={{color :"white"}}>
            <div className="status-dot"></div>
            <p>Crafting <span className="bold">My Digital Space ✨</span></p>
          </div>
          <div className="geometric-element rect-1">
          <img src="assets/hero_sub.png" alt="Elias in a hoodie" />
          </div>
          <div className="geometric-element dot-pattern-1">
          <img src="assets/Dots.png" alt="Elias in a hoodie" />
          </div>
        </div>
      </div>
    </section>
  </Container>
  );
}


const styles = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    padding: '80px 0 40px',
    position: 'relative',
  },
  socialLinks: {
    position: 'fixed',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  socialIcon: {
    fontSize: '20px',
    transition: 'color 0.3s',
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  heroText: {
    fontSize: '32px',
    marginBottom: '32px',
    lineHeight: 1.2,
  },
  heroDescription: {
    color: '#abb2bf',
    marginBottom: '32px',
  },
  buttonPrimary: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid #c778dd',
    padding: '8px 16px',
    cursor: 'pointer',
    fontFamily: "'Fira Code', monospace",
    transition: 'background-color 0.3s',
  },
  heroImage: {
    position: 'relative',
  },
  statusBadge: {
    position: 'absolute',
    bottom: '16px',
    left: 0,
    backgroundColor: '#191919',
    border: '1px solid #c778dd',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusDot: {
    width: '12px',
    height: '12px',
    backgroundColor: '#c778dd',
    borderRadius: '50%',
  },
  geometricElement: {
    position: 'absolute',
    width: "160px",
    height: "100px",
    /* border: 1px solid var(--accent); */
    top:" 94px",
    left:" -175px"
  },
  accent: {
    color: '#c778dd',
  },
  bold: {
    fontWeight: 700,
  },
  
};


