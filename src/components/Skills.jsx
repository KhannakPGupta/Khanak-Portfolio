import React from 'react';
import { Code2, Layers, Cpu, Database, Terminal, Server } from 'lucide-react';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      items: [
        { name: "Python", icon: <FaPython size={24} />, frequency: "Daily", projects: "GeoImpact, The Last CEO" },
        { name: "JavaScript", icon: <FaJs size={24} />, frequency: "Daily", projects: "The Last CEO" },
        { name: "HTML/CSS", icon: <FaHtml5 size={24} />, frequency: "Frequent", projects: "Portfolio, The Last CEO" },
        { name: "C++", icon: <Code2 size={24} />, frequency: "Occasional", projects: "Academic Projects" },
        { name: "SQL", icon: <Database size={24} />, frequency: "Frequent", projects: "GeoImpact, Data Analysis" }
      ]
    },
    {
      title: "Frameworks & Tools",
      items: [
        { name: "React", icon: <FaReact size={24} />, frequency: "Daily", projects: "The Last CEO, Portfolio" },
        { name: "FastAPI", icon: <Server size={24} />, frequency: "Frequent", projects: "The Last CEO" },
        { name: "Node.js", icon: <FaNodeJs size={24} />, frequency: "Occasional", projects: "API Development" },
        { name: "Docker", icon: <FaDocker size={24} />, frequency: "Frequent", projects: "Deployment Pipelines" },
        { name: "Git", icon: <FaGitAlt size={24} />, frequency: "Daily", projects: "All Projects" }
      ]
    },
    {
      title: "Core Competencies",
      items: [
        { name: "Machine Learning", icon: <Cpu size={24} />, frequency: "Daily", projects: "GeoImpact, Predictive Models" },
        { name: "Data Structures", icon: <Layers size={24} />, frequency: "Frequent", projects: "Algorithms, Optimization" },
        { name: "API Design", icon: <Terminal size={24} />, frequency: "Frequent", projects: "The Last CEO Backend" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <h2 className="section-title"><span className="section-number">02.</span> Technical Skills</h2>
      
      <div className="skills-container">
        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="skill-group">
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="capsules-wrapper">
              {group.items.map((skill, idx) => (
                <div key={idx} className="skill-capsule glass-panel">
                  <div className="capsule-icon">
                    {skill.icon}
                  </div>
                  <div className="capsule-content">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-meta">
                      <span className="skill-freq">{skill.frequency}</span>
                      <span className="skill-proj" title={skill.projects}>Projects: {skill.projects}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
