import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Intro() {
  const theme = useTheme();
  const heroImageSrc = theme.palette.mode === "dark"
    ? "/assets/hero-soumya-dark.png"
    : "/assets/hero-soumya-light.png";

  return (
    <Box
      component="section"
      aria-label="Introduction"
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: theme.palette.background.default,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}${heroImageSrc}`}
        alt="Soumya holding a MacBook"
        sx={{
          display: "block",
          width: { xs: "100%", sm: "88vw", md: "min(72vw, 950px)" },
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
