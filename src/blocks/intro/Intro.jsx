import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Accent = ({ children }) => (
  <Box component="span" sx={{ color: "#8d52ff" }}>
    {children}
  </Box>
);

export default function Intro() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const colors = isDark
    ? { canvas: "#11071f", text: "#f7f3ff", muted: "#d7cfe7", ring: "rgba(139, 82, 255, .55)", glow: "rgba(113, 43, 205, .56)", stroke: "rgba(180, 128, 255, .42)" }
    : { canvas: "#fff", text: "#180d2d", muted: "#5d526b", ring: "rgba(123, 73, 228, .28)", glow: "rgba(135, 86, 238, .28)", stroke: "rgba(124, 72, 234, .25)" };

  return (
    <Box component="section" aria-label="Introduction" sx={{
      position: "relative", overflow: "hidden", background: colors.canvas, color: colors.text,
      minHeight: { xs: "auto", md: 680 }, pt: { xs: 8, sm: 11, md: 14 }, pb: { xs: 9, sm: 12, md: 15 }, px: { xs: 2.5, sm: 5, md: 8 },
      transition: "background 240ms ease, color 240ms ease",
      "&::before": { content: '""', position: "absolute", width: { xs: 280, md: 510 }, height: { xs: 280, md: 510 }, left: { xs: "-34%", md: "3%" }, top: { xs: 90, md: 15 }, borderRadius: "50%", background: `radial-gradient(circle, ${colors.glow} 0%, transparent 68%)`, filter: "blur(9px)", pointerEvents: "none" },
      "&::after": { content: '""', position: "absolute", width: { xs: 210, md: 390 }, height: { xs: 210, md: 390 }, right: { xs: "-26%", md: "7%" }, bottom: { xs: "-15%", md: "-28%" }, borderRadius: "50%", background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`, pointerEvents: "none" },
    }}>
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, mx: "auto" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.84fr 1.16fr" }, alignItems: "center", gap: { xs: 4, md: 7 }, maxWidth: 890, mx: "auto" }}>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box sx={{ position: "relative", width: { xs: 205, sm: 240, md: 265 }, height: { xs: 205, sm: 240, md: 265 }, borderRadius: "50%", display: "grid", placeItems: "end center", overflow: "hidden", border: `1px solid ${colors.stroke}`, background: `radial-gradient(circle at 50% 35%, ${colors.ring}, transparent 64%), ${isDark ? "#1c1033" : "#f3edff"}`, boxShadow: `0 0 0 15px ${isDark ? "rgba(54, 20, 94, .28)" : "rgba(154, 109, 255, .08)"}, 0 25px 65px ${colors.glow}` }}>
              <Box component="img" src={`${process.env.PUBLIC_URL}/assets/soumya-hero-profile-v5.png`} alt="Portrait of Soumya holding a MacBook" sx={{ width: "121%", maxWidth: "none", transform: "translateY(8px)" }} />
            </Box>
          </Box>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ fontSize: { xs: "1.08rem", md: "1.24rem" }, mb: 1.5, color: colors.muted }}>Hello! I Am <Accent>Soumya</Accent></Typography>
            <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.28rem" }, mb: .4, textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "6px" }}>A Developer who</Typography>
            <Typography component="h1" sx={{ fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4.65rem" }, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-.055em", m: 0 }}>
              judges a book<br />by its <Accent>cover</Accent>...
            </Typography>
            <Typography sx={{ color: colors.muted, mt: 1.5, fontSize: { xs: ".84rem", md: ".98rem" }, lineHeight: 1.6 }}>Because a strong first impression should be backed by equally strong engineering.</Typography>
          </Box>
        </Box>
        <Box sx={{ maxWidth: 820, mx: "auto", mt: { xs: 8, md: 10 }, textAlign: "center" }}>
          <Typography component="p" sx={{ fontSize: { xs: ".95rem", md: "1.05rem" }, color: colors.muted, mb: 1.2 }}>I&apos;m a Software Engineer.</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: "2.15rem", sm: "3rem", md: "3.7rem" }, fontWeight: 400, lineHeight: 1.12, letterSpacing: "-.045em", mt: 0, mb: 2.4 }}>Building thoughtful experiences<br />that <Accent>work beautifully.</Accent></Typography>
          <Typography sx={{ maxWidth: 650, mx: "auto", color: colors.muted, fontSize: { xs: ".96rem", md: "1.06rem" }, lineHeight: 1.85 }}>Currently a Software Developer at Tata Consultancy Services, crafting reliable web experiences with React, Next.js and TypeScript.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
