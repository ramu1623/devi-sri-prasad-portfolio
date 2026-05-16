import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p>© {new Date().getFullYear()} Devi Sri Prasad. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://github.com/ramu1623"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rsssndevisriprasaddude"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:ramudsp23@gmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;