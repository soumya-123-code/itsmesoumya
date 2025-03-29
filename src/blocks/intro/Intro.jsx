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
    // padding: "20px",
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "100vh",
    // marginRight: (props) => (props.isMobile ? 50 : 144),
  },
  heroTextImage: {
    // maxWidth: (props) => (props.isMobile ? "80%" : "90%"),
    height: "auto",
    // maxHeight: "60vh",
    // marginTop: (props) => (props.isMobile ? -18 : -105),
    // marginLeft: 10,
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
    fontFamily: "'Fira Code', monospace",
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
  const heroImageSrc = theme.palette.mode === "dark" ? "assets/hero4x.png":"assets/hero4xdark.png" ;
  const heroTextSrc = theme.palette.mode === "dark" ? "assets/herotextdark.png" : "assets/herotext1x.png";
const width=isMobile?'190vw':'130vw'
  return (
    <Box className={classes.container}>
      {/* Hero Image */}
      <Box
        component="img"
        src={heroImageSrc}
        alt="soumya in a hoodie"
        style={{width:width,height:"inherit"}}
      />
  
    </Box>
        // width: 190vw;
        // height: inherit;
  );
}
