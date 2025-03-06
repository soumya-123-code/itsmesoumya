import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="section-header">
        <h2 style={{ color: '#fff' }}><span className="accent">#</span>contacts</h2>
      </div>

      <div className="contacts-content" style={{ color: '#fff' }}>
        <div className="contacts-text">
          <p>
            I'm interested in freelance opportunities. However,
            if you have other request or question, don't
            hesitate to contact me
          </p>
        </div>

        <div className="contact-box">
          <h3>Message me here</h3>
          <div className="contact-item">
            <i className="fa-brands fa-discord"></i>
            <p>+91 9438509060</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p>soumya050794@gmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <a href=" https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a"> Linked IN</a>
          </div>
         
        </div>
      </div>
      </section>
  );
};

export default Contact;
