import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section section">
      <h2 className="section-title"><span className="section-number">05.</span> Education</h2>
      
      <div className="education-card glass-panel">
        <div className="education-glow"></div>
        
        <div className="edu-content">
          <div className="edu-header">
            <div className="edu-icon-wrapper">
              <GraduationCap size={32} />
            </div>
            <div className="edu-title-group">
              <h3 className="edu-degree">Bachelor of Technology - BTech, Computer Science</h3>
              <h4 className="edu-university">SRMIST, Kattankulathur</h4>
            </div>
          </div>
          
          <div className="edu-details">
            <div className="edu-detail-item">
              <Calendar size={18} className="edu-detail-icon" />
              <span>Aug 2025 — May 2029</span>
            </div>
            <div className="edu-detail-item">
              <MapPin size={18} className="edu-detail-icon" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
        
        <div className="edu-stats">
          <div className="grade-badge">
            <Award size={20} className="grade-icon" />
            <div className="grade-info">
              <span className="grade-label">Current CGPA</span>
              <span className="grade-value">9.88</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
