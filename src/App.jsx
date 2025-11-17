import "./App.css";

function App() {
  const projects = [
    {
      title: "LP-Cost-Optimization",
      role: "Linear Programming • Operations Optimization",
      desc: "Linear programming model to minimize logistics and sourcing costs under capacity and demand constraints. Includes a Streamlit dashboard.",
      tags: ["Python", "PuLP", "Optimization", "Streamlit"],
      link: "https://github.com/Kedumetsevati/LP-Cost-Optimization",
    },
    {
      title: "Bayesian Retail Forecasting",
      role: "Forecasting • Bayesian Modeling",
      desc: "Bayesian hierarchical model to forecast retail demand with uncertainty intervals for better inventory decisions.",
      tags: ["Python", "PyMC", "Forecasting"],
      link: "https://github.com/Kedumetsevati/Bayesian-Retail-Forecasting",
    },
    {
      title: "Customer Churn Prediction",
      role: "Machine Learning • Classification",
      desc: "End-to-end churn model with data prep, feature engineering, model training, metrics and a Streamlit app for stakeholders.",
      tags: ["Python", "scikit-learn", "ML", "Streamlit"],
      link: "#",
    },
    {
      title: "AWS ETL – NYC Taxi Pipeline",
      role: "Cloud • ETL Pipeline",
      desc: "Analytics-ready ETL pipeline using AWS S3, Glue and Athena on NYC Taxi data for BI and exploration.",
      tags: ["AWS", "Glue", "Athena", "ETL"],
      link: "#",
    },
  ];

  const skills = {
    tech: [
      "Python (pandas, numpy, scikit-learn)",
      "SQL (joins, CTEs, window functions)",
      "Forecasting & Time-series",
      "Bayesian Modeling",
      "Linear Programming / Optimization",
      "Power BI & Excel (XLOOKUP, FILTER)",
      "AWS (S3, Glue, Athena)",
    ],
    soft: [
      "Problem Solving",
      "Clear Communication",
      "Teaching & Mentoring",
      "Collaboration",
      "Experimentation & Iteration",
    ],
  };

  const timeline = [
    {
      title: "Data Scientist / Data Analyst (transition)",
      org: "Portfolio & Applied Projects",
      when: "2023 – Present",
      desc: "Building end-to-end analytics and ML projects focused on retail, forecasting, optimization and cloud.",
    },
    {
      title: "Postdoctoral Researcher",
      org: "University of Alberta",
      when: "2022 – 2024",
      desc: "Research in harmonic analysis and hypergroup joins, teaching and advanced problem-solving.",
    },
    {
      title: "PhD in Mathematics",
      org: "Shanghai Jiao Tong University",
      when: "2017 – 2021",
      desc: "New results on hypergroup joins and functional equations. Deep theoretical training.",
    },
  ];

  return (
    <div className="app-root">
      {/* TOP GRADIENT HEADER */}
      <div className="app-root">

  {/* TOP GRADIENT HEADER */}

  {/* PERSONAL HEADER */}
  <div className="personal-header">
    <h1>Hi, I'm Kedumetse Nadour Vati 👋</h1>
    <h2>Data Analyst & Data Scientist (PhD in Mathematics)</h2>
    <p>
      I specialize in building analytical dashboards, forecasting models,
      and automated data solutions that solve real business problems.
    </p>

    <p>
      🔗 <a href="https://github.com/Kedumetsevati" target="_blank" rel="noreferrer">GitHub</a>
      {" | "}
      🔗 <a href="https://www.linkedin.com/in/kedumetsevati1991/" target="_blank" rel="noreferrer">LinkedIn</a>
      {" | "}
      📧 <a href="mailto:drkedumvati@gmail.com">drkedumvati@gmail.com</a>
    </p>
  </div>

  <div className="hero-wrapper">
    <header className="navbar">

      <div className="hero-wrapper">
        <header className="navbar">
          <div className="navbar-left">
            <span className="brand">
              Kedumetse <span className="brand-highlight">Nadour Vati</span>
            </span>
          </div>
          <nav className="navbar-right">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero" id="home">
          <div className="hero-main">
            <p className="hero-eyebrow">Data Science & Analytics Portfolio</p>
            <h1>Turning mathematics and data into business-ready insights.</h1>
            <p className="hero-text">
              I&apos;m a Data Scientist / Analyst with a PhD in Mathematics,
              focused on forecasting, optimization, customer behavior and
              analytics for operations and retail.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">PhD</div>
                <div className="stat-label">Mathematics</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Analytics Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Retail</div>
                <div className="stat-label">Operations Focus</div>
              </div>
            </div>
          </div>

          <div className="hero-side-card">
            <h2>What I like to work on</h2>
            <ul>
              <li>• Forecasting & demand planning for retail.</li>
              <li>• Optimization of operations and costs.</li>
              <li>• Customer behavior & churn modeling.</li>
              <li>• Dashboards that tell a clear story.</li>
            </ul>
            <div className="hero-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>ML</span>
              <span>Optimization</span>
              <span>AWS</span>
              <span>Power BI</span>
            </div>
          </div>
        </section>
      </div>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-header">
            <h2>Projects</h2>
            <p className="section-subtitle">
              Selected projects that show how I combine mathematics, data and
              engineering to solve real problems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-header">
            <h2>Skills</h2>
            <p className="section-subtitle">
              A mix of strong technical foundations and practical, business-facing
              analytics.
            </p>
          </div>

          <div className="skills-columns">
            <div className="skills-column">
              <h3>Technical</h3>
              <ul>
                {skills.tech.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <h3>Professional</h3>
              <ul>
                {skills.soft.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE / EDUCATION */}
        <section className="section" id="experience">
          <div className="section-header">
            <h2>Experience & Education</h2>
            <p className="section-subtitle">
              From pure mathematics research to applied data science and analytics.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="contact-card">
            <h2>Let&apos;s Talk</h2>
            <p>
              I&apos;m open to Data Analyst / Data Scientist roles, especially in
              retail, operations, forecasting, and quality or optimization.
            </p>

            <div className="contact-buttons">
              <a href="mailto:drkedumvati@gmail.com" className="btn btn-primary">
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/kedumetsevati1991/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Kedumetsevati"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Kedumetse Nadour Vati — Data Science Portfolio
      </footer>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
      </div>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>
      )}
    </article>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{item.title}</h3>
          <span className="timeline-when">{item.when}</span>
        </div>
        <p className="timeline-org">{item.org}</p>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default App;
