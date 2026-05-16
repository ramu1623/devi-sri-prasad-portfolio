import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        <h2>Education</h2>

        <div className="education-grid">

          {/* B.Tech */}
          <div className="edu-card">
            <h3>B.Tech - CSE</h3>
            <p>Sri Vasavi Engineering College</p>
            <span>2023 – Present</span>
            <div className="edu-score">7.81 CGPA</div>
          </div>

          {/* Intermediate */}
          <div className="edu-card">
            <h3>Intermediate (MPC)</h3>
            <p>Vikas Junior College</p>
            <span>2021 – 2023</span>
            <div className="edu-score">94.3%</div>
          </div>

          {/* 10th */}
          <div className="edu-card">
            <h3>SSC</h3>
            <p>Smt Annapurna Vidya Niketan</p>
            <span>2020 – 2021</span>
            <div className="edu-score">84%</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;