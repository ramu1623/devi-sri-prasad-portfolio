import "./Navbar.css";
import { FaLaptopCode } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo-container">
          <FaLaptopCode className="title-logo"/>
          <h2 className="logo">Devi Sri Prasad</h2>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar;