import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <h1 className="about-title">About Me</h1>

      <div className="about-container">
        
        {/* LEFT */}
        <div className="about-left">
          <h2>Hello! I'm Devi Sri Prasad</h2>

          <p>
            I'm a passionate Full Stack Developer with a strong foundation in
            computer science. I specialize in building scalable web applications
            using the MERN stack.
          </p>

          <p>
            I enjoy solving real-world problems and building user-friendly,
            high-performance applications.
          </p>

          <div className="about-points">
            <div>✅ Frontend Development</div>
            <div>✅ Backend Development</div>
            <div>✅ Database Management</div>
            <div>✅ Version Control</div>
            <div>✅ Problem Solving</div>
            <div>✅ Team Collaboration</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="card">
            <h3>2027</h3>
            <p>Graduate Year</p>
          </div>

          <div className="card">
            <h3>7.81</h3>
            <p>CGPA</p>
          </div>

          <div className="card">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;