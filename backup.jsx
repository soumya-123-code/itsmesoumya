import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-code"></i> Elias
      </div>
      <nav>
        <ul>
          <li><a href="#home" className="active">#home</a></li>
          <li><a href="#works">#works</a></li>
          <li><a href="#about-me">#about-me</a></li>
          <li><a href="#contacts">#contacts</a></li>
          <li className="language-selector">
            EN <i className="fa-solid fa-chevron-down"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="social-links">
        <a href="#" className="social-icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="social-icon"><i className="fa-brands fa-discord"></i></a>
        <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Elias is a <span className="accent">web designer</span> and<br />
            <span className="accent">front-end developer</span>
          </h1>
          <p className="hero-description">
            He crafts responsive websites where technologies<br />
            meet creativity
          </p>
          <button className="btn-primary">Contact me !!</button>
        </div>

        <div className="hero-image">
          <img src="assets/header_img.png" alt="Elias in a hoodie" />
          <div className="status-badge">
            <div className="status-dot"></div>
            <p>Currently working on <span className="bold">Portfolio</span></p>
          </div>
          <div className="geometric-element rect-1">
          <img src="assets/hero_sub.png" alt="Elias in a hoodie" />
          </div>
          <div className="geometric-element dot-pattern-1">
          <img src="assets/Dots.png" alt="Elias in a hoodie" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote">
      <div className="quote-content">
        <div className="quote-mark left">"</div>
        <p className="quote-text">With great power comes great electricity bill</p>
        <div className="quote-mark right">"</div>
        <p className="quote-author">- Dr. Who</p>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/api/placeholder/300/200",
      tech: "HTML SCSS Python Flask",
      links: {
        live: true,
        cached: true
      },
      color: "#f97316"
    },
    {
      id: 2,
      title: "ProtectX",
      description: "Discord anti-crash bot",
      image: "/api/placeholder/300/200",
      tech: "React Express Discord.js Node.js HTML SCSS Python Flask",
      links: {
        live: true
      },
      color: "#84cc16"
    },
    {
      id: 3,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      image: "/api/placeholder/300/200",
      tech: "CSS Express Node.js",
      links: {
        live: true
      },
      color: "#a855f7"
    }
  ];

  return (
    <section className="projects" id="works">
      <div className="section-header">
        <h2><span className="accent">#</span>projects</h2>
        <a href="#" className="view-all">
          View all <span className="arrow">→</span>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image" style={{ backgroundColor: project.color }}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-tech">
              <p>{project.tech}</p>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.live && (
                  <a href="#" className="btn-outline">
                    Live <span className="double-arrow">⟿</span>
                  </a>
                )}
                {project.links.cached && (
                  <a href="#" className="btn-outline">
                    Cached <span className="arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <div className="section-header">
        <h2><span className="accent">#</span>skills</h2>
      </div>

      <div className="skills-content">
        <div className="geometric-elements">
          <div className="dot-pattern-2"></div>
          <div className="square-element"></div>
          <div className="dot-pattern-3"></div>
          <div className="square-element-2"></div>
          <div className="rect-element"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>TypeScript Lua</li>
              <li>Python JavaScript</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>SQLite PostgreSQL</li>
              <li>Mongo</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>VSCode Neovim Linux</li>
              <li>Figma XFCE Arch</li>
              <li>Git Font Awesome</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Other</h3>
            <ul>
              <li>HTML CSS EJS SCSS</li>
              <li>REST Jinja</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>React Vue</li>
              <li>Discord.js</li>
              <li>Flask Express.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="section-header">
        <h2><span className="accent">#</span>about-me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>Hello, I'm Elias!</p>
          <p>
            I'm a self-taught front-end developer based in Kyiv,
            Ukraine. I can develop responsive websites from
            scratch and raise them into modern user-friendly web
            experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a
            websites has been my passion for over a year. I have
            been helping various clients to establish their
            presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="btn-outline">
            Read more <span className="arrow">→</span>
          </button>
        </div>
        <div className="about-image">
          <img src="/api/placeholder/400/500" alt="Elias profile" />
          <div className="dot-pattern-4"></div>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="section-header">
        <h2><span className="accent">#</span>contacts</h2>
      </div>

      <div className="contacts-content">
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
            <p>Elias#9359</p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p>elias@elias.me</p>
          </div>
        </div>
      </div>
      
      <div className="dot-pattern-5"></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <i className="fa-solid fa-code"></i> Elias
          </div>
          <p>elias@elias-dev.ml</p>
          <p className="footer-title">Web designer and front-end developer</p>
        </div>

        <div className="footer-right">
          <h3>Media</h3>
          <div className="footer-links">
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2023. Made by Elias</p>
      </div>
    </footer>
  );
}

export default App;