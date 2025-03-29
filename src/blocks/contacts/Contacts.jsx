import React from "react";
import { Box, Typography, Button, Link, useMediaQuery,useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box 
      id="contacts" 
sx={{ 
  py:isMobile?0.2:6, 
  px:isMobile?.2: 4, 
        bgcolor: "background.paper", // Uses theme background
        color: "text.primary", // Uses theme text color
        borderRadius: "8px",
        boxShadow: (theme) => `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
        margin: "40px auto",
        
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 600,
          position: "relative",
          display: "inline-block",
          marginBottom: "30px",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-10px",
            left: 0,
            width: "60%",
            height: "3px",
            background: "linear-gradient(90deg, #c778dd, transparent)"
          }
        }}
      >
        <span style={{ color: "#c778dd" }}>#</span> Contacts
      </Typography>
      
      <Box sx={{
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, 
        alignItems: { xs: "center", md: "flex-start" }, 
        gap: 5,
        justifyContent: "space-between"
      }}>
        <Typography 
          variant="body1"
          sx={{
            maxWidth: "500px",
            textAlign: "left",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            opacity: 0.9
          }}
        >
          I'm interested in freelance opportunities and open to discussing potential collaborations. If you have a project in mind, a question, or just want to connect, don't hesitate to reach out through any of the channels listed.
        </Typography>
        
        <Box sx={(theme) => ({ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start", 
          gap: 3,
          border: "1px solid #7127BA",
          borderRadius: "8px",
          padding: "24px",
          width: "320px",
          position: "relative",
          background: theme.palette.mode === 'dark' ? "rgba(30, 30, 30, 0.5)" : "rgba(240, 240, 240, 0.5)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.palette.mode === 'dark' 
              ? "0 15px 30px rgba(0, 0, 0, 0.4)" 
              : "0 15px 30px rgba(0, 0, 0, 0.1)"
          }
        })}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#c778dd", 
              marginBottom: "10px",
              fontWeight: 600
            }}
          >
            Let's Connect
          </Typography>
          
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 2,
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateX(5px)"
            }
          }}>
            <PhoneIcon sx={{ color: "#c778dd" }} />
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>+91 9438509060</Typography>
          </Box>
          
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 2,
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateX(5px)"
            }
          }}>
            <EmailIcon sx={{ color: "#c778dd" }} />
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>soumya050794@gmail.com</Typography>
          </Box>
          
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 2,
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateX(5px)"
            }
          }}>
            <LinkedInIcon sx={{ color: "#c778dd" }} />
            <Link 
              href="https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a" 
              color="inherit" 
              underline="none" 
              target="_blank" 
              rel="noopener"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "#c778dd"
                }
              })}
            >
              LinkedIn
            </Link>
          </Box>
          
          <Button 
            variant="outlined" 
            sx={{ 
              marginTop: "15px",
              color: "#c778dd", 
              borderColor: "#c778dd",
              padding: "8px 20px",
              "&:hover": {
                backgroundColor: "rgba(199, 120, 221, 0.1)",
                borderColor: "#c778dd"
              }
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;