import React from 'react';
import { Users, Lightbulb, RefreshCw, Mic } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title"><span className="section-number">01.</span> About Me</h2>
      
      <div className="about-grid">
        <div className="about-card glass-panel">
          <div className="about-glow"></div>
          <div className="about-content-inner">
            <p>
              I'm Khanak Gupta, a <strong>second-year Computer Science Engineering student at SRM Institute of Science and Technology</strong> with a passion for Artificial Intelligence, Machine Learning, and building data-driven solutions.
            </p>
            <p>
              I enjoy turning complex problems into impactful, user-centric products by combining analytical thinking with creativity. Constantly driven by curiosity, I love exploring new technologies and working on projects that create meaningful real-world impact.
            </p>
            <p>
              My goal is to build innovative, accessible, and scalable AI solutions that make a positive difference in society.
            </p>
          </div>
        </div>
        
        <div className="about-card soft-skills-card glass-panel">
          <div className="about-glow"></div>
          <div className="about-content-inner">
            <h3 className="card-heading">Core Strengths</h3>
            <p className="card-subheading">
              Beyond the code, these are the fundamental skills I bring to every team and project.
            </p>
            
            <div className="skills-list">
              <div className="skill-row">
                <div className="skill-icon-box cyan-box">
                  <Users size={20} />
                </div>
                <div className="skill-info">
                  <h4>Leadership</h4>
                  <span>Guiding technical initiatives & teams</span>
                </div>
              </div>
              
              <div className="skill-row">
                <div className="skill-icon-box purple-box">
                  <Lightbulb size={20} />
                </div>
                <div className="skill-info">
                  <h4>Strategic Problem Solving</h4>
                  <span>Translating complex issues into solutions</span>
                </div>
              </div>
              
              <div className="skill-row">
                <div className="skill-icon-box pink-box">
                  <RefreshCw size={20} />
                </div>
                <div className="skill-info">
                  <h4>Adaptability</h4>
                  <span>Thriving in fast-paced, dynamic tech stacks</span>
                </div>
              </div>
              
              <div className="skill-row">
                <div className="skill-icon-box cyan-box">
                  <Mic size={20} />
                </div>
                <div className="skill-info">
                  <h4>Public Speaking</h4>
                  <span>Communicating ideas with clarity and impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
