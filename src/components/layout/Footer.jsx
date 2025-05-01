import React from "react";
import '../../styles/components/Footer.scss';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer-title">Contact Me</h2>
            <div className="footer-links">
                <a href="mailto:abdieljflores.dev@gmail.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="footer-icon" /> Email
                </a>
                <a href="https://www.linkedin.com/in/abdiel-jeft%C3%A9-flores-gutierrez-468208325/" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" /> LinkedIn
                </a>
                <a href="https://github.com/abdiel-code" className="footer-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="footer-icon" /> GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;