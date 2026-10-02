import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Accent = ({ children }) => (
  <Box component="span" sx={{ color: "#9d55f6" }}>{children}</Box>
);

export default function Intro() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const colors = dark
    ? { background: "#11071f", text: "#faf7ff", muted: "#d8cce8", arrow: "#fff", orb: "#3e1388" }
    : { background: "#fff", text: "#170d2c", muted: "#5d526b", arrow: "#8d48ed", orb: "#6c31cd" };

  return (
    <Box
      component="section"
      aria-label="Introduction"
      sx={{
        overflow: "hidden",
        color: colors.text,
        bgcolor: colors.background,
        background: dark
          ? "radial-gradient(circle at 25% 21%, rgba(119, 55, 203, .28), transparent 30%), radial-gradient(circle at 78% 72%, rgba(92, 27, 172, .15), transparent 34%), #11071f"
          : "radial-gradient(circle at 25% 21%, rgba(167, 119, 245, .17), transparent 31%), radial-gradient(circle at 78% 72%, rgba(235, 219, 255, .62), transparent 38%), #fff",
        px: { xs: 2.5, sm: 4, md: 7 },
        pt: { xs: 7, md: 10 },
        pb: { xs: 9, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: 1050, mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "340px minmax(0, 1fr)" },
            alignItems: "center",
            gap: { xs: 5, md: 6 },
          }}
        >
          <Box sx={{ position: "relative", width: { xs: 270, md: 330 }, height: { xs: 270, md: 330 }, mx: { xs: "auto", md: 0 } }}>
            <Box
              sx={{
                position: "absolute", inset: 0, borderRadius: "50%", overflow: "hidden",
                background: `radial-gradient(circle at 48% 38%, ${dark ? "#b79bc8" : "#c4b5ce"} 0%, ${colors.orb} 48%, #2b096e 100%)`,
                boxShadow: dark ? "0 20px 55px rgba(51, 8, 105, .55)" : "0 20px 55px rgba(94, 45, 164, .28)",
              }}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/soumya-hero-profile-v7.png`}
                alt="Soumya holding a MacBook"
                sx={{ position: "absolute", bottom: "-3%", left: "-3%", width: "108%", maxWidth: "none" }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute", top: { xs: -35, md: -42 }, left: { xs: 125, md: 176 },
                color: colors.text, whiteSpace: "nowrap", fontFamily: "Preahvihear, sans-serif",
                fontSize: { xs: ".78rem", md: ".96rem" }, zIndex: 2,
              }}
            >
              Hello! I Am <Accent>Soumya</Accent>
            </Box>
            <Box component="svg" viewBox="0 0 330 170" aria-hidden="true" sx={{ position: "absolute", width: { xs: 205, md: 255 }, height: { xs: 108, md: 135 }, top: { xs: -24, md: -28 }, left: { xs: 98, md: 125 }, zIndex: 2, overflow: "visible", pointerEvents: "none" }}>
              <path d="M 318 26 C 225 20, 136 43, 84 122" fill="none" stroke={colors.arrow} strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 74 106 L 84 122 L 99 113" fill="none" stroke={colors.arrow} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ display: "inline-block", textDecoration: "underline", textUnderlineOffset: "7px", textDecorationThickness: "1px", fontFamily: "Preahvihear, sans-serif", fontSize: { xs: ".95rem", md: "1.15rem" }, mb: 1.1 }}>
              A Developer who
            </Typography>
            <Typography component="h1" sx={{ m: 0, fontFamily: "Preahvihear, sans-serif", fontWeight: 400, fontSize: { xs: "2.75rem", sm: "3.6rem", md: "4.65rem" }, lineHeight: 1.06, letterSpacing: "-.055em" }}>
              Judges a book<br />
              by its <Box component="span" sx={{ position: "relative", display: "inline-block", color: "#9d55f6", px: ".05em" }}>
                cover
                <Box sx={{ position: "absolute", border: "1.6px solid #e944b2", borderRadius: "50%", inset: { xs: "-5px -11px", md: "-8px -17px" }, transform: "rotate(-6deg)", pointerEvents: "none" }} />
              </Box>...
            </Typography>
            <Typography sx={{ mt: 1.5, color: colors.muted, fontFamily: "Preahvihear, sans-serif", fontSize: { xs: ".75rem", md: ".9rem" } }}>
              Because if the cover does not impress you, what else can?
            </Typography>
          </Box>
        </Box>

        <Box sx={{ maxWidth: 860, mx: "auto", mt: { xs: 8, md: 11 } }}>
          <Typography component="h2" sx={{ m: 0, fontFamily: "Preahvihear, sans-serif", fontWeight: 400, fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.65rem" }, lineHeight: 1.15, letterSpacing: "-.05em" }}>
            I&apos;m a Software Engineer.!
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1, mt: 1.2, color: colors.muted, fontFamily: "Preahvihear, sans-serif", fontSize: { xs: ".86rem", md: "1.08rem" } }}>
            <Box component="span">Currently, I&apos;m a Software Engineer at</Box>
            <Box component="img" src={`${process.env.PUBLIC_URL}/assets/tcs-logo.png`} alt="Tata Consultancy Services" sx={{ height: { xs: 22, md: 28 }, width: "auto", maxWidth: 120, objectFit: "contain" }} />
            <Box component="span">.</Box>
          </Box>
          <Typography sx={{ maxWidth: 790, mt: { xs: 4, md: 6 }, fontFamily: "Preahvihear, sans-serif", fontSize: { xs: ".98rem", md: "1.2rem" }, lineHeight: 1.85 }}>
            A self-taught Full-stack developer, functioning in the industry for <Accent>6+ years</Accent> now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
