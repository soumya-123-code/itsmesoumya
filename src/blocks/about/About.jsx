// src/blocks/about/About.jsx
import React, { useEffect, useState, useRef, memo } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { sectionHeaderStyles, sectionContainerStyles } from "../../theme/theme";
import { useAppContext } from "../../context/AppContext";

// Text options to be typed out
const textOptions = [
  "React.js",
  "React Native",
  "Full Stack Development",
  "UI/UX Design",
];

// Resume PDF path - update this to your actual resume file path
const RESUME_PATH = "/assets/Soumya_Resume.pdf";

// Styled components for animations
const AnimatedBox = styled(Box)(
  ({ theme, delay = 0, animation = "fadeIn" }) => {
    const animations = {
      fadeIn: {
        keyframes: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        options: {
          duration: "0.8s",
          fill: "forwards",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
      },
      slideInLeft: {
        keyframes: {
          from: { opacity: 0, transform: "translateX(-30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        options: {
          duration: "0.7s",
          fill: "forwards",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
      },
      slideInRight: {
        keyframes: {
          from: { opacity: 0, transform: "translateX(30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        options: {
          duration: "0.7s",
          fill: "forwards",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
      },
      scaleIn: {
        keyframes: {
          from: { opacity: 0, transform: "scale(0.9)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        options: {
          duration: "0.6s",
          fill: "forwards",
          easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        },
      },
    };

    const selectedAnimation = animations[animation];

    return {
      opacity: 0,
      animation: `${animation} ${selectedAnimation.options.duration} ${selectedAnimation.options.easing} ${delay}s ${selectedAnimation.options.fill}`,
      [`@keyframes ${animation}`]: selectedAnimation.keyframes,
    };
  }
);

const HighlightText = styled("span")(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.main,
  fontWeight: 600,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "40%",
    background: `rgba(199, 120, 221, 0.15)`,
    zIndex: -1,
    transform: "rotate(-1deg) scale(1.05, 1)",
    transition: "all 0.3s ease",
  },
  "&:hover::after": {
    height: "45%",
    background: `rgba(199, 120, 221, 0.25)`,
    transform: "rotate(-2deg) scale(1.1, 1)",
  },
}));

const FloatingCard = styled(Paper)(({ theme }) => ({
  borderRadius: "16px",
  padding: theme.spacing(3),
  height: "100%",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  position: "relative",
  overflow: "hidden",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(145deg, rgba(30,30,35,0.95) 0%, rgba(25,25,30,0.95) 100%)"
      : "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(246,246,250,0.95) 100%)",
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)",
    "& .card-icon": {
      transform: "translateY(-5px)",
      color: theme.palette.primary.main,
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    background: "linear-gradient(90deg, #8A2BE2 0%, #7A5CF0 100%)",
  },
}));

const TypedText = styled(Box)(({ theme }) => ({
  display: "inline-block",
  color: theme.palette.primary.main,
  fontWeight: 600,
  minWidth: "220px",
}));

const BlinkingCursor = styled("span")({
  borderRight: "0.15em solid",
  animation: "blinkCursor 0.8s step-end infinite",
  "@keyframes blinkCursor": {
    "from, to": { borderColor: "transparent" },
    "50%": { borderColor: "inherit" },
  },
});

const EmojiWrapper = styled(Box)(({ theme }) => ({
  fontSize: "2.75rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  transition: "transform 0.3s ease, color 0.3s ease",
}));

const TimelineItem = styled(Box)(({ theme, align = "left" }) => ({
  position: "relative",
  paddingLeft: align === "left" ? "30px" : 0,
  paddingRight: align === "right" ? "30px" : 0,
  marginBottom: theme.spacing(4),
  textAlign: align,
  "&::before":
    align === "left"
      ? {
          content: '""',
          position: "absolute",
          left: 0,
          top: "8px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
          zIndex: 1,
          transition: "all 0.3s ease",
          boxShadow: "0 0 0 4px rgba(138, 43, 226, 0.1)",
        }
      : {},
  "&:hover::before":
    align === "left"
      ? {
          transform: "scale(1.2)",
          boxShadow: "0 0 0 6px rgba(138, 43, 226, 0.2)",
        }
      : {},
  "&::after":
    align === "left"
      ? {
          content: '""',
          position: "absolute",
          left: "6px",
          top: "8px",
          width: "2px",
          height: "calc(100% + 25px)",
          backgroundColor: theme.palette.divider,
          zIndex: 0,
        }
      : {},
}));

const ProfileImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #8A2BE2 0%, #7A5CF0 100%)",
    opacity: 0.5,
    zIndex: 0,
    transition: "all 0.3s ease",
  },
  "&:hover::before": {
    transform: "translate(-5px, -5px)",
  },
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: "220px",
  height: "220px",
  borderRadius: "20px",
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  transition: "all 0.4s ease",
  zIndex: 1,
  position: "relative",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  },
}));

