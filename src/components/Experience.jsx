import React, { useEffect, useRef } from 'react';
import { Briefcase, Trophy, Award, Building2, Brain, Sparkles, Users, TrendingUp } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Corporate Member",
      organization: "SRM Placfv's (Official Student Placement Team)",
      date: "Oct 2026 - Present",
      description: [
        "Facilitate corporate relations, recruiter outreach, and campus placement drive coordination under the SRMIST Career Center.",
        "Bridge communication between visiting industry recruiters and student candidates during recruitment cycles."
      ],
      icon: <Building2 size={20} />,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      type: "work",
      title: "Undergraduate Researcher (UROP)",
      organization: "Dept. of Computational Intelligence, SRMIST",
      date: "Sep 2026 - Present",
      description: [
        "Designing a secure, privacy-preserving, on-device AI & Federated Learning health companion under Dr. Vinston Raja R.",
        "Focused on real-time physiological stress monitoring and early health warnings during heat waves, floods, and high-AQI events."
      ],
      icon: <Brain size={20} />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      type: "work",
      title: "AI/ML Lead",
      promotion: "Promoted from AI/ML Member (Apr 2026 – Aug 2026)",
      organization: "SRM Insider Community",
      date: "Aug 2026 - Present",
      description: [
        "Lead the community's applied ML projects, directing end-to-end model building and evaluation across shared datasets.",
        "Organize regular AI/ML skill-building sessions and technical workshops to strengthen members' applied machine learning fundamentals."
      ],
      icon: <Sparkles size={20} />,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      type: "work",
      title: "Member",
      organization: "Rewriting The Code (RTC)",
      date: "Jul 2026 - Present",
      description: [
        "Selected for a premier global community of early-career women in technology.",
        "Participate in technical workshops, mentorship programs, and industry networking initiatives."
      ],
      icon: <Users size={20} />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      type: "work",
      title: "AI/ML Trainee & Volunteer",
      organization: "Team Envision",
      date: "Sep 2025 - Present",
      description: [
        "Build and train machine learning models supporting the team's ongoing applied AI/ML projects.",
        "Collaborate in structured AI/ML training sessions to develop production-ready modeling workflows."
      ],
      icon: <Briefcase size={20} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      type: "work",
      title: "Market Research Analyst",
      organization: "Finlatics",
      date: "Mar 2026 - May 2026",
      description: [
        "Analyzed startup case studies to define target markets, evaluate competitive landscapes, and model user demographics.",
        "Assessed market sizing and customer acquisition strategies to deliver data-backed insights for early-stage companies."
      ],
      icon: <Briefcase size={20} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      type: "hackathon",
      title: "Best Project & Best Team Lead",
      organization: "AI/ML Domain & Club Competitions",
      date: "Aug 2025 - Present",
      description: [
        "Won 'Best Project' for The Last CEO; individually awarded 'Best Team Lead' and '2nd Best Performer' across 30+ participants.",
        "Maintained Rank #1 across all competition phases in the AI/ML domain."
      ],
      icon: <Trophy size={20} />,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      type: "leadership",
      title: "Head, Shri Paryavaran (Environment) Club",
      organization: "The Shriram Millennium School",
      date: "Mar 2022 - Mar 2024",
      description: [
        "Elected Head for two consecutive years; youngest speaker at an ICSE panel on sustainability in schools.",
        "Partnered with Saahas NGO to install the campus's first e-waste bin and built a recycled-material butterfly garden with Swechha Organization."
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
                {exp.promotion && (
                  <div className="timeline-promotion">
                    <TrendingUp size={15} />
                    <span>{exp.promotion}</span>
                  </div>
                )}
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
