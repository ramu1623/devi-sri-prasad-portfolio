import "./Contact.css";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <a href="mailto:ramudsp23@gmail.com" className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>ramudsp23@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/rsssndevisriprasaddude" target="_blank" rel="noreferrer" className="contact-item">
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn Profile</span>
            </a>

            <a href="https://github.com/ramu1623" target="_blank" rel="noreferrer" className="contact-item">
              <FaGithub className="contact-icon" />
              <span>GitHub Profile</span>
            </a>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 7995298946</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Rajamahendravaram, Andhra Pradesh</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;