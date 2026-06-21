import React, { useEffect } from 'react';
import { ArrowRight, Download, Brain, Database, Code, Terminal, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth - e.pageX * 2) / 250;
      const y = (window.innerHeight - e.pageY * 2) / 250;
      document.documentElement.style.setProperty('--mouseX', `${x}deg`);
      document.documentElement.style.setProperty('--mouseY', `${-y}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero-section section">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Khanak Gupta</h1>
        <h2 className="hero-title gradient-text">I build intelligent systems.</h2>
        <p className="hero-description">
          I'm an AI/ML Engineer and CS Student passionate about creating immersive web experiences, 
          optimizing machine learning pipelines, and building scalable applications.
        </p>
        
        <div className="hero-quick-facts">
          <div className="fact-chip">
            <GraduationCap size={16} className="fact-icon" />
            <span>CSE @ SRM IST</span>
          </div>
          <div className="fact-chip">
            <Sparkles size={16} className="fact-icon" />
            <span>Currently Learning GenAI</span>
          </div>
          <div className="fact-chip">
            <Code2 size={16} className="fact-icon" />
            <span>Open to Internships</span>
          </div>
        </div>
        <div className="hero-cta-group">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="https://drive.google.com/file/d/1yyS4O8R7dS9Q7ln67SETjYIFj924pctO/view?usp=sharing" className="btn btn-outline" target="_blank" rel="noreferrer">
            Download Resume <Download size={18} />
          </a>
          <div className="hero-socials">
            <a href="https://github.com/KhannakPGupta" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/khannakpgupta" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-graphics animate-fade-in">
        <div className="tech-cloud">
          <div className="tech-chip chip-1">
            <FaPython size={24} />
            <span>Python</span>
          </div>
          <div className="tech-chip chip-2">
            <Brain size={24} />
            <span>Machine Learning</span>
          </div>
          <div className="tech-chip chip-3">
            <FaReact size={24} />
            <span>React</span>
          </div>
          <div className="tech-chip chip-4">
            <Database size={24} />
            <span>Data Science</span>
          </div>
          <div className="tech-chip chip-5">
            <FaNodeJs size={24} />
            <span>Node.js</span>
          </div>
          <div className="tech-chip chip-6">
            <Terminal size={24} />
            <span>FastAPI</span>
          </div>
          
          <div className="profile-center">
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
            <div className="center-glow"></div>
            <img src="/profile.png" alt="Khanak Gupta" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
