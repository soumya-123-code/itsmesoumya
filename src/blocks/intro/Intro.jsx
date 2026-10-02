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
      <Box sx={{ position: "relative", width: { xs: "100%", sm: "88vw", md: "min(72vw, 950px)" }, maxWidth: "100%" }}>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}${heroImageSrc}`}
          alt="Soumya holding a MacBook"
          sx={{ display: "block", width: "100%", height: "auto" }}
        />
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "6.1%",
            left: "48.7%",
            color: theme.palette.mode === "dark" ? "#fff" : "#19082f",
            fontSize: { xs: ".62rem", sm: ".82rem", md: "1rem" },
            lineHeight: 1,
            whiteSpace: "nowrap",
            fontFamily: 'Preahvihear, sans-serif',
            pointerEvents: "none",
          }}
        >
          Hello! I Am <Box component="span" sx={{ color: "#9d55f6" }}>Soumya</Box>
        </Box>
      </Box>
    </Box>
  );
}
