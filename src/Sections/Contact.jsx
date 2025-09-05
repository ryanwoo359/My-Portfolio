import { motion } from "framer-motion";
import "./Page.css";

const Contact = () => (
  <div id="contact" className="page contact-section">
    <motion.h2
      className="section-title"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      viewport={{ amount: 0.5 }}
    >
      Contact
    </motion.h2>
    <motion.p
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      viewport={{ amount: 0.5 }}
      style={{ fontSize: "1.2rem", marginBottom: "2rem" }}
    >
      Interested in working together or want to connect? Reach out via email or
      find me on social media!
    </motion.p>
    <div className="social-btns">
      <a
        className="github-btn"
        href="https://github.com/ryanwoo359"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="linkedin-btn"
        href="https://www.linkedin.com/in/ryan-woo-8a359a255/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "1rem" }}
      >
        LinkedIn
      </a>
      <a
        className="email-btn"
        href="mailto:your.email@example.com"
        style={{ marginLeft: "1rem" }}
      >
        Email
      </a>
    </div>
  </div>
);

export default Contact;
