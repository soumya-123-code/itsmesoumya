import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";

const textOptions = ["React.js", "React Native", "Full Stack Development"];




export default function Intro() {

 

  return (
    <Container maxWidth="xl">
   
   
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}>
          <img
            src="assets/hero4x.png"
            alt="soumya in a hoodie"
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "70vh",
              marginRight:74
            }}
          />
          <img
            src="assets/herotext1x.png"
            alt="soumya in a hoodie"
            style={{
              maxWidth: "90%",
              height: "auto",
              maxHeight: "60vh", 
              marginTop:-30
            }}
          />
        </div>
     <div> </div>

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