const AnimatedChip = styled(Chip)(({ theme, delay = 0 }) => ({
  opacity: 0,
  animation: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
  },
  "&.animate": {
    animation: `chipIn 0.5s ${delay}s forwards`,
  },
  "@keyframes chipIn": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: "10px 24px",
  boxShadow: "0 5px 15px rgba(138, 43, 226, 0.2)",
  transition: "all 0.3s ease",
  background: "linear-gradient(90deg, #8A2BE2 0%, #7A5CF0 100%)",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
    transition: "all 0.4s ease",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(138, 43, 226, 0.3)",
    "&::after": {
      left: "100%",
    },
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  position: "relative",
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "40px",
    height: "3px",
    background: "linear-gradient(90deg, #8A2BE2 0%, #7A5CF0 100%)",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "60px",
  },
}));

// About component with optimized rendering
const About = memo(() => {
  const theme = useTheme();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedChips, setAnimatedChips] = useState(false);
  const { animationsEnabled } = useAppContext();

  // Use refs for values that shouldn't trigger re-renders
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);

  // Handle resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = "Soumya_Resume_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add slight delay before animating chips
          setTimeout(() => setAnimatedChips(true), 800);
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

  // Typing effect logic
  useEffect(() => {
    if (!animationsEnabled) {
      setDisplayText(textOptions[0]);
      return;
    }

    if (!isVisible) return;

    const typeEffect = () => {
      const currentIndex = textIndexRef.current;
      const currentString = textOptions[currentIndex];
      const charIndex = charIndexRef.current;

      if (isDeleting) {
        // Deleting logic
        setDisplayText(currentString.substring(0, charIndex - 1));
        charIndexRef.current = charIndex - 1;

        if (charIndex <= 1) {
          setIsDeleting(false);
          textIndexRef.current = (currentIndex + 1) % textOptions.length;
        }
      } else {
        // Typing logic
        setDisplayText(currentString.substring(0, charIndex + 1));
        charIndexRef.current = charIndex + 1;

        if (charIndex >= currentString.length - 1) {
          // Pause at the end of the word before deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
          return;
        }
      }

      // Schedule next update with varying speed
      const typingSpeed = isDeleting ? 50 : 120;
      timeoutRef.current = setTimeout(typeEffect, typingSpeed);
    };

    // Start the effect
    timeoutRef.current = setTimeout(typeEffect, 500);

    // Cleanup function 
    return () => { 
      if (timeoutRef.current) { 
        clearTimeout(timeoutRef.current); 
      }
    };
  }, [isDeleting, isVisible, animationsEnabled]);

  // Dynamic skills data
  const skillsData = {
    frontend: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
      "JavaScript",
      "jQuery",
      "TypeScript",
      "React.js",
      "React Native",
    ],
    backend: ["GraphQL", "Apollo Client", "REST API"],
    testing: ["Jest", "Enzyme", "jest-cucumber", "Testing Library"],
    devops: ["Azure", "Digital Ocean", "AWS (Learning)", "Nginx", "Apache"],
    languages: ["English", "Hindi", "Oriya"],
  };

  // Educational & Professional Timeline with emojis
  const timelineData = [
    {
      title: "Senior Software Developer | Team Lead",
      organization: "WovvTech",
      period: "2021 – Present",
      description:
        "Leading UI development with React.js and React Native for client projects. Mentoring junior developers and conducting code reviews.",
      emoji: "👨‍💻", // Developer emoji
    },
    {
      title: "Software Developer",
      organization: "GrabbnGo Private Limited",
      period: "Oct 2020 – Jul 2022",
      description:
        "Developed responsive UI using React & Material UI. Integrated APIs and built delivery & dashboard applications.",
      emoji: "🖥️", // Computer emoji
    },
    {
      title: "Software Developer",
      organization: "AukPro Solutions Pvt Ltd",
      period: "Jan 2020 – Oct 2020",
      description:
        "Developed IoT automation app with Django backend and React frontend. Implemented GraphQL for data queries.",
      emoji: "⚙️", // Gear emoji
    },
    {
      title: "Master of Computer Applications (MCA)",
      organization: "Gangadhar Meher University",
      period: "2017 – 2018",
      description:
        "Specialized in algorithms, data structures, and web development.",
      emoji: "🎓", // Graduation cap emoji
    },
  ];

  // Updated expertiseAreas array with emoji icons
  const expertiseAreas = [
    {
      title: "Frontend Development",
      emoji: "💻", // Computer emoji
      description:
        "Building responsive and modern UIs with React.js, TypeScript, and modern CSS. Creating intuitive user experiences with attention to accessibility and performance.",
    },
    {
      title: "Mobile Development",
      emoji: "📱", // Mobile phone emoji
      description:
        "Developing cross-platform mobile applications with React Native that deliver native-like experiences across iOS and Android.",
    },
    {
      title: "Backend Integration",
      emoji: "🗄️", // Filing cabinet emoji
      description:
        "Connecting frontend applications to backend services through REST and GraphQL APIs, ensuring smooth data flow and state management.",
    },
    {
      title: "Cloud & DevOps",
      emoji: "☁️", // Cloud emoji
      description:
        "Deploying and maintaining applications on Azure and Digital Ocean. Working with Nginx and Apache for serving web applications.",
    },
  ];

  // Dynamic personal info with emojis
  const personalInfo = [
    { emoji: "✉️", text: "soumya050794@gmail.com" },
    { emoji: "📞", text: "+91 9438509060" },
    { emoji: "📍", text: "Rourkela, Odisha, India" },
    { emoji: "⚡", text: "5+ Years Experience" }
  ];

  // Dynamic skill categories with emojis
  const skillCategories = [
    { 
      emoji: "☁️", 
      title: "Cloud", 
      skills: skillsData.devops,
      delay: 0.9
    },
    { 
      emoji: "🧪", 
      title: "Testing & Development", 
      skills: skillsData.testing,
      delay: 1.0
    },
    { 
      emoji: "🌐", 
      title: "Languages", 
      skills: skillsData.languages,
      delay: 1.1
    },
    { 
      emoji: "🔌", 
      title: "Backend & APIs", 
      skills: skillsData.backend,
      delay: 1.2
    }
  ];

  // Dynamic achievements
  const achievements = [
    {
      title: "Website Performance",
      description: "Improved web traffic by 50% and enhanced performance by 20% through optimization techniques and SEO."
    },
    {
      title: "POS System",
      description: "Developed a full-stack Point of Sale app with React Native frontend and Node.js/MongoDB backend."
    }
  ];

  // Get random colors for chips from a predefined palette
  const getChipColor = (index) => {
    const colors = [
      "primary",
      "secondary",
      "error",
      "info",
      "success",
      "warning",
    ];
    return colors[index % colors.length];
  };

  return (
    <Box
      ref={sectionRef}
      id="about"
      sx={{
        ...sectionContainerStyles(theme),
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background subtle gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.03) 0%, rgba(30, 30, 35, 0) 70%)"
              : "radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          zIndex: 0,
        }}
      />

      {/* Section header with animation */}
      <AnimatedBox
        animation="scaleIn"
        delay={isVisible ? 0.1 : 0}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            ...sectionHeaderStyles,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            "&::before": {
              content: '""',
              display: "inline-block",
              width: "30px",
              height: "2px",
              marginRight: "12px",
              background: theme.palette.primary.main,
              verticalAlign: "middle",
            },
          }}
        >
          <span
            style={{ color: theme.palette.primary.main, marginRight: "8px" }}
          >
            #
          </span>{" "}
          about-me
        </Typography>
      </AnimatedBox>

      {/* About content */}
      <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
        {/* Left column - Photo and brief intro */}
        <Grid item xs={12} md={4}>
          <AnimatedBox animation="fadeIn" delay={isVisible ? 0.3 : 0}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: { xs: 4, md: 5 },
              }}
            >
              {/* Profile image was here - commented out */}

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  background:
                    "linear-gradient(90deg, #8A2BE2 0%, #7A5CF0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Soumya Ranjan Nayak
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  mb: 3,
                  fontWeight: 500,
                }}
              >
                Senior Full-Stack Developer
              </Typography>

              <DownloadButton
                variant="contained"
                color="primary"
                startIcon={<span role="img" aria-label="download">📥</span>}
                onClick={handleDownload}
              >
                Download CV
              </DownloadButton>
            </Box>

            <Box sx={{ mb: 4 }}>
              <SectionTitle variant="h6">Personal Info</SectionTitle>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                {personalInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.primary",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": { color: theme.palette.primary.main },
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.2rem",
                          marginRight: "8px",
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {info.emoji}
                      </span>
                      {info.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <SectionTitle variant="h6">Key Skills</SectionTitle>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {skillsData.frontend.slice(0, 9).map((skill, index) => (
                  <AnimatedChip
                    key={skill}
                    label={skill}
                    color={getChipColor(index)}
                    variant={index % 2 === 0 ? "filled" : "outlined"}
                    size="medium"
                    className={animatedChips ? "animate" : ""}
                    sx={{
                      fontWeight: 500,
                      delay: 0.4 + index * 0.07,
                    }}
                  />
                ))}
              </Box>

              {/* Additional Skills Section */}
              <Box sx={{ mt: 5 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    position: "relative",
                    paddingLeft: "15px",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "5px",
                      height: "25px",
                      background:
                        "linear-gradient(180deg, #8A2BE2 0%, #7A5CF0 100%)",
                      borderRadius: "4px",
                    },
                  }}
                >
                  Additional Skills
                </Typography>

                <Grid container spacing={3}>
                  {/* Dynamic skill categories */}
                  {skillCategories.map((category, catIndex) => (
                    <Grid item xs={12} sm={12} key={catIndex}>
                      <AnimatedBox animation="fadeIn" delay={isVisible ? category.delay : 0}>
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{ display: "flex", alignItems: "center", mb: 1 }}
                          >
                            <span
                              style={{ 
                                fontSize: "1.5rem", 
                                marginRight: "8px",
                                color: theme.palette.primary.main 
                              }}
                            >
                              {category.emoji}
                            </span>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {category.title}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 1,
                              mt: 1,
                            }}
                          >
                            {category.skills.map((skill, index) => (
                              <AnimatedChip
                                key={skill}
                                label={skill}
                                color={getChipColor(index + (catIndex * 10))}
                                variant={index % 2 === 0 ? "filled" : "outlined"}
                                size="small"
                                className={animatedChips ? "animate" : ""}
                                sx={{ delay: category.delay + index * 0.07 }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </AnimatedBox>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </AnimatedBox>
        </Grid>

        {/* Right column - Detailed description */}
        <Grid item xs={12} md={8}>
          <Box>
            {/* Introduction Text */}
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Hello, I'm{" "}
              <span style={{ color: theme.palette.primary.main }}>Soumya!</span>
            </Typography>

            <Typography paragraph sx={{ mb: 2 }}>
              I'm a Senior Full-Stack Developer with 5+ years of experience in
              React.js and React Native.
            </Typography>

            <Typography paragraph sx={{ mb: 2 }}>
              I specialize in web and mobile development, creating responsive
              designs and optimizing performance to deliver functional digital
              solutions.
            </Typography>

            <Typography paragraph sx={{ mb: 3 }}>
              I stay current with industry trends and enjoy collaborating on
              projects that enhance user experience.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Expertise Section */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                paddingLeft: "15px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "5px",
                  height: "25px",
                  background:
                    "linear-gradient(180deg, #8A2BE2 0%, #7A5CF0 100%)",
                  borderRadius: "4px",
                },
              }}
            >
              My Expertise
            </Typography>

            {/* Expertise Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {expertiseAreas.map((area, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <AnimatedBox
                    animation="fadeIn"
                    delay={isVisible ? 0.4 + index * 0.2 : 0}
                  >
                    <FloatingCard elevation={3}>
                      <EmojiWrapper className="card-icon">
                        <span role="img" aria-label={area.title}>{area.emoji}</span>
                      </EmojiWrapper>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        {area.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ textAlign: "center", color: "text.secondary" }}
                      >
                        {area.description}
                      </Typography>
                    </FloatingCard>
                  </AnimatedBox>
                </Grid>
              ))}
            </Grid>

            {/* Timeline Section */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                paddingLeft: "15px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "5px",
                  height: "25px",
                  background:
                    "linear-gradient(180deg, #8A2BE2 0%, #7A5CF0 100%)",
                  borderRadius: "4px",
                },
}}
>
  Education & Experience
