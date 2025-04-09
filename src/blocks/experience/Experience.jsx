// src/sections/Experience.jsx (Original Design with Filter Chips)
import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  useTheme,
  useMediaQuery,
  Grow,
  Fade,
  Slide,
  Paper,
  Grid,
  Avatar,
  Divider,
  IconButton,
  Stack,
  Tooltip
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { sectionHeaderStyles, sectionContainerStyles } from "../../theme/theme";

// Experience data
const experienceData = [
  {
    company: "WovvTech",
    role: "Senior Software Developer | Team Lead",
    duration: "Jan 2021 – Present",
    location: "Rourkela, Odisha",
    client: "Builder.ai",
    project: "InitialFinalBuild – Social Events App",
    icon: "💻",
    color: "#7540EE", // A vibrant purple
    tasks: [
      "Developed UI from Figma designs using React Native & React.js",
      "Conducted code reviews, optimized performance, and fixed bugs",
      "Mentored junior developers, ensuring smooth onboarding",
      "Managed team tasks and led UI development activities",
    ],
    skills: ["React.js", "React Native", "JavaScript", "TypeScript", "UI/UX", "Team Leadership"],
    achievements: ["Improved app performance by 30%", "Mentored 5 junior developers"],
    category: "Work"
  },
  {
    company: "GrabbnGo Private Limited",
    role: "Associate - Technology",
    duration: "Oct 2020 – Jul 2022",
    location: "Remote",
    icon: "🛒",
    color: "#2E88F7", // A blue shade
    projects: [
      "Applite – E-commerce Application",
      "GrabbnGo Business Dashboard (E-commerce)",
      "Delivery Boy Application (React Native)",
      "Scan-to-Cart (React Native)",
    ],
    tasks: [
      "Developed responsive UI using React & Material UI",
      "Integrated APIs, debugged, and enhanced application features",
      "Built delivery & dashboard apps using React Native",
      "Implemented scan-to-cart features for mall-based shopping",
    ],
    skills: ["React.js", "Material UI", "API Integration", "React Native", "Mobile Development"],
    achievements: ["Reduced load time by 25%", "Streamlined checkout process"],
    category: "Work"
  },
  {
    company: "AukPro Solutions Pvt Ltd",
    role: "Software Developer",
    duration: "Jan 2020 – Oct 2020",
    location: "Remote",
    project: "AukAIoT (IoT Automation App)",
    icon: "🤖",
    color: "#00A896", // A teal color
    tasks: [
      "Developed an app that automates logistics, ensures food safety, and manages water labeling using IoT technology",
      "Set up data flow to send data from IoT devices to an Azure-hosted server using NodeMCU",
      "Utilized Django to efficiently store IoT device data in a PostgreSQL database",
      "Implemented Django-Graphene for GraphQL queries and updates",
      "Used Apollo Client and GraphQL to dynamically fetch and visualize IoT device data in React.js",
    ],
    skills: ["IoT", "Django", "PostgreSQL", "GraphQL", "Apollo Client", "React.js", "Azure"],
    achievements: ["Automated 3 critical logistics processes", "Reduced manual entry errors by 90%"],
    category: "Work"
  },
  {
    company: "ReAudito",
    role: "Software Developer",
    duration: "April 2019 – Dec 2020",
    location: "Remote",
    project: "Smart Audit System",
    icon: "📊",
    color: "#F95738", // An orange color
    tasks: [
      "Developed web-based audit and compliance management system",
      "Implemented real-time reporting and data visualization features",
      "Created custom dashboards for different user roles",
      "Integrated third-party APIs for extended functionality",
      "Optimized database queries for improved performance",
    ],
    skills: ["JavaScript", "React.js", "Data Visualization", "API Integration", "SQL"],
    achievements: ["Improved audit completion time by 40%", "Automated report generation"],
    category: "Work"
  },
  {
    company: "Learnitude Technologies (P) Ltd",
    role: "Software Developer Intern",
    duration: "May 2018 – Jul 2018",
    location: "Remote",
    icon: "🧠",
    color: "#F9C80E", // A yellow color
    tasks: [
      "Contributed to various e-commerce projects, focusing on backend development and database management",
      "Gained valuable experience in full-stack development, working closely with cross-functional teams",
    ],
    skills: ["Backend Development", "Database Management", "Full-Stack Development", "Team Collaboration"],
    achievements: ["Recognized for innovative solution to inventory tracking"],
    category: "Internship"
  },
  {
    company: "Gangadhar Meher University",
    role: "Master of Computer Applications (MCA)",
    duration: "2017 – 2018",
    location: "Sambalpur, Odisha",
    icon: "🎓",
    color: "#4E4A67", // A dark purple/blue
    tasks: [
      "Completed a Master of Computer Applications degree with extensive coursework in data structures, algorithms, and web development",
      "Worked on various projects applying theoretical knowledge to practical applications",
      "Participated in coding competitions and tech events",
    ],
    skills: ["Data Structures", "Algorithms", "Web Development", "Academic Research"],
    achievements: ["Academic Excellence Award", "Best Project Award for Library Management System"],
    category: "Education"
  },
];

