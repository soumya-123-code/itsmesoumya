// src/sections/Projects.jsx (Enhanced Version)
import React, { useState, useMemo, memo, useCallback, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Button,
  Box,
  useMediaQuery,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
  Divider,
  Zoom,
  Fade,
  Paper,
  Avatar,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Badge
} from "@mui/material";





import { sectionHeaderStyles, sectionContainerStyles } from "../../theme/theme";

// Import project data from a separate file
import { projectsData } from "./ProjectData";

// Transition for project details dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Memoized search component with animation
const Search = memo(({ searchValue, onSearchChange }) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box sx={{ 
      width: { 
        xs: "100%", 
        sm: "100%", 
        md: "100%", 
        lg: "100%" 
      },
      position: "relative",
      maxWidth: "100%",
    }}>
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search projects..."
        fullWidth
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          border: (theme) => `1px solid ${isFocused ? theme.palette.primary.main : theme.palette.divider}`,
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          boxShadow: isFocused ? 
            (theme.palette.mode === 'dark' ? '0 0 8px rgba(0, 120, 255, 0.5)' : '0 0 8px rgba(0, 120, 255, 0.25)') : 
            'none',
          '&:hover': {
            borderColor: 'primary.main',
          },
          height: { xs: '40px', sm: '40px' }, // Consistent height across breakpoints
        }}
        startAdornment={
          <InputAdornment position="start">
            🔍
          </InputAdornment>
        }
        endAdornment={
          searchValue ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search"
                onClick={() => onSearchChange('')}
                edge="end"
                size="small"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                ❌
              </IconButton>
            </InputAdornment>
          ) : null
        }
        inputProps={{
          "aria-label": "search projects",
          sx: {
            '&::placeholder': {
              opacity: 0.7,
              transition: 'opacity 0.3s ease',
              fontSize: { xs: '0.875rem', sm: '0.875rem' }, // Consistent font size
            },
            '&:focus::placeholder': {
              opacity: 0.3,
            },
            padding: { xs: '8px 4px', sm: '8px 4px' }, // Ensure consistent padding
          }
        }}
      />
    </Box>
  );
});


// Project Detail Dialog component
const ProjectDetailDialog = ({ open, project, onClose }) => {
  const theme = useTheme();
  
  if (!project) return null;
  
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="project-detail-dialog"
      maxWidth="md"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '16px',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, rgba(30, 30, 35, 0.95), rgba(22, 22, 26, 0.95))' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(246, 246, 250, 0.95))',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={project.image}
          alt={project.title}
          sx={{ 
            objectFit: "cover",
            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
          }}
        />
        
        {/* Overlay gradient to make the title more readable */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          zIndex: 1,
        }} />
        
        {/* Close button */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }
          }}
        >
         ❌
        </IconButton>
        
        {/* Title overlay */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: 3,
          zIndex: 2,
        }}>
          <Typography variant="h4" component="h2" sx={{ 
            color: 'white',
            fontWeight: 700,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            {project.title}
          </Typography>
        </Box>
      </Box>
      
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              {project.description}
              {/* Add more detailed description here */}
              {project.longDescription || 'This is a detailed view of the project with additional information about the development process, challenges faced, and solutions implemented.'}
            </Typography>
            
            {/* Key features */}
            <Typography variant="h6" sx={{ 
              mb: 2, 
              fontWeight: 600,
              color: theme.palette.primary.main,
              position: 'relative',
              paddingLeft: '15px',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '5px',
                height: '24px',
                background: 'linear-gradient(to bottom, #0078FF, #6C47FF)',
                borderRadius: '3px',
              }
            }}>
              Key Features
            </Typography>
            
            <Box component="ul" sx={{ 
              paddingLeft: '20px',
              mb: 3,
              '& li': {
                marginBottom: '8px',
                position: 'relative',
              }
            }}>
              {(project.features || [
                'Responsive design across all devices',
                'Intuitive user interface with modern aesthetics',
                'Optimized performance and fast loading times',
                'Seamless API integration for dynamic content',
              ]).map((feature, index) => (
                <Box component="li" key={index} sx={{ 
                  paddingLeft: '5px',
                  '&::marker': {
                    color: theme.palette.primary.main,
                  }
                }}>
                  <Typography variant="body2">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              mb: 3, 
              borderRadius: '12px',
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
            }}>
              <Typography variant="subtitle2" sx={{ 
                mb: 1.5, 
                fontWeight: 600,
                color: theme.palette.primary.main
              }}>
                Project Details
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Category:
                  </Typography>
                  <Chip 
                    label={project.category}
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Completed:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {project.date || '2024'}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Client:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {project.client || 'Personal Project'}
                  </Typography>
                </Box>
              </Box>
            </Paper>
            
            <Paper elevation={0} sx={{ 
              p: 2, 
              mb: 3, 
              borderRadius: '12px',
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
            }}>
              <Typography variant="subtitle2" sx={{ 
                mb: 1.5, 
                fontWeight: 600,
                color: theme.palette.primary.main
              }}>
                Technologies Used
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#333',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main + '20',
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={"🔗"}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: '8px',
                  py: 1,
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #0078FF, #6C47FF)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 15px rgba(0, 120, 255, 0.3)',
                  }
                }}
              >
                Live Demo
              </Button>
              
              <Button
                fullWidth
                variant="outlined"
                startIcon={"💻"}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: '8px',
                  py: 1,
                  fontWeight: 600,
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.main + '10',
                  }
                }}
              >
                Source Code
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

// Memoized project card component with enhanced animations
const ProjectCard = memo(({ project, index, onClick }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Zoom in={true} style={{ transitionDelay: `${index * 50}ms` }}>
      <Card
        sx={{
          borderRadius: "16px",
          backgroundColor: isDarkMode ? 'rgba(30, 30, 35, 0.7)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          border: `1px solid ${isHovered ? theme.palette.primary.main : theme.palette.divider}`,
          transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border 0.3s ease",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: theme.palette.mode === 'dark' 
              ? `0 20px 30px rgba(0, 0, 0, 0.6), 0 0 15px ${theme.palette.primary.main}40` 
              : `0 20px 30px rgba(0, 0, 0, 0.15), 0 0 15px ${theme.palette.primary.main}20`
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: isHovered 
              ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` 
              : "transparent",
            transition: "all 0.3s ease",
            zIndex: 1,
          },
          cursor: 'pointer',
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Featured badge - conditionally shown */}
        {project.featured && (
          <Badge
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
              '& .MuiBadge-badge': {
                backgroundColor: '#0078FF',
                color: 'white',
                fontSize: '0.75rem',
                height: '24px',
                minWidth: '80px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0, 120, 255, 0.3)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }
            }}
            badgeContent="Featured"
            color="primary"
          />
        )}

        <CardMedia
          component="img"
          height="180"
          image={project.image}
          alt={project.title}
          sx={{ 
            objectFit: "cover",
            borderBottom: `1px solid ${theme.palette.divider}`,
            transition: "all 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            filter: isHovered ? "brightness(1.1)" : "brightness(1)",
          }}
        />

        <CardContent 
          sx={{ 
            flexGrow: 1, 
            p: 2.5,
            transition: "background-color 0.3s ease",
            backgroundColor: isHovered 
              ? (isDarkMode ? 'rgba(35, 35, 35, 0.95)' : 'rgba(250, 250, 250, 0.95)') 
              : 'transparent',
          }}
        >
          <Box 
            sx={{ 
              mb: 1.5,
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            {project.tags.slice(0, 3).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: isHovered 
                    ? `${theme.palette.primary.main}15` 
                    : "transparent",
                  color: isHovered 
                    ? theme.palette.primary.main 
                    : theme.palette.text.secondary,
                  border: `1px solid ${isHovered ? theme.palette.primary.main : theme.palette.divider}`,
                  transition: "all 0.3s ease",
                  mr: 0.5,
                  mb: 0.5,
                  transform: isHovered ? "translateY(-2px)" : "none",
                }}
              />
            ))}
            {project.tags.length > 3 && (
              <Chip
                label={`+${project.tags.length - 3}`}
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  mr: 0.5,
                  mb: 0.5,
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-2px)" : "none",
                }}
              />
            )}
          </Box>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 1.5,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              transition: "color 0.3s ease",
              color: isHovered ? theme.palette.primary.main : theme.palette.text.primary,
              fontWeight: isHovered ? 600 : 500,
              transform: isHovered ? "translateY(-2px)" : "none",
            }}
          >
            {project.title}
          </Typography>

          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              height: "4.5em", // Approximately 3 lines of text
              transition: "all 0.3s ease",
              transform: isHovered ? "translateY(-2px)" : "none",
              opacity: isHovered ? 0.95 : 0.85,
            }}
          >
            {project.description}
          </Typography>
        </CardContent>

        <CardActions 
          sx={{ 
            justifyContent: "space-between", 
            p: 2.5, 
            pt: 0,
            transition: "transform 0.3s ease",
            transform: isHovered ? "translateY(-2px)" : "none",
          }}
        >
          <Button
            size="small"
            sx={{
              color: isHovered ? "#fff" : theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              backgroundColor: isHovered ? theme.palette.primary.main : "transparent",
              transition: "all 0.3s ease",
              borderRadius: "20px",
              paddingX: "12px",
              "&:hover": { 
                backgroundColor: theme.palette.primary.main, 
                color: "#fff",
                transform: "translateY(-2px)",
                boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
              },
            }}
            endIcon={"👁️"}
          >
            Details
          </Button>

          <Box sx={{
            display: "flex",
            gap: 1
          }}>
            <Tooltip title="View Demo">
              <IconButton 
                size="small"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    transform: "translateY(-2px)",
                  }
                }}
              >
                🔗
              </IconButton>
            </Tooltip>
            
            <Tooltip title="View Code">
              <IconButton
                size="small"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    transform: "translateY(-2px)",
                  }
                }}
              >
              💻
              </IconButton>
            </Tooltip>
          </Box>
        </CardActions>
      </Card>
    </Zoom>
  );
});

// Filter chips component with enhanced horizontal scrolling
const FilterChips = memo(({ items, selectedItem, onItemSelect }) => {
  const theme = useTheme();
  const scrollContainerRef =React.useRef(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);
  
  // Handle scroll event to control shadows
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth;
      const isScrolledToStart = container.scrollLeft <= 10;
      const isScrolledToEnd = container.scrollWidth - container.scrollLeft - container.clientWidth <= 10;
      
      setShowLeftShadow(isScrollable && !isScrolledToStart);
      setShowRightShadow(isScrollable && !isScrolledToEnd);
    }
  }, []);
  
  // Set up scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      // Check on window resize
      window.addEventListener('resize', handleScroll);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [handleScroll]);
  
  // Scroll by fixed amount on arrow click
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Left shadow and arrow */}
      {showLeftShadow && (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '40px',
            background: `linear-gradient(to right, ${theme.palette.background.paper}, transparent)`,
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pl: 0.5,
          }}
        >
          <IconButton 
            size="small" 
            onClick={scrollLeft}
            sx={{ 
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)',
              width: '24px',
              height: '24px',
              boxShadow: theme.palette.mode === 'dark' ? '0 0 5px rgba(0, 0, 0, 0.5)' : '0 0 5px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
              }
            }}
          >
            ◀
          </IconButton>
        </Box>
      )}
      
      {/* Right shadow and arrow */}
      {showRightShadow && (
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '40px',
            background: `linear-gradient(to left, ${theme.palette.background.paper}, transparent)`,
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            pr: 0.5,
          }}
        >
          <IconButton 
            size="small" 
            onClick={scrollRight}
            sx={{ 
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.8)',
              width: '24px',
              height: '24px',
              boxShadow: theme.palette.mode === 'dark' ? '0 0 5px rgba(0, 0, 0, 0.5)' : '0 0 5px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
              }
            }}
          >
            ▶
          </IconButton>
        </Box>
      )}
    
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          width: "100%",
          overflowX: "auto",
          pb: 1.5,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Opera
          },
          // Scroll snap for better positioning
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "start",
          },
          // Remove mask image to use custom shadows instead
          position: "relative",
          px: 0.5, // Add padding to avoid chip cut-off
        }}
      >
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            clickable
            color={selectedItem === item ? "primary" : "default"}
            onClick={() => onItemSelect(item)}
            sx={{
              fontWeight: selectedItem === item ? 600 : 400,
              backgroundColor:
                selectedItem === item
                  ? theme.palette.primary.main
                  : theme.palette.mode === "dark"
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(0, 0, 0, 0.08)",
              color: selectedItem === item ? "#fff" : theme.palette.text.primary,
              flexShrink: 0,
              height: 32, // Consistent height
              fontSize: { xs: '0.75rem', sm: '0.8125rem' }, // Smaller font on mobile
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              border: `1px solid ${selectedItem === item ? theme.palette.primary.main : 'transparent'}`,
              "&:hover": {
                backgroundColor: selectedItem === item 
                  ? theme.palette.primary.main 
                  : theme.palette.mode === "dark"
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.15)",
                transform: "translateY(-2px)",
                boxShadow: selectedItem === item 
                  ? `0 4px 8px ${theme.palette.primary.main}40` 
                  : 'none',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
});

// Enhanced filter section for better mobile experience
const FilterSection = ({ 
  isFilterVisible, 
  filterType, 
  handleTabChange, 
  categories, 
  selectedCategory,
  handleCategorySelect,
  allLanguages,
  selectedLanguage,
  handleLanguageSelect,
  searchValue,
  handleSearchChange,
  theme
}) => {
  return (
    <Fade in={isFilterVisible}>
      <Box>
        <Tabs 
          value={filterType} 
          onChange={handleTabChange} 
          aria-label="project filter tabs"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{ 
            mb: 2,
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '2px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            },
            '& .MuiTabs-scrollButtons': {
              color: theme.palette.primary.main,
            },
            // Make tabs more compact on mobile
            '& .MuiTab-root': {
              minHeight: { xs: 40, sm: 48 },
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              padding: { xs: '6px 12px', sm: '12px 16px' },
            }
          }}
        >
          <Tab 
            icon={"📂"} 
            label="Categories" 
            iconPosition="start"
            sx={{ 
              minHeight: { xs: 40, sm: 48 },
              textTransform: 'none',
              fontWeight: filterType === 0 ? 600 : 400,
              transition: 'all 0.3s ease',
              borderRadius: '4px 4px 0 0',
              '&.Mui-selected': {
                color: theme.palette.primary.main,
                fontWeight: 600,
              },
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(0, 0, 0, 0.05)',
                color: theme.palette.primary.main,
              }
            }}
          />
          <Tab 
            icon={"🧩"} 
            label="Technologies" 
            iconPosition="start"
            sx={{ 
              minHeight: { xs: 40, sm: 48 },
              textTransform: 'none',
              fontWeight: filterType === 1 ? 600 : 400,
              transition: 'all 0.3s ease',
              borderRadius: '4px 4px 0 0',
              '&.Mui-selected': {
                color: theme.palette.primary.main,
                fontWeight: 600,
              },
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(0, 0, 0, 0.05)',
                color: theme.palette.primary.main,
              }
            }}
          />
        </Tabs>
        <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: { xs: 1.5, sm: 2 },
    mb: 3,
  }}
>
  {/* Category/Language filters - Full width row */}
  <Box sx={{ width: '100%' }}>
    {filterType === 0 ? (
      <FilterChips
        items={categories}
        selectedItem={selectedCategory}
        onItemSelect={handleCategorySelect}
        sx={{ 
          flexWrap: "wrap", 
          justifyContent: { xs: "center", sm: "flex-start" } 
        }}
      />
    ) : (
      <FilterChips
        items={allLanguages}
        selectedItem={selectedLanguage}
        onItemSelect={handleLanguageSelect}
        sx={{ 
          flexWrap: "wrap", 
          justifyContent: { xs: "center", sm: "flex-start" } 
        }}
      />
    )}
  </Box>
  
  {/* Search Bar - Full width row */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      gap: 1
    }}
  >
    <Search 
      searchValue={searchValue} 
      onSearchChange={handleSearchChange} 
      sx={{ 
        flex: 1,
        width: "100%"
      }}
    />
    <Tooltip title="RSS Feed">
      <IconButton
        size="small"
        aria-label="RSS feed"
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          border: `1px solid ${theme.palette.divider}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
          },
          flexShrink: 0
        }}
      >
        📡
      </IconButton>
    </Tooltip>
  </Box>
</Box>
      </Box>
    </Fade>
  );
};

// Main enhanced Projects component
const Projects = () => {
  const [filterType, setFilterType] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSearchSticky, setIsSearchSticky] = useState(false);
  const searchBarRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  // Detect when component is in view
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
    
    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);

  // Handle sticky search bar on scroll
  useEffect(() => {
    const handleStickySearch = () => {
      if (!searchBarRef.current) return;
      
      const searchBarTop = searchBarRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      
      if (searchBarTop <= 0 && scrollPosition > 200) {
        setIsSearchSticky(true);
      } else {
        setIsSearchSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleStickySearch);
    return () => {
      window.removeEventListener('scroll', handleStickySearch);
    };
  }, []);

  // Extract languages from project tags (same as original)
  const allLanguages = useMemo(() => {
    const languageSet = new Set();
    const knownLanguages = [
      'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 
      'React', 'React Native', 'Node', 'Express', 'MongoDB',
      'Django', 'Flask', 'PHP', 'Laravel', 'Vue', 'Angular', 
      'NextJS', 'Tailwind', 'GraphQL', 'SQL', 'PostgreSQL',
      'MySQL', 'Java', 'C++', 'C#', 'Ruby', 'Swift', 'Kotlin',
      'Solidity', 'Rust', 'Go', 'Svelte', 'Firebase'
    ];
    
    languageSet.add("All");
    
    projectsData.forEach(project => {
      project.tags.forEach(tag => {
        if (knownLanguages.some(lang => 
          tag.toLowerCase().includes(lang.toLowerCase()))) {
          languageSet.add(tag);
        }
      });
    });
    
    return Array.from(languageSet);
  }, []);

  // Memoize categories (same as original)
  const categories = useMemo(() => {
    return ["All", ...new Set(projectsData.map((card) => card.category))];
  }, []);

  // Handler functions (same as original)
  const handleTabChange = (event, newValue) => {
    setFilterType(newValue);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Filtered projects logic (same as original)
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      
      const matchesLanguage = 
        selectedLanguage === "All" || 
        project.tags.some(tag => tag === selectedLanguage);
      
      const matchesSearch =
        project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase()));
      
      if (filterType === 0) {
        return matchesCategory && matchesSearch;
      } else {
        return matchesLanguage && matchesSearch;
      }
    });
  }, [selectedCategory, selectedLanguage, searchValue, filterType]);

  // Callbacks for handling user interactions
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleLanguageSelect = useCallback((language) => {
    setSelectedLanguage(language);
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
  }, []);

  // Animated section header (same as original)
  const AnimatedSectionHeader = () => {
    return (
      <Box sx={{ overflow: 'hidden', mb: 3 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{
            ...sectionHeaderStyles,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.6s ease, opacity 0.6s ease',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: isVisible ? '100%' : '0%',
              height: '2px',
              backgroundColor: theme.palette.primary.main,
              transition: 'width 0.8s ease-in-out',
              transitionDelay: '0.3s',
            }
          }}
        >
          <span style={{ 
            color: theme.palette.primary.main,
            display: 'inline-block',
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.4s ease, opacity 0.4s ease',
          }}>#</span> Projects
        </Typography>
      </Box>
    );
  };

  // Sticky Search component
  const StickySearchBar = () => {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(22, 22, 26, 0.95)' 
            : 'rgba(246, 246, 250, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transform: isSearchSticky ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
          py: 1.5,
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, display: { xs: 'none', sm: 'block' } }}>
          {filteredProjects.length} Projects
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          width: { xs: '100%', sm: 'auto' },
          justifyContent: 'flex-end'
        }}>
          <Search searchValue={searchValue} onSearchChange={handleSearchChange} />
          
          <IconButton
            size="small"
            onClick={toggleFilterVisibility}
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.8)',
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
              }
            }}
          >
            {isFilterVisible ? '🔼' : '🔽'}
          </IconButton>
        </Box>
      </Box>
    );
  };

  return (
    <Box 
      id="projects" 
      sx={{
        ...sectionContainerStyles(theme),
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark' 
            ? 'radial-gradient(circle at top right, rgba(0, 120, 255, 0.1), transparent 60%)' 
            : 'radial-gradient(circle at top right, rgba(0, 120, 255, 0.05), transparent 60%)',
          pointerEvents: 'none',
        }
      }}
    >
      {/* Optional Sticky Search Bar */}
      {isSearchSticky && <StickySearchBar />}
      
      <AnimatedSectionHeader />

      {/* Mobile search and filter toggle */}
      <Box
        ref={searchBarRef}
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          width: "100%",
          mb: 2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Search searchValue={searchValue} onSearchChange={handleSearchChange} />
        <IconButton 
          size="small" 
          aria-label="toggle filters"
          onClick={toggleFilterVisibility}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.8)',
            border: `1px solid ${theme.palette.divider}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: theme.palette.primary.main,
            }
          }}
        >
          {isFilterVisible ? '🔼' : '🔽'}
        </IconButton>
      </Box>

      {/* Filter section */}
      <FilterSection 
        isFilterVisible={!isMobile || isFilterVisible}
        filterType={filterType}
        handleTabChange={handleTabChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
        allLanguages={allLanguages}
        selectedLanguage={selectedLanguage}
        handleLanguageSelect={handleLanguageSelect}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        theme={theme}
      />

      {/* Project count info */}
      <Box 
        sx={{ 
          mb: 2,
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.03)',
          padding: '8px 16px',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
        }}
      >
        ℹ️
        <Typography 
          variant="body2" 
          sx={{
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            fontWeight: 500,
          }}
        >
          Showing <span style={{ color: theme.palette.primary.main, fontWeight: 600 }}>{filteredProjects.length}</span> of {projectsData.length} projects
        </Typography>
      </Box>

      {/* Project grid with staggered animation */}
      <Grid container spacing={3}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard 
                project={project} 
                index={index} 
                onClick={() => handleProjectClick(project)}
              />
            </Grid>
          ))
        ) : (
          <Box sx={{ 
            width: "100%", 
            textAlign: "center", 
            py: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Typography 
              variant="h6"
              sx={{
                opacity: 0.7,
                mb: 2
              }}
            >
              No projects match your search criteria
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLanguage("All");
                setSearchValue("");
              }}
              sx={{ 
                mt: 1,
                borderRadius: '24px',
                padding: '8px 24px',
                fontWeight: 500,
                textTransform: 'none',
                boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                transition: 'all 0.3s ease',
                background: 'linear-gradient(90deg, #0078FF, #6C47FF)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 16px ${theme.palette.primary.main}60`,
                }
              }}
            >
              Clear all filters
            </Button>
          </Box>
        )}
      </Grid>
      
      {/* Project details dialog */}
      <ProjectDetailDialog 
        open={dialogOpen} 
        project={selectedProject} 
        onClose={handleCloseDialog}
      />
    </Box>
  );
};

export default Projects;