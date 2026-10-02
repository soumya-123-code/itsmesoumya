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
      <Box sx={{ position: "relative", width, marginLeft: -44, lineHeight: 0 }}>
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/${heroImageSrc}`}
        alt="Soumya holding a laptop"
        sx={{ display: "block", width: "100%", height: "auto" }}
        loading="lazy"
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: "30.8%",
          top: "10.2%",
          width: "12.1%",
          aspectRatio: "1",
          overflow: "hidden",
          borderRadius: "50%",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          background: "radial-gradient(circle at 50% 40%, #6130bf, #28086f)",
        }}
      >
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/soumya-hero-profile-v7.png`}
          alt=""
          sx={{ width: "102%", maxWidth: "none", transform: "translate(1%, 7%)" }}
        />
      </Box>
      </Box>
    </Box>
  );
}