// Extract unique filter categories
const filterCategories = {
  category: [...new Set(experienceData.map(exp => exp.category))],
  company: [...new Set(experienceData.map(exp => exp.company))],
  skills: [...new Set(experienceData.flatMap(exp => exp.skills))].sort(),
};

// Simple chip container for filters
const FilterChipsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  borderRadius: '8px',
}));

// Styled components for enhanced visual appeal
const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '20px',
    width: '4px',
    top: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark' 
      ? 'linear-gradient(to bottom, #0078FF, rgba(0, 120, 255, 0.1))' 
      : 'linear-gradient(to bottom, #0078FF, rgba(0, 120, 255, 0.1))',
    borderRadius: '4px',
    zIndex: 0,
  }
}));

const TimelineItem = styled(Box)(({ theme, customColor = '#0078FF' }) => ({
  position: 'relative',
  display: 'flex',
  marginBottom: theme.spacing(6),
  width: '100%',
  flexDirection: 'row',
  
  // Timeline dot - the colored circle on the timeline
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '20px',
    top: '30px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: customColor,
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 0 0 4px ${customColor}30`,
    zIndex: 2,
    transition: 'all 0.3s ease',
  },
  
  // Hover effect for the timeline dot
  '&:hover::before': {
    transform: 'scale(1.2)',
    boxShadow: `0 0 0 6px ${customColor}40, 0 0 20px ${customColor}30`,
  },
}));

const TimelineContent = styled(Paper)(({ theme, customColor = '#0078FF' }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  borderRadius: '16px',
  width: 'calc(100% - 60px)',
  marginLeft: '40px',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 10px 30px rgba(0, 0, 0, 0.15)' 
    : '0 10px 30px rgba(0, 0, 0, 0.08)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
  transition: 'all 0.3s ease',
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(145deg, rgba(30, 30, 35, 0.95), rgba(20, 20, 25, 0.95))` 
    : `linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 245, 0.95))`,
  overflow: 'hidden',
  
  // Hover effect for the card
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 15px 35px rgba(0, 0, 0, 0.15), 0 0 15px ${customColor}20`,
  },
  
  // Colored top border
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(to right, ${customColor}, ${customColor}80)`,
  },
}));

const CompanyAvatar = styled(Avatar)(({ theme, bgColor = '#0078FF' }) => ({
  width: 56,
  height: 56,
  backgroundColor: bgColor,
  color: '#fff',
  fontSize: '24px',
  boxShadow: `0 5px 15px ${bgColor}40`,
  border: `3px solid ${theme.palette.background.paper}`,
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
  }
}));

const SkillChip = styled(Chip)(({ theme, customColor = '#0078FF' }) => ({
  margin: '4px',
  backgroundColor: `${customColor}15`,
  color: theme.palette.mode === 'dark' ? '#fff' : '#333',
  border: `1px solid ${customColor}40`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${customColor}25`,
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 8px ${customColor}20`,
  }
}));

