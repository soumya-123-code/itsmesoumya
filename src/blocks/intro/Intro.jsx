import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PurpleText = ({ children }) => (
  <Box component="span" sx={{ color: "#9d55f6" }}>
    {children}
  </Box>
);

export default function Intro() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const palette = dark
    ? { background: "#11071f", text: "#f8f3ff", muted: "#d6cbe7", line: "rgba(198, 151, 255, .58)", glow: "rgba(118, 50, 204, .58)", avatar: "#210c42" }
    : { background: "#fff", text: "#170d2c", muted: "#5d526b", line: "rgba(116, 62, 221, .46)", glow: "rgba(139, 84, 246, .26)", avatar: "#f1eaff" };

  return (
    <Box
      component="section"
      aria-label="Introduction"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: palette.background,
        color: palette.text,
        px: { xs: 2.5, sm: 4, md: 7 },
        pt: { xs: 8, md: 11 },
        pb: { xs: 10, md: 14 },
        transition: "background-color .25s ease, color .25s ease",
        "&::before": {
          content: '""', position: "absolute", width: { xs: 330, md: 480 }, height: { xs: 330, md: 480 },
          top: { xs: 65, md: 10 }, left: { xs: "-35%", md: "17%" }, borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.glow} 0%, transparent 67%)`, filter: "blur(10px)", pointerEvents: "none",
        },
        "&::after": {
          content: '""', position: "absolute", width: 330, height: 330, right: "-12%", bottom: "-20%", borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.glow} 0%, transparent 69%)`, pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1040, mx: "auto" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "248px minmax(0, 1fr)" }, alignItems: "center", maxWidth: 760, mx: "auto", gap: { xs: 3.5, md: 4.5 } }}>
          <Box sx={{ position: "relative", justifySelf: { xs: "center", md: "end" }, pt: { md: 3 } }}>
            <Box sx={{ position: "absolute", zIndex: 2, top: { xs: -52, md: -40 }, left: { xs: "50%", md: 174 }, transform: { xs: "translateX(-50%)", md: "none" }, width: "max-content", color: palette.muted, fontSize: { xs: ".95rem", md: "1.05rem" }, whiteSpace: "nowrap" }}>
              Hello! I Am <PurpleText>Soumya</PurpleText>
            </Box>
            <Box component="svg" viewBox="0 0 330 180" aria-hidden="true" sx={{ position: "absolute", zIndex: 1, width: { xs: 180, md: 300 }, height: { xs: 100, md: 165 }, top: { xs: -21, md: -29 }, left: { xs: "-2%", md: 102 }, overflow: "visible", pointerEvents: "none" }}>
              <path d="M 316 28 C 210 25, 120 50, 77 139" fill="none" stroke={palette.line} strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 68 126 L 77 139 L 88 130" fill="none" stroke={palette.line} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
            <Box sx={{ width: { xs: 205, md: 230 }, height: { xs: 205, md: 230 }, borderRadius: "50%", overflow: "hidden", display: "flex", alignItems: "end", justifyContent: "center", bgcolor: palette.avatar, border: `1px solid ${palette.line}`, boxShadow: `0 0 0 15px ${dark ? "rgba(72, 27, 128, .20)" : "rgba(153, 104, 245, .10)"}, 0 15px 48px ${palette.glow}` }}>
              <Box component="img" src={`${process.env.PUBLIC_URL}/assets/soumya-hero-profile-v5.png`} alt="Soumya holding a laptop" sx={{ width: "126%", maxWidth: "none", transform: "translate(3%, 8%)" }} />
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "7px", fontSize: { xs: "1rem", md: "1.18rem" }, mb: .9 }}>
              A Developer who
            </Typography>
            <Typography component="h1" sx={{ m: 0, fontSize: { xs: "2.65rem", sm: "3.7rem", md: "4.25rem" }, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-.045em" }}>
              Judges a book<br />
              by its <PurpleText>cover</PurpleText>...
            </Typography>
            <Typography sx={{ color: palette.muted, fontSize: { xs: ".78rem", md: ".88rem" }, mt: 1.4 }}>
              Because if the cover does not impress you, what else can?
            </Typography>
          </Box>
        </Box>

        <Box sx={{ maxWidth: 760, mx: "auto", mt: { xs: 8, md: 11 }, textAlign: { xs: "center", md: "left" } }}>
          <Typography component="h2" sx={{ m: 0, fontSize: { xs: "2rem", sm: "2.75rem", md: "3.45rem" }, fontWeight: 400, letterSpacing: "-.045em", lineHeight: 1.12 }}>
            I&apos;m a Software Engineer.!
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap", gap: 1.05, color: palette.muted, mt: 1.25, fontSize: { xs: ".92rem", md: "1.08rem" } }}>
            <Box component="span">Currently, I&apos;m a Software Engineer at</Box>
            <Box component="img" src={`${process.env.PUBLIC_URL}/assets/tcs-logo.png`} alt="Tata Consultancy Services" sx={{ height: { xs: 24, md: 28 }, width: "auto", maxWidth: 116, objectFit: "contain", filter: dark ? "brightness(1.15) contrast(1.05)" : "none" }} />
            <Box component="span">.</Box>
          </Box>
          <Typography sx={{ maxWidth: 690, mt: { xs: 4, md: 7 }, color: palette.text, fontSize: { xs: "1rem", md: "1.2rem" }, lineHeight: 1.85 }}>
            A self-taught Full-stack developer, functioning in the industry for <PurpleText>6+ years</PurpleText> now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
