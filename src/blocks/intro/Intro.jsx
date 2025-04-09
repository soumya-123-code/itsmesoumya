import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Define Styles
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "100vh",
  },
  heroTextImage: {
    height: "auto",
  },
  description: {
    color: theme.palette.text.primary,
    textAlign: "center",
    marginTop: 16,
  },
  button: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    marginTop: 24,
    padding: "8px 16px",
    fontFamily: 'Preahvihear", sans-serif',
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.background.default,
    },
  },
}));

export default function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles({ isMobile });

  // Switch images based on theme mode
  const heroImageSrc = theme.palette.mode === "dark" ? "/assets/hero4xdark.png" : "/assets/hero4x.png";
  const width = isMobile ? '200vw' : '130vw';

  return (
    <Box className={classes.container}>
      {/* Hero Image - Fixed path with leading slash */}
      {/* <img 
  src={`${process.env.PUBLIC_URL}/assets/tech-icons/react-small.svg`} 
  alt="React" 
  width="22" 
  height="22" 
/> */}
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/heroImageSrc`}
        alt="soumya in a hoodie"
        style={{width: width, height: "inherit",marginLeft:-44}}
        loading="lazy"
      />
    </Box>
  );
}