const ProjectItem = styled(Box)(({ theme, customColor = '#0078FF' }) => ({
  padding: '8px 12px',
  margin: '4px 0',
  borderRadius: '8px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
  borderLeft: `3px solid ${customColor}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    transform: 'translateX(5px)',
  }
}));

const AchievementItem = styled(Box)(({ theme, customColor = '#0078FF' }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 0',
  '&::before': {
    content: '"🏆"',
    marginRight: '8px',
    fontSize: '16px',
  }
}));

const TaskItem = styled(ListItem)(({ theme, customColor = '#0078FF' }) => ({
  padding: '4px 0',
  position: 'relative',
  paddingLeft: '24px',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '"✦"',
    position: 'absolute',
    left: 0,
    color: customColor,
    fontWeight: 'bold',
  },
  '&:hover': {
    transform: 'translateX(5px)',
    color: customColor,
  }
}));

const FilterChip = styled(Chip)(({ theme, selected }) => ({
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
  color: selected ? '#fff' : theme.palette.text.primary,
  fontWeight: selected ? 600 : 400,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
  }
}));

// The main Experience component
const Experience = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Filter states
  const [activeFilterType, setActiveFilterType] = useState('category'); // 'category', 'company', 'skills'
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // Handle toggling filter type
  const handleFilterTypeChange = (filterType) => {
    setActiveFilterType(filterType);
    setSelectedFilters([]); // Reset selected filters when changing filter type
  };
  
  // Handle chip selection
  const handleChipClick = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };
  
  // Filter experiences based on selected filters
  const filteredExperiences = experienceData.filter(exp => {
    if (selectedFilters.length === 0) return true;
    
    switch (activeFilterType) {
      case 'category':
        return selectedFilters.includes(exp.category);
      case 'company':
        return selectedFilters.includes(exp.company);
      case 'skills':
        return selectedFilters.some(skill => exp.skills.includes(skill));
      default:
        return true;
    }
  });

  // Handle scroll animation
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      id="experience"
      ref={sectionRef}
      sx={{
        ...sectionContainerStyles(theme),
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "80px", // Ensure proper scroll positioning with fixed header
      }}
    >
      <Grow in={isVisible} timeout={800}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* Decorative background elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '50%',
              background: theme.palette.mode === 'dark' 
                ? 'radial-gradient(circle at 80% 20%, rgba(0, 120, 255, 0.1), transparent 70%)' 
                : 'radial-gradient(circle at 80% 20%, rgba(0, 120, 255, 0.05), transparent 70%)',
              zIndex: -1,
            }}
          />
          
          <Slide direction="right" in={isVisible} timeout={500}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                ...sectionHeaderStyles,
                fontWeight: 700,
                position: "relative",
                display: "inline-block",
                marginBottom: "30px",
              }}
            >
              <span style={{ color: "#0078FF" }}>#</span> Work Experience
            </Typography>
          </Slide>
          
          {/* Filter type selection buttons */}
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <FilterChip
              label="Filter by Category"
              onClick={() => handleFilterTypeChange('category')}
              selected={activeFilterType === 'category'}
            />
            <FilterChip
              label="Filter by Company"
              onClick={() => handleFilterTypeChange('company')}
              selected={activeFilterType === 'company'}
            />
            <FilterChip
              label="Filter by Skills"
              onClick={() => handleFilterTypeChange('skills')}
              selected={activeFilterType === 'skills'}
            />
            
            {selectedFilters.length > 0 && (
              <Chip
                label="Clear Filters"
                variant="outlined"
                onClick={() => setSelectedFilters([])}
                sx={{ ml: 'auto' }}
              />
            )}
          </Box>
          
          {/* Filter chips */}
          <FilterChipsContainer>
            {activeFilterType === 'category' && filterCategories.category.map((category, index) => (
              <FilterChip
                key={index}
                label={category}
                onClick={() => handleChipClick(category)}
                selected={selectedFilters.includes(category)}
              />
            ))}
            
            {activeFilterType === 'company' && filterCategories.company.map((company, index) => (
              <FilterChip
                key={index}
                label={company}
                onClick={() => handleChipClick(company)}
                selected={selectedFilters.includes(company)}
              />
            ))}
            
            {activeFilterType === 'skills' && filterCategories.skills.map((skill, index) => (
              <FilterChip
                key={index}
                label={skill}
                onClick={() => handleChipClick(skill)}
                selected={selectedFilters.includes(skill)}
              />
            ))}
          </FilterChipsContainer>
          
          {/* Filter summary */}
          <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            {selectedFilters.length > 0 
              ? `Showing ${filteredExperiences.length} of ${experienceData.length} experiences` 
              : `Showing all ${experienceData.length} experiences`}
          </Typography>

          {/* Animated timeline */}
          <TimelineContainer>
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((experience, index) => (
                <Fade key={index} in={isVisible} timeout={1000} style={{ transitionDelay: `${index * 100}ms` }}>
                  <TimelineItem customColor={experience.color}>
                    <TimelineContent customColor={experience.color}>
                      <Box sx={{ position: 'relative' }}>
                        {/* Company and role */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
                          <CompanyAvatar bgColor={experience.color}>
                            <span role="img" aria-label={experience.company}>{experience.icon}</span>
                          </CompanyAvatar>
                          
                          <Typography variant="h5" sx={{ 
                            fontWeight: 700,
                            mb: 0.5,
                            background: `linear-gradient(45deg, ${experience.color}, ${theme.palette.primary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}>
                            {experience.company}
                          </Typography>
                          
                          <Typography variant="subtitle1" sx={{ 
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                          }}>
                            {experience.role}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" sx={{ 
                              color: theme.palette.text.secondary,
                              display: 'flex',
                              alignItems: 'center',
                              '&::before': {
                                content: '"🗓️"',
                                marginRight: '6px',
                              }
                            }}>
                              {experience.duration}
                            </Typography>
                            
                            <Typography variant="body2" sx={{ 
                              color: theme.palette.text.secondary,
                              ml: 2,
                              display: 'flex',
                              alignItems: 'center',
                              '&::before': {
                                content: '"📍"',
                                marginRight: '6px',
                              }
                            }}>
                              {experience.location}
                            </Typography>
                          </Box>
                          
                          {/* Category badge */}
                          <Chip 
                            label={experience.category} 
                            size="small"
                            sx={{ 
                              mt: 1,
                              backgroundColor: `${experience.color}20`,
                              color: experience.color,
                              fontWeight: 500,
                            }}
                            onClick={() => {
                              setActiveFilterType('category');
                              setSelectedFilters([experience.category]);
                            }}
                          />
                        </Box>
                        
                        <Divider sx={{ mb: 2 }} />
                        
                        {/* Project information */}
                        {experience.project && (
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Project
                            </Typography>
                            <ProjectItem customColor={experience.color}>
                              <Typography variant="body2">{experience.project}</Typography>
                            </ProjectItem>
                          </Box>
                        )}
                        
                        {/* Multiple projects */}
                        {experience.projects && (
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Projects
                            </Typography>
                            {experience.projects.map((project, idx) => (
                              <ProjectItem key={idx} customColor={experience.color}>
                                <Typography variant="body2">{project}</Typography>
                              </ProjectItem>
                            ))}
                          </Box>
                        )}
                        
                        {/* Key responsibilities */}
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Key Responsibilities
                          </Typography>
                          <List dense disablePadding>
                            {experience.tasks.map((task, idx) => (
                              <TaskItem key={idx} customColor={experience.color}>
                                <ListItemText 
                                  primary={task} 
                                  primaryTypographyProps={{ variant: 'body2' }}
                                />
                              </TaskItem>
                            ))}
                          </List>
                        </Box>
                        
                        {/* Achievements section */}
                        {experience.achievements && (
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Key Achievements
                            </Typography>
                            {experience.achievements.map((achievement, idx) => (
                              <AchievementItem key={idx} customColor={experience.color}>
                                <Typography variant="body2">{achievement}</Typography>
                              </AchievementItem>
                            ))}
                          </Box>
                        )}
                        
                        {/* Skills used */}
                        {experience.skills && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                              Skills Used
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: '-4px' }}>
                              {experience.skills.map((skill, idx) => (
                                <SkillChip 
                                  key={idx} 
                                  label={skill} 
                                  size="small" 
                                  customColor={experience.color}
                                  onClick={() => {
                                    setActiveFilterType('skills');
                                    setSelectedFilters([skill]);
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                </Fade>
              ))
            ) : (
              // No results view
              <Box sx={{ 
                textAlign: 'center', 
                py: 4,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                borderRadius: '8px'
              }}>
                <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  No experiences match your selected filters
                </Typography>
                <Chip 
                  label="Clear Filters" 
                  color="primary" 
                  onClick={() => setSelectedFilters([])} 
                />
              </Box>
            )}
          </TimelineContainer>
        </Box>
      </Grow>
    </Box>
  );
};

export default Experience;