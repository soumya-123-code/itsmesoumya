// src/sections/Contacts.jsx
import React, { useRef, useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Link, 
  useMediaQuery,
  useTheme,
  Paper,
  TextField,
  Grid,
  Fade,
  Zoom,
  Grow,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { sectionHeaderStyles, sectionContainerStyles } from "../../theme/theme";
import { useAppContext } from '../../context/AppContext';
// Import EmailJS
import emailjs from '@emailjs/browser';

// Styled components for animations
const AnimatedBox = styled(Box)(({ theme, delay, animation = 'fadeIn' }) => {
  const animations = {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    slideUp: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' }
    },
    slideRight: {
      from: { opacity: 0, transform: 'translateX(-20px)' },
      to: { opacity: 1, transform: 'translateX(0)' }
    }
  };

  return {
    opacity: 0,
    animation: `${animation} 0.6s ease-out ${delay}s forwards`,
    [`@keyframes ${animation}`]: animations[animation]
  };
});

const ContactCard = styled(Paper)(({ theme }) => ({
  display: "flex", 
  flexDirection: "column", 
  alignItems: "flex-start", 
  gap: "24px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "12px",
  padding: "28px",
  width: { xs: "100%", sm: "350px" },
  position: "relative",
  background: theme.palette.mode === 'dark' ? "rgba(30, 30, 30, 0.7)" : "rgba(240, 240, 240, 0.7)",
  backdropFilter: 'blur(10px)',
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.palette.mode === 'dark' 
      ? "0 15px 30px rgba(0, 0, 0, 0.4)" 
      : "0 15px 30px rgba(0, 0, 0, 0.1)"
  },
  "&::before": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at center, ${theme.palette.primary.main}20, transparent)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    borderRadius: "12px",
    zIndex: -1,
  },
  "&:hover::before": {
    opacity: 1,
  }
}));

const SocialButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.primary.main}30`,
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
      transition: 'border-color 0.3s ease',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInputBase-input': {
    background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.7)',
  }
}));

const EmojiContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: 'rgba(199, 120, 221, 0.1)',
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const { animationsEnabled } = useAppContext();
  
  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // EmailJS configuration
  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
  
  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Prepare template parameters - make sure these match your EmailJS template variables
    const templateParams = {
      from_name: formState.name,
      reply_to: formState.email,
      subject: formState.subject || "Contact Form Submission",
      message: formState.message
    };
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccess(true);
        setIsLoading(false);
        
        // Reset form
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setIsLoading(false);
        setErrorMessage('Failed to send message. Please try again later.');
        setShowError(true);
      });
  };
  
  // Close success alert
  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };
  
  // Close error alert
  const handleCloseError = () => {
    setShowError(false);
  };
  
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(PUBLIC_KEY);
  }, []);
  
  const socialLinks = [
    { emoji: "👨‍💻", text: "GitHub", url: "https://github.com/soumya-123-code", label: "GitHub" },
    { emoji: "💼", text: "LinkedIn", url: "https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a", label: "LinkedIn" },
    { emoji: "🐦", text: "Twitter", url: "#", label: "Twitter" }
  ];
  
  return (
    <Box 
      id="contact" 
      ref={sectionRef}
      sx={sectionContainerStyles(theme)}
    >
      <Fade in={isVisible} timeout={800} style={{ transitionDelay: animationsEnabled ? '200ms' : '0ms' }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={sectionHeaderStyles}
        >
          <span style={{ color: theme.palette.primary.main }}>#</span> Contact Me
        </Typography>
      </Fade>
      
      <Grid container spacing={4}>
        {/* Information Column */}
        <Grid item xs={12} md={5}>
          <Fade in={isVisible} timeout={1000} style={{ transitionDelay: animationsEnabled ? '300ms' : '0ms' }}>
            <Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '60%',
                    height: '3px',
                    background: theme.palette.primary.main,
                  }
                }}
              >
                Let's Get In Touch
              </Typography>
              
              <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, mb: 4 }}>
                I'm interested in freelance opportunities and open to discussing potential collaborations. If you have a project in mind, a question, or just want to connect, don't hesitate to reach out!
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  Connect With Me
                </Typography>
                
                <Box sx={{ display: 'flex', mb: 3 }}>
                  {socialLinks.map((link, index) => (
                    <Zoom 
                      key={index} 
                      in={isVisible} 
                      timeout={500}
                      style={{ 
                        transitionDelay: animationsEnabled ? `${400 + (index * 100)}ms` : '0ms'
                      }}
                    >
                      <SocialButton 
                        href={link.url} 
                        target="_blank" 
                        aria-label={link.label}
                        startIcon={<span>{link.emoji}</span>}
                      >
                        {link.text}
                      </SocialButton>
                    </Zoom>
                  ))}
                </Box>
              </Box>
              
              <Grow 
                in={isVisible} 
                timeout={800}
                style={{ 
                  transformOrigin: '0 0 0',
                  transitionDelay: animationsEnabled ? '600ms' : '0ms'
                }}
              >
                <ContactCard elevation={4}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: theme.palette.primary.main, 
                      fontWeight: 600,
                      borderBottom: `2px solid ${theme.palette.primary.main}20`,
                      paddingBottom: '8px',
                      width: '100%'
                    }}
                  >
                    Contact Information
                  </Typography>
                  
                  <ContactItem emoji="📱" text="+91 9438509060" />
                  <ContactItem emoji="📧" text="soumya050794@gmail.com" />
                  <ContactItem 
                    emoji="💼" 
                    text="LinkedIn Profile"
                    link="https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a"
                  />
                </ContactCard>
              </Grow>
            </Box>
          </Fade>
        </Grid>
        
        {/* Contact Form Column */}
        <Grid item xs={12} md={7}>
          <Fade 
            in={isVisible} 
            timeout={1000}
            style={{ 
              transitionDelay: animationsEnabled ? '500ms' : '0ms'
            }}
          >
            <Paper 
              elevation={4} 
              sx={{ 
                p: { xs: 3, md: 4 }, 
                borderRadius: '12px',
                background: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  color: theme.palette.primary.main
                }}
              >
                Send Me a Message
              </Typography>
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <AnimatedBox delay={animationsEnabled ? 0.6 : 0} animation="slideUp">
                      <StyledTextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        disabled={isLoading}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <span role="img" aria-label="person">👤</span>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </AnimatedBox>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <AnimatedBox delay={animationsEnabled ? 0.7 : 0} animation="slideUp">
                      <StyledTextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        disabled={isLoading}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <span role="img" aria-label="email">📧</span>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </AnimatedBox>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <AnimatedBox delay={animationsEnabled ? 0.8 : 0} animation="slideUp">
                      <StyledTextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                        disabled={isLoading}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <span role="img" aria-label="subject">📝</span>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </AnimatedBox>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <AnimatedBox delay={animationsEnabled ? 0.9 : 0} animation="slideUp">
                      <StyledTextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        disabled={isLoading}
                      />
                    </AnimatedBox>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <AnimatedBox delay={animationsEnabled ? 1 : 0} animation="slideUp">
                      <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        size="large"
                        disabled={isLoading}
                        endIcon={isLoading ? null : <span role="img" aria-label="send">📤</span>}
                        sx={{ 
                          minWidth: '180px',
                          py: 1.5,
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: '-100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                            transition: 'left 0.7s ease',
                          },
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 7px 14px rgba(0,0,0,0.2)',
                          },
                          '&:hover::after': {
                            left: '100%',
                          }
                        }}
                      >
                        {isLoading ? (
                          <>
                            <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </Button>
                    </AnimatedBox>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Fade>
        </Grid>
      </Grid>
      
      {/* Success notification */}
      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" variant="filled">
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>

      {/* Error notification */}
      <Snackbar open={showError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" variant="filled">
          {errorMessage || "Failed to send message. Please try again later."}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Contact item component with emoji instead of icon
const ContactItem = ({ emoji, text, link }) => {
  return (
    <Box sx={{ 
      display: "flex", 
      alignItems: "center", 
      gap: "16px",
      transition: "transform 0.2s ease",
      width: '100%',
      "&:hover": {
        transform: "translateX(5px)"
      }
    }}>
      <EmojiContainer>
        <span role="img" aria-label="contact">{emoji}</span>
      </EmojiContainer>
      
      {link ? (
        <Link 
          href={link} 
          color="inherit" 
          underline="none" 
          target="_blank" 
          rel="noopener"
          sx={{
            transition: "color 0.2s ease",
            "&:hover": {
              color: "primary.main"
            }
          }}
        >
          <Typography variant="body1">
            {text}
          </Typography>
        </Link>
      ) : (
        <Typography variant="body1">
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Contact;