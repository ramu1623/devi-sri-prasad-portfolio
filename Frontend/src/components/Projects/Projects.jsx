import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">

          {/* Digital Gatepass */}
          <div className="project-card">
            <h3>Digital Gatepass System</h3>
            <p>
              Full-stack MERN application with role-based access (Student, Coordinator, HOD) and approval workflow.
            </p>

            <div className="project-links">
              <a
                href="https://digital-gatepass-system.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live
              </a>

              <a
                href="https://github.com/ramu1623/digital-gatepass-system"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* usePopcorn */}
          <div className="project-card">
            <h3>usePopcorn App</h3>
            <p>
              Movie search and watchlist app using OMDb API with persistent data storage.
            </p>

            <div className="project-links">
              <a
                href="https://dspsusepopcorn.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live
              </a>

              <a
                href="https://github.com/ramu1623/usePopcorn"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Bankist */}
          <div className="project-card">
            <h3>Bankist App</h3>
            <p>
              Frontend Banking simulation app with login, transactions, loan requests, and transfer features.
            </p>

            <div className="project-links">
              <a
                href="https://ramu1623.github.io/Bankist/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live
              </a>

              <a
                href="https://github.com/ramu1623/Bankist"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;