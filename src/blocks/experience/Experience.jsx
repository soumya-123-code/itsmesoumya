import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,useTheme,Grid2,
  useMediaQuery
} from "@mui/material";

// Experience data
const experienceData = [
    {
      company: "WovvTech",
      role: "Senior Software Developer | Team Lead",
      duration: "Jan 2021 – Present",
      location: "Rourkela, Odisha",
      client: "Builder.ai",
      project: "InitialFinalBuild – Social Events App",
      tasks: [
        "Developed UI from Figma designs using React Native & React.js",
        "Conducted code reviews, optimized performance, and fixed bugs",
        "Mentored junior developers, ensuring smooth onboarding",
        "Managed team tasks and led UI development activities",
      ],
    },
    {
      company: "GrabbnGo Private Limited",
      role: "Associate - Technology",
      duration: "Oct 2020 – Jul 2022",
      location: "Remote",
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
    },
    {
      company: "AukPro Solutions Pvt Ltd",
      role: "Software Developer",
      duration: "Jan 2020 – Oct 2020",
      location: "Remote",
      project: "AukAIoT (IoT Automation App)",
      tasks: [
        "Developed an app that automates logistics, ensures food safety, and manages water labeling using IoT technology",
        "Set up data flow to send data from IoT devices to an Azure-hosted server using NodeMCU",
        "Utilized Django to efficiently store IoT device data in a PostgreSQL database",
        "Implemented Django-Graphene for GraphQL queries and updates",
        "Used Apollo Client and GraphQL to dynamically fetch and visualize IoT device data in React.js",
      ],
    },
    {
      company: "ReAudito",
      role: "Software Developer",
      duration: "April 2019 – Dec 2020",
      location: "Remote",
      project: "AukAIoT (IoT Automation App)",
      tasks: [
        "Developed an app that automates logistics, ensures food safety, and manages water labeling using IoT technology",
        "Set up data flow to send data from IoT devices to an Azure-hosted server using NodeMCU",
        "Utilized Django to efficiently store IoT device data in a PostgreSQL database",
        "Implemented Django-Graphene for GraphQL queries and updates",
        "Used Apollo Client and GraphQL to dynamically fetch and visualize IoT device data in React.js",
      ],
    },
    {
      company: "Learnitude Technologies (P) Ltd",
      role: "Software Developer Intern",
      duration: "May 2018 – Jul 2018",
      location: "Remote",
      tasks: [
        "Contributed to various e-commerce projects, focusing on backend development and database management",
        "Gained valuable experience in full-stack development, working closely with cross-functional teams",
      ],
    },
    {
      company: "Gangadhar Meher University",
      role: "Master of Computer Applications (MCA)",
      duration: "2017 – 2018",
      location: "Sambalpur, Odisha",
      tasks: [
        "Completed a Master of Computer Applications degree with extensive coursework in data structures, algorithms, and web development",
      ],
    },
  ];
  

// Extract unique company names for filtering


const uniqueCompanies = [...new Set(experienceData.map((exp) => exp.company))];

const Experience = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedCompany, setSelectedCompany] = useState(uniqueCompanies[0]);

  const handleChipClick = (company) => {
    setSelectedCompany(company);
  };

  const selectedExperience = experienceData.find(
    (exp) => exp.company === selectedCompany
  );

  return (
    <Box
      id="experience"
      sx={{
        py: isMobile ? 0.2 : 6,
        px: isMobile ? 0.2 : 4,
        bgcolor: "background.paper",
        color: "text.primary",
        borderRadius: "8px",
        boxShadow: (theme) =>
          `0 8px 32px ${theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"}`,
        margin: isMobile ? "10px auto":"40px auto",
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
            background: "linear-gradient(90deg, #c778dd, transparent)",
          },
        }}
      >
        <span style={{ color: "#c778dd" }}>#</span> Work Experience
      </Typography>

      {/* Company Selection Chips */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, overflowX: 'auto', mt: 3, p: 1, width: '100%' }}>
        {uniqueCompanies.map((company) => (
          <Chip
            key={company}
            label={company}
            onClick={() => handleChipClick(company)}
            color={selectedCompany === company ? "primary" : "default"}
            sx={{
              fontWeight: selectedCompany === company ? "bold" : "normal",
              cursor: "pointer",
              fontSize: "14px",
              backgroundColor: selectedCompany === company ? "#c778dd" : "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              "&:hover": {
                backgroundColor: selectedCompany === company ? "#a76bbd" : "rgba(0, 0, 0, 0.8)",
              },
            }}
          />
        ))}
      </Box>

      {/* Experience Card */}
      {selectedExperience && (
  <Card sx={{ borderRadius: "12px", overflow: "hidden", boxShadow: 3,background:"transparent",border:".5px solid"}}>
  <CardContent>
    <Typography variant="h5" sx={{ color: isDarkMode ? "#fff" : "#000", mb: 1 }}>
      {selectedExperience.company}
    </Typography>
    <Typography variant="body1" sx={{ color: isDarkMode ? "#ccc" : "#555", mb: 1 }}>
      {selectedExperience.role} | {selectedExperience.duration}
    </Typography>
    <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#333", mb: 2 }}>
      {selectedExperience.location}
    </Typography>

    {selectedExperience.client && (
      <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#333", mb: 1 }}>
        <strong>Client:</strong> {selectedExperience.client}
      </Typography>
    )}
    {selectedExperience.project && (
      <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#333", mb: 1 }}>
        <strong>Project:</strong> {selectedExperience.project}
      </Typography>
    )}

    {selectedExperience.projects && (
      <>
        <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#333", mb: 1 }}>
          <strong>Projects:</strong>
        </Typography>
        <List sx={{ paddingLeft: 2, marginBottom: 2 }}>
          {selectedExperience.projects.map((project, i) => (
            <ListItem key={i} sx={{ padding: 0 }}>
              <ListItemText primary={`• ${project}`} />
            </ListItem>
          ))}
        </List>
      </>
    )}

    <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#333", mb: 1 }}>
      <strong>Key Responsibilities:</strong>
    </Typography>
    <List sx={{ paddingLeft: 2 }}>
      {selectedExperience.tasks.map((task, i) => (
        <ListItem key={i} sx={{ padding: 0 }}>
          <ListItemText primary={`✔ ${task}`} />
        </ListItem>
      ))}
    </List>
  </CardContent>
</Card>
      )}
    </Box>
  );
};

export default Experience;