import React from "react";
import { Box, Typography } from "@mui/material";
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
        flexDirection: "column",
        alignItems: "center",
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
      <Box
        sx={{
          width: { xs: "calc(100% - 40px)", sm: "88vw", md: "min(72vw, 950px)" },
          maxWidth: "100%",
          color: theme.palette.text.primary,
          pb: { xs: 8, md: 12 },
          mt: { xs: 2, md: 1 },
        }}
      >
        <Typography
          component="h1"
          sx={{
            m: 0,
            fontFamily: "Preahvihear, sans-serif",
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.55rem" },
            fontWeight: 400,
            lineHeight: 1.18,
            letterSpacing: "-.04em",
          }}
        >
          I&apos;m a Software Engineer.!
        </Typography>
        <Box
          sx={{
            mt: 1.15,
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            fontFamily: "Preahvihear, sans-serif",
            fontSize: { xs: ".86rem", sm: "1rem", md: "1.12rem" },
          }}
        >
          <Box component="span">Currently, I&apos;m a Software Engineer at</Box>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/tcs-logo.png`}
            alt="Tata Consultancy Services"
            sx={{ height: { xs: 23, md: 28 }, width: "auto", maxWidth: 118, objectFit: "contain" }}
          />
          <Box component="span">.</Box>
        </Box>
        <Typography
          sx={{
            maxWidth: 860,
            mt: { xs: 4, md: 6 },
            fontFamily: "Preahvihear, sans-serif",
            fontSize: { xs: ".98rem", sm: "1.1rem", md: "1.28rem" },
            lineHeight: 1.8,
          }}
        >
          A self-taught Full-stack developer, functioning in the industry for <Box component="span" sx={{ color: "#9d55f6" }}>6+ years</Box> now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
        </Typography>
      </Box>
    </Box>
  );
}
