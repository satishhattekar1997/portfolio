import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="brand">Satish Hattekar</div>
          <div className="nav-group">
            <a href="#home" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#education" className="nav-item">Education</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
          <a className="btn" href="/resume.pdf" download="Satish_Hattekar_Resume.pdf">
            Download Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Satish Hattekar</h1>
            <h2>DATA ENGINEER</h2>
            <p>
              Results-driven Data Engineer with 3+ years of experience in designing, developing, and optimizing data pipelines and cloud solutions using Google Cloud Platform (GCP), BigQuery, SQL, PL/SQL, shell scripting, and Python.
            </p>
            <div className="hero-location">Pune, India</div>
            <div className="hero-cta">
              <a className="btn" href="#contact">Contact Me</a>
              <a className="btn outline" href="#projects">View Projects</a>
            </div>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/satish-hattekar-59b452242" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:satishpatil8397@gmail.com">Email</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.jpg" alt="Satish Hattekar" />
          </div>
        </div>
        <div className="scroll-down">
          <a href="#about">Scroll Down ↓</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p className="section-subtitle">
            I'm a passionate Data Engineer with 3+ years of experience crafting exceptional data solutions that are both efficient and scalable.
          </p>
          <div className="about-content">
            <div className="about-text">
              <p>
                My expertise lies in building scalable, secure data solutions using modern cloud technologies like Google Cloud Platform (GCP), BigQuery, and various ETL tools. I specialize in creating optimized data pipelines that deliver outstanding performance and reliability.
              </p>
              <p>
                Throughout my career, I've collaborated with cross-functional teams to develop innovative solutions for various industries including banking and financial services. Currently working at HSBC on regulatory reporting and compliance systems.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <span>3+</span>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <span>3+</span>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <span>15+</span>
                <p>Technologies</p>
              </div>
              <div className="stat">
                <span>1</span>
                <p>Companies</p>
              </div>
            </div>
          </div>
          <div className="about-cta">
            <a className="btn" href="#skills">View My Skills</a>
            <a className="btn outline" href="#contact">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <p className="section-subtitle">
            My technical expertise and tools I use to bring ideas to life
          </p>
          <div className="skills-content">
            <div className="skills-main">
              <div className="skill-category">
                <h3>Cloud & Data Engineering</h3>
                <div className="skill-item">
                  <span>Cloud Storage</span>
                  <span className="skill-percent">90%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>BigQuery</span>
                  <span className="skill-percent">90%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>DBT</span>
                  <span className="skill-percent">85%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Airflow</span>
                  <span className="skill-percent">80%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>PySpark</span>
                  <span className="skill-percent">80%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Dataproc</span>
                  <span className="skill-percent">75%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>SQL</span>
                  <span className="skill-percent">95%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>DMS</span>
                  <span className="skill-percent">80%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Development & Tools</h3>
                <div className="skill-item">
                  <span>Python</span>
                  <span className="skill-percent">85%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Terraform (IaC)</span>
                  <span className="skill-percent">80%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Shell Scripting</span>
                  <span className="skill-percent">85%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Git / Jenkins / CI/CD</span>
                  <span className="skill-percent">80%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Control-M</span>
                  <span className="skill-percent">75%</span>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-icons">
              <span>GCP</span>
              <span>BigQuery</span>
              <span>SQL</span>
              <span>Python</span>
              <span>Terraform</span>
              <span>Git</span>
              <span>Jenkins</span>
              <span>Java</span>
              <span>Oracle</span>
              <span>MySQL</span>
              <span>Jira</span>
              <span>ServiceNow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and the technologies I've implemented
          </p>
          <div className="projects-grid">
            <div className="project-card">
              <h3>RCT (Reporting & Consolidation Toolset)</h3>
              <p>Part of the Regulatory Reporting team working on the RCT system, which automates reporting for HSBC's global sites. RCT supports regulatory reporting (e.g., CoREP by EBA) and data provisioning for downstream systems, meeting PRA, ECB and global regulatory requirements. The team also provides backend development and support for Group Finance (FCD).</p>
              <div className="tech-stack">
                <span>PLSQL</span>
                <span>Python</span>
                <span>Shell scripting</span>
                <span>Control-M</span>
                <span>Git</span>
                <span>Jenkins</span>
              </div>
            </div>
            <div className="project-card">
              <h3>RARE (RWA Analytics and Reporting Engine)</h3>
              <p>Working on the RARE project, a cloud-based system on Google Cloud designed to implement Basel Committee's B3.1 regulations by performing complex calculations and customizations on upstream data before transferring it to the RCT system for regulatory reporting.</p>
              <div className="tech-stack">
                <span>GCP</span>
                <span>Cloud Storage</span>
                <span>SQL</span>
                <span>EMF workflow</span>
                <span>Python</span>
                <span>BigQuery</span>
                <span>DBT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2>Experience</h2>
          <p className="section-subtitle">
            My professional journey as a data engineer
          </p>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-content">
                <h3>Sr. Software Engineer</h3>
                <div className="company">HSBC Software Development (India) Pvt Ltd, Pune</div>
                <div className="date">Dec 2022 - Present</div>
                <p>Working in Regulatory Reporting team on RCT (Reporting & Consolidation Toolset) for global regulatory compliance (PRA, ECB, EBA). Building RARE (RWA Analytics and Reporting Engine) on Google Cloud for Basel B3.1 calculations and downstream regulatory feeds.</p>
                <div className="tech-stack">
                  <span>GCP</span>
                  <span>BigQuery</span>
                  <span>Cloud Storage</span>
                  <span>Cloud Functions</span>
                  <span>SQL/PLSQL</span>
                  <span>Python</span>
                  <span>Terraform</span>
                  <span>Git</span>
                  <span>Jenkins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements">
            <h3>Awards/Achievements</h3>
            <ul className="achievement-list">
              <li>Received Pat on The Back Award and 2 Circle of Excellence Awards in current organization.</li>
              <li>Recognition for managing code deployment (git versioning, Jenkins, Terraform (IaC)) in addition to core project responsibilities.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2>Education</h2>
          <p className="section-subtitle">
            My academic background and qualifications
          </p>
          <div className="education-grid">
            <div className="education-item">
              <h3>PG Diploma in Advanced Computing (PGDAC)</h3>
              <div className="institution">CDAC, VITA Mumbai</div>
              <div className="date">Feb 2022 - Nov 2022</div>
              <p>Completed post-graduate diploma with focus on advanced computing, data engineering, and software development. Gained expertise in database design, cloud technologies, and full-stack development.</p>
              <div className="subjects">
                <span>Data Engineering</span>
                <span>Cloud Computing</span>
                <span>Database Design</span>
                <span>Software Engineering</span>
              </div>
            </div>
            <div className="education-item">
              <h3>Bachelor of Engineering (B.E.)</h3>
              <div className="institution">SRTM University Nanded</div>
              <div className="date">2015 - 2019</div>
              <p>Completed undergraduate engineering with distinction. Developed strong foundation in computer science, programming, and mathematics. Active participation in technical competitions and projects.</p>
              <div className="subjects">
                <span>Computer Science</span>
                <span>Data Structures</span>
                <span>Algorithms</span>
                <span>Database Systems</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <p className="section-subtitle">
            Let's discuss your project and explore how we can work together
          </p>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:satishpatil8397@gmail.com">satishpatil8397@gmail.com</a>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <a href="tel:+918999702353">+91 8999702353</a>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <p>Pune, India</p>
              </div>
              <div className="contact-item">
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              </div>
              <div className="social-links">
                <h4>Connect With Me</h4>
                <a href="https://www.linkedin.com/in/satish-hattekar-59b452242" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:satishpatil8397@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <h3>Satish Hattekar</h3>
              <p>Data Engineer</p>
              <p>Passionate about creating exceptional data solutions and cloud architectures using modern technologies. Let's collaborate to bring your data ideas to life.</p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/satish-hattekar-59b452242" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:satishpatil8397@gmail.com">Email</a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Satish Hattekar. All rights reserved.</p>
            <p>Built with React & CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
