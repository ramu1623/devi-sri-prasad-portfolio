import "./Hero.css";
import profile from "../../assets/OG_Profile.jpeg";
import resume from "../../assets/DeviSriPrasad_Resume_New.pdf";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>R S S S N Devi Sri Prasad Dude</h1> 

          <h2>CSE Student & MERN Stack Developer</h2>

          <p>
            I build clean, scalable, and high-performance full-stack web applications using React, Node.js, Express, and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>

            <a href={resume} download className="btn">
              Download Resume
            </a>

          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="profile" />
        </div>

      </div>
    </section>
  );
}

export default Hero;