</Typography>

<Box sx={{ position: "relative" }}>
  {/* Line connecting timeline items */}
  <Box
    sx={{
      position: "absolute",
      left: "6px",
      top: "8px",
      bottom: "0",
      width: "2px",
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.1)"
          : "rgba(0,0,0,0.08)",
    }}
  />

  {timelineData.map((item, index) => (
    <Box key={index}>
      <TimelineItem>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              color: theme.palette.primary.main,
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(138, 43, 226, 0.1)"
                  : "rgba(138, 43, 226, 0.08)",
            }}
          >
            <span role="img" aria-label={item.title} style={{ fontSize: "1.2rem" }}>
              {item.emoji}
            </span>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.7)"
                : "rgba(0,0,0,0.6)",
            mb: 1,
            pl: 5,
            fontWeight: 500,
          }}
        >
          {item.organization} | {item.period}
        </Typography>

        <Typography variant="body2" sx={{ pl: 5 }}>
          {item.description}
        </Typography>
      </TimelineItem>
    </Box>
  ))}
</Box>

{/* Key Achievements */}
<Box sx={{ mt: 4 }}>
  <Typography
    variant="h5"
    gutterBottom
    sx={{
      fontWeight: 600,
      mb: 2,
      paddingLeft: "15px",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "5px",
        height: "25px",
        background:
          "linear-gradient(180deg, #8A2BE2 0%, #7A5CF0 100%)",
        borderRadius: "4px",
      },
    }}
  >
    Key Achievements
  </Typography>

  <Grid container spacing={3}>
    {achievements.map((achievement, index) => (
      <Grid item xs={12} md={6} key={index}>
        <AnimatedBox
          animation="fadeIn"
          delay={isVisible ? 0.6 + index * 0.2 : 0}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: "12px",
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)"
              }`,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                background:
                  "linear-gradient(180deg, #8A2BE2 0%, #7A5CF0 100%)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ 
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span role="img" aria-label="achievement" style={{ marginRight: "8px" }}>
                {index === 0 ? "🚀" : "💼"}
              </span>
              {achievement.title}
            </Typography>
            <Typography variant="body2">
              {achievement.description}
            </Typography>
          </Box>
        </AnimatedBox>
      </Grid>
    ))}
  </Grid>
</Box>
</Box>
</Grid>
</Grid>
</Box>
);
});

export default About;