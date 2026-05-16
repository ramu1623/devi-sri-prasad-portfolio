import "./Skills.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import { SiExpress, SiVercel, SiRender, SiMongodb } from "react-icons/si";

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <h2>Skills</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <FaHtml5 className="skill-icon" color="#e34c26" />
                        <h3>HTML</h3>
                    </div>

                    <div className="skill-card">
                        <FaCss3Alt className="skill-icon" color="#264de4" />
                        <h3>CSS</h3>
                    </div>

                    <div className="skill-card">
                        <FaJs className="skill-icon" color="#f7df1e" />
                        <h3>JavaScript</h3>
                    </div>

                    <div className="skill-card">
                        <FaReact className="skill-icon" color="#61dafb" />
                        <h3>React.js</h3>
                    </div>

                    <div className="skill-card">
                        <FaNodeJs className="skill-icon" color="#68a063" />
                        <h3>Node.js</h3>
                    </div>

                    <div className="skill-card">
                        <SiExpress className="skill-icon" color="#000000" />
                        <h3>Express.js</h3>
                    </div>

                    <div className="skill-card">
                        <SiMongodb className="skill-icon" color="#47a248" />
                        <h3>MongoDB</h3>
                    </div>

                    <div className="skill-card">
                        <FaJava className="skill-icon" color="#f89820" />
                        <h3>Java</h3>
                    </div>

                    <div className="skill-card">
                        <FaGitAlt className="skill-icon" color="#f34f29" />
                        <h3>Git</h3>
                    </div>
                    <div className="skill-card">
                        <FaGithub className="skill-icon" color="#171515" />
                        <h3>GitHub</h3>
                    </div>

                    <div className="skill-card">
                        <SiVercel className="skill-icon" color="#000000" />
                        <h3>Vercel</h3>
                    </div>

                    <div className="skill-card">
                        <SiRender className="skill-icon" color="#46E3B7" />
                        <h3>Render</h3>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Skills;
