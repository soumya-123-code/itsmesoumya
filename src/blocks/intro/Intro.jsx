import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
  },
}));

export default function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const heroImageSrc = theme.palette.mode === "dark"
    ? "/assets/hero4xdark-tcs-v2.png"
    : "/assets/hero4x-tcs-v2.png";
  const width = isMobile ? "200vw" : "130vw";

  return (
    <Box className={classes.container}>
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/${heroImageSrc}`}
        alt="Soumya holding a laptop"
        style={{ width, height: "inherit", marginLeft: -44 }}
        loading="lazy"
      />
    </Box>
  );
}
