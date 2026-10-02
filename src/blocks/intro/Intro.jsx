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
        position: "relative",
        isolation: "isolate",
        bgcolor: theme.palette.mode === "dark" ? "#10051d" : theme.palette.background.default,
        backgroundImage: theme.palette.mode === "dark"
          ? "none"
          : "radial-gradient(circle at 30% 24%, rgba(154, 102, 244, .15), transparent 31%), radial-gradient(circle at 75% 66%, rgba(235, 219, 255, .55), transparent 38%)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, width: { xs: "100%", sm: "88vw", md: "min(72vw, 950px)" }, maxWidth: "100%" }}>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}${heroImageSrc}`}
          alt="Soumya holding a MacBook"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            filter: theme.palette.mode === "dark"
              ? "none"
              : "drop-shadow(0 22px 34px rgba(80, 38, 144, .18))",
          }}
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
        {theme.palette.mode === "light" && (
          <Box
            component="svg"
            viewBox="0 0 1453 862"
            aria-hidden="true"
            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          >
            <path d="M 635 80 C 585 88, 530 120, 482 171" fill="none" stroke="#8d48ed" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 482 171 L 487 146 M 482 171 L 507 165" fill="none" stroke="#8d48ed" strokeWidth="2.6" strokeLinecap="round" />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: { xs: "calc(100% - 40px)", sm: "88vw", md: "min(72vw, 950px)" },
          maxWidth: "100%",
          zIndex: 1,
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
