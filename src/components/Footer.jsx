import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/KhannakPGupta" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:khanakgupta124@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        <p className="copyright">
          Designed & Built by <span className="highlight">Khanak Gupta</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
