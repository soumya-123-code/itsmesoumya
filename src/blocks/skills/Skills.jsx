// src/sections/Skills.jsx
import React, { memo, useState, useEffect } from "react";
import { Grid, Typography, Box, useMediaQuery, useTheme, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sectionHeaderStyles, sectionContainerStyles } from "../../theme/theme";
import { useAppContext } from '../../context/AppContext';

// Animated skill item component
const SkillItem = styled(Box)(({ theme, delay, color }) => ({
  padding: '10px',
  borderRadius: '12px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
  transition: 'all 0.3s ease',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  opacity: 0,
  animation: 'slideIn 0.6s forwards',
  animationDelay: `${delay}s`,
  '&:hover': {
    transform: 'translateX(5px)',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    '& .skill-icon': {
      transform: 'rotate(10deg) scale(1.2)',
    },
    '& .skill-bg': {
      opacity: 0.2,
      transform: 'scale(1.1)',
    },
    '& .skill-progress': {
      width: '100%',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-100%',
    top: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, rgba(${color}, 0.1), transparent)`,
    animation: 'shimmer 2s infinite',
    animationDelay: `${delay + 1}s`,
  },
  '@keyframes slideIn': {
    from: { transform: 'translateX(-20px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 }
  },
  '@keyframes shimmer': {
    '0%': { left: '-100%' },
    '100%': { left: '100%' }
  }
}));

// Skill progress indicator
const SkillProgress = styled(Box)(({ theme, color }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '3px',
  width: '40%',
  background: `linear-gradient(90deg, ${color}, ${color}aa)`,
  transition: 'width 0.5s ease-in-out',
  zIndex: 1,
}));

// Animated skill category
const CategoryHeading = styled(Typography)(({ theme, delay }) => ({
  marginBottom: '1.5rem',
  color: theme.palette.text.primary,
  fontWeight: 600,
  position: 'relative',
  opacity: 0,
  animation: 'fadeIn 0.5s forwards',
  animationDelay: `${delay}s`,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    width: '50px',
    height: '3px',
    background: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
    animation: 'scaleIn 0.5s forwards',
    animationDelay: `${delay + 0.2}s`,
  },
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  '@keyframes scaleIn': {
    from: { transform: 'scaleX(0)' },
    to: { transform: 'scaleX(1)' }
  }
}));

// Skill icon with animations
const SkillIcon = styled(Box)(({ theme }) => ({
  marginRight: '15px',
  fontSize: '1.5rem',
  transition: 'transform 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Background element for the skill
const SkillBackground = styled(Box)(({ color, theme }) => ({
  position: 'absolute',
  right: '10px',
  bottom: '0',
  fontSize: '3rem',
  opacity: 0.05,
  color: color || theme.palette.primary.main,
  zIndex: 0,
  transition: 'opacity 0.3s ease, transform 0.3s ease',
}));

// Decorative element for skills visualization
const SkillsDecoration = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: '16px',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' 
    : 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
}));

// Connection lines for skill visualization
const ConnectionLine = styled(Box)(({ theme, index, total, animated }) => ({
  position: 'absolute',
  width: '2px',
  height: index % 2 === 0 ? '40%' : '30%',
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}aa, transparent)`,
  top: '50%',
  left: `${(index + 1) * (100 / (total + 1))}%`,
  transform: 'translateY(-50%) rotate(15deg)',
  opacity: 0.6,
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    top: animated ? '0%' : '10%',
    left: '-2px',
    transition: 'top 1s ease-in-out',
    animation: animated ? 'moveDot 3s infinite alternate' : 'none',
    animationDelay: `${index * 0.2}s`,
  },
  '@keyframes moveDot': {
    '0%': { top: '0%' },
    '100%': { top: '100%' }
  }
}));

// Circular decoration
const CircleDecoration = styled(Box)(({ theme, size, top, left, delay, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  top,
  left,
  background: color || theme.palette.primary.main,
  opacity: 0.1,
  animation: 'pulseAnimation 3s infinite alternate',
  animationDelay: `${delay}s`,
  '@keyframes pulseAnimation': {
    '0%': { transform: 'scale(1)', opacity: 0.1 },
    '100%': { transform: 'scale(1.2)', opacity: 0.2 }
  }
}));

// Grid decoration 
const GridPattern = styled(Box)(({ theme, animated }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'} 1px, transparent 1px),
                    linear-gradient(90deg, ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'} 1px, transparent 1px)`,
  backgroundSize: '20px 20px',
  opacity: 0.7,
  zIndex: 0,
  '&::after': animated ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main}22, transparent 60%)`,
    animation: 'pulseLight 4s infinite alternate',
  } : {},
  '@keyframes pulseLight': {
    '0%': { opacity: 0.3 },
    '100%': { opacity: 0.7 }
  }
}));

// Updated skills data with more relevant and interactive emojis
const skillsData = {
  languages: [
    { name: "HTML", emoji: "📄", color: "#E34F26", rgb: "227, 79, 38", level: 90 },
    { name: "CSS", emoji: "🎭", color: "#1572B6", rgb: "21, 114, 182", level: 85 },
    { name: "JavaScript", emoji: "🔮", color: "#F7DF1E", rgb: "247, 223, 30", level: 80 },
    { name: "TypeScript", emoji: "🛡️", color: "#3178C6", rgb: "49, 120, 198", level: 75 },
    { name: "Python", emoji: "🐍", color: "#3776AB", rgb: "55, 118, 171", level: 70 },
  ],
  frameworks: [
    { name: "React", emoji: "⚛️", color: "#61DAFB", rgb: "97, 218, 251", level: 90 },
    { name: "React Native", emoji: "📲", color: "#61DAFB", rgb: "97, 218, 251", level: 80 },
    { name: "Django", emoji: "🏗️", color: "#092E20", rgb: "9, 46, 32", level: 75 },
  ],
  databases: [
    { name: "PostgreSQL", emoji: "🐘", color: "#336791", rgb: "51, 103, 145", level: 85 },
    { name: "SQL", emoji: "🏛️", color: "#4479A1", rgb: "68, 121, 161", level: 80 },
    { name: "MySQL", emoji: "💾", color: "#4479A1", rgb: "68, 121, 161", level: 75 },
    { name: "NoSQL", emoji: "🧩", color: "#4DB33D", rgb: "77, 179, 61", level: 70 },
  ],
  tools: [
    { name: 'Share Hosting', emoji: '🌐', color: '#795548', rgb: "121, 85, 72", level: 85 },
    { name: 'Visual Studio', emoji: '🧰', color: '#007ACC', rgb: "0, 122, 204", level: 90 },
    { name: 'Sublime Text', emoji: '⚡', color: '#FF9800', rgb: "255, 152, 0", level: 80 },
  ],
  cloud: [
    { name: "Azure", emoji: "☁️", color: "#0089D6", rgb: "0, 137, 214", level: 75 },
    { name: "Digital Ocean", emoji: "🌊", color: "#0080FF", rgb: "0, 128, 255", level: 80 },
  ],
  os: [
    { name: "Mac", emoji: "🍎", color: '#607D8B', rgb: "96, 125, 139", level: 85 },
    { name: "Windows", emoji: "🪟", color: '#0078D6', rgb: "0, 120, 214", level: 90 },
    { name: "Linux", emoji: "🐧", color: '#FCC624', rgb: "252, 198, 36", level: 75 },
  ],
};

// Memoized skill category component
const SkillCategory = memo(({ title, skills, delay = 0 }) => {
  const theme = useTheme();
  const { animationsEnabled } = useAppContext();
  
  // If animations are disabled, reset delays
  const actualDelay = animationsEnabled ? delay : 0;
  
  return (
    <Box sx={{ mb: 4 }}>
      <CategoryHeading 
        variant="h6" 
        delay={actualDelay}
      >
        {title}
      </CategoryHeading>
      
      <Box component="ul" sx={{ 
        listStyleType: 'none', 
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}>
        {skills.map((skill, index) => (
          <Box
            component="li"
            key={index}
            sx={{ position: 'relative' }}
          >
            <SkillItem 
              delay={actualDelay + (index * 0.1)} 
              color={skill.rgb}
            >
              <SkillIcon className="skill-icon">
                <span>{skill.emoji}</span>
              </SkillIcon>
              
              <Typography sx={{ fontWeight: 500, zIndex: 1 }}>
                {skill.name}
              </Typography>
              
              <SkillBackground 
                className="skill-bg"
                color={skill.color}
              >
                {skill.emoji}
              </SkillBackground>
              
              <SkillProgress 
                className="skill-progress"
                color={skill.color}
                sx={{ width: `${skill.level}%` }}
              />
            </SkillItem>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

// Decorative skills visualization component
const SkillsVisualizer = memo(({ isVisible, animationsEnabled }) => {
  const theme = useTheme();
  const allSkills = Object.values(skillsData).flat();
  const topEmojis = allSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, 5)
    .map(skill => skill.emoji);
    
  return (
    <SkillsDecoration>
      <GridPattern animated={isVisible && animationsEnabled} />
      
      {/* Abstract connection lines */}
      {Array.from({ length: 6 }).map((_, index) => (
        <ConnectionLine 
          key={index} 
          index={index} 
          total={6} 
          animated={isVisible && animationsEnabled}
        />
      ))}
      
      {/* Decorative circles */}
      <CircleDecoration size="80px" top="10%" left="10%" delay={0.2} color={theme.palette.primary.main} />
      <CircleDecoration size="120px" top="60%" left="70%" delay={0.5} color={theme.palette.secondary.main} />
      <CircleDecoration size="60px" top="80%" left="20%" delay={0.8} color={theme.palette.primary.main} />
      
      {/* Central content */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 2,
        textAlign: 'center',
        padding: '2rem'
      }}>
        <Typography variant="h4" fontWeight="700" sx={{ 
          mb: 2,
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%)' 
            : 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: theme.palette.mode === 'dark' ? '0 0 20px rgba(142, 197, 252, 0.5)' : 'none',
          opacity: 0,
          animation: isVisible && animationsEnabled ? 'fadeIn 0.8s forwards 0.3s' : 'none',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(-10px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}>
          Skill Set
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          fontSize: '2.5rem',
          margin: '1.5rem 0',
          opacity: 0,
          animation: isVisible && animationsEnabled ? 'fadeIn 0.8s forwards 0.6s' : 'none',
        }}>
          {topEmojis.map((emoji, index) => (
            <Box key={index} sx={{ 
              animation: isVisible && animationsEnabled ? `float 3s infinite ${index * 0.2}s` : 'none',
              '@keyframes float': {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-10px)' },
                '100%': { transform: 'translateY(0px)' }
              }
            }}>
              {emoji}
            </Box>
          ))}
        </Box>
        
        <Typography variant="body1" sx={{ 
          maxWidth: '80%',
          margin: '0 auto',
          color: theme.palette.text.secondary,
          opacity: 0,
          animation: isVisible && animationsEnabled ? 'fadeIn 0.8s forwards 0.9s' : 'none',
        }}>
          A versatile tech stack with expertise in various programming languages, frameworks, and tools
        </Typography>
      </Box>
    </SkillsDecoration>
  );
});

// Main Skills component
const Skills = memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isVisible, setIsVisible] = useState(false);
  const { animationsEnabled } = useAppContext();
  
  // Observer to trigger animations when section is in view
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
    
    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <Box id="skills-section" sx={sectionContainerStyles(theme)}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{
          ...sectionHeaderStyles,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            display: 'inline-block',
            width: '30px',
            height: '3px',
            background: theme.palette.primary.main,
            marginRight: '10px',
            borderRadius: '3px',
          }
        }}
      >
        <span style={{ color: theme.palette.primary.main }}>#</span> skills
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Skills visualization (left column on desktop) */}
        <Grid item xs={12} md={4}>
          <Box 
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              height: '100%',
              minHeight: isMobile ? '300px' : '500px',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              opacity: 0,
              animation: isVisible && animationsEnabled ? 'fadeIn 0.8s forwards' : 'none',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'scale(0.95)' },
                to: { opacity: 1, transform: 'scale(1)' }
              }
            }}
          >
            <SkillsVisualizer 
              isVisible={isVisible} 
              animationsEnabled={animationsEnabled} 
            />
          </Box>
        </Grid>
        
        {/* Skills categories (right column on desktop) */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {Object.entries(skillsData).map(([category, skills], index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SkillCategory 
                  title={category.charAt(0).toUpperCase() + category.slice(1)} 
                  skills={skills}
                  delay={0.2 + index * 0.1}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Skills;