import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
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
  const [selectedCompany, setSelectedCompany] = useState(uniqueCompanies[0]);

  const handleChipClick = (company) => {
    setSelectedCompany(company);
  };

  const selectedExperience = experienceData.find(
    (exp) => exp.company === selectedCompany
  );

  return (
    <section style={{
      padding: '40px 20px',
      backgroundColor: '#1e1e1e',
      color: '#fff'
    }}>
      <div className="section-header">
        <h2 style={{ color: '#fff' }}>
          <span className="accent">#</span> Work Experience
        </h2>
      </div>

      {/* Company Selection Tabs */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", mb: 3 }}>
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
              backgroundColor: selectedCompany === company ?  "#c778dd" : "rgba(0, 0, 0, 0.6)",
         
              color: "#fff" // Ensure chip text is readable
            }}
          />
        ))}
      </Box>

      {/* Experience Card */}
      {selectedExperience && (
        <div style={{
          padding: "20px", 

          borderRadius: "12px",
          textAlign: "left", 
        
          padding: "16px",
        
        }}>
          <div className="skill-category">
            <h3 style={{ color: '#fff' }}> {selectedExperience.company}</h3>
            <ul style={{ color: '#fff' }}>
              <li>{selectedExperience.role} | {selectedExperience.duration}</li>
              <li>{selectedExperience.location}</li>

              {selectedExperience.client && (
                <li><strong>Client:</strong> {selectedExperience.client}</li>
              )}
              {selectedExperience.project && (
                <li><strong>Project:</strong> {selectedExperience.project}</li>
              )}

              {selectedExperience.projects && (
                <>
                  <li style={{ fontWeight: "bold" }}>
                    Projects:
                  </li>
                  <ul style={{ color: '#fff' }}>
                    {selectedExperience.projects.map((project, i) => (
                      <li key={i}>
                        <ListItemText primary={`• ${project}`} />
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <li style={{ fontWeight: "bold" }}>
                Key Responsibilities:
              </li>
              <ul style={{ color: '#fff' }}>
                {selectedExperience.tasks.map((task, i) => (
                  <li key={i}>
                    <ListItemText primary={`✔ ${task}`} />
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
