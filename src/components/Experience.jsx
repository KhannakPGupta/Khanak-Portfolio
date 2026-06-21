import React, { useEffect, useRef } from 'react';
import { Briefcase, Trophy, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Open Source Developer",
      organization: "GirlScript Summer of Code",
      date: "May 2026 - Present",
      description: [
        "GSSoC Contributor.",
        "Skill: Open-Source Development."
      ],
      icon: <Briefcase size={20} />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      type: "work",
      title: "AI/ML Member",
      organization: "SRM Insider Community",
      date: "Apr 2026 - Present",
      description: [
        "Chennai, Tamil Nadu, India.",
        "Skill: Artificial Intelligence (AI) and Machine Learning."
      ],
      icon: <Briefcase size={20} />,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      type: "work",
      title: "Trainee / AI ML Volunteer",
      organization: "Team Envision",
      date: "Sep 2025 - Present",
      description: [
        "Chennai, Tamil Nadu, India.",
        "Skill: Machine Learning, Artificial Intelligence (AI)."
      ],
      icon: <Briefcase size={20} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      type: "work",
      title: "Market Research Analyst",
      organization: "Finlatics",
      date: "March 2026 - May 2026",
      description: [
        "Market Research Analyst."
      ],
      icon: <Briefcase size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      type: "hackathon",
      title: "Hackathon Participant & Winner",
      organization: "Various",
      date: "August 2025 - Present",
      description: [
        "Participated and won in competitive hackathons."
      ],
      icon: <Trophy size={24} />,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      type: "leadership",
      title: "Environment Head",
      organization: "School",
      date: "2022 - 2024",
      description: [
        "Served as Environment Head in School."
      ],
      icon: <Award size={20} />,
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section section">
      <h2 className="section-title"><span className="section-number">04.</span> Experience</h2>
      
      <div className="timeline-container">
        <div className="timeline-line-central"></div>
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            ref={el => timelineRefs.current[index] = el}
          >
            <div className="timeline-icon-wrapper">
              <div className={`timeline-icon-badge ${exp.type}`}>
                {exp.icon}
              </div>
            </div>
            
            <div className="timeline-content glass-panel">
              {exp.image && (
                <div className="timeline-image-container">
                  <img src={exp.image} alt={exp.title} className="timeline-image" />
                </div>
              )}
              <span className="timeline-date">{exp.date}</span>
              <div className="timeline-info">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-org">{exp.organization}</h4>
                <ul className="timeline-desc">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
