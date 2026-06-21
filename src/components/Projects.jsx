import React from 'react';
import { ExternalLink, Folder, Gamepad2, Map, Bike, GraduationCap, Play, Leaf, TerminalSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "The Last CEO",
      category: "AI Web App",
      icon: <Gamepad2 size={48} className="project-hero-icon" />,
      description: "An AI-powered business strategy simulation game driven by real-time XGBoost model predictions. Features a 3D environment, dynamic events, and 'glass box' AI explainability.",
      techStack: ["React", "FastAPI", "XGBoost", "SHAP"],
      stats: [
        { label: "Engine", value: "XGBoost" },
        { label: "Interface", value: "3D Env" }
      ],
      github: "https://github.com/KhannakPGupta/The-Last-CEO",
      demo: "#"
    },
    {
      title: "GeoImpact Risk Engine",
      category: "Machine Learning",
      icon: <Map size={48} className="project-hero-icon" />,
      description: "A comprehensive machine learning pipeline designed to predict and analyze geographic risk factors. Implements robust EDA and intricate dataset cleaning workflows.",
      techStack: ["Python", "Pandas", "Scikit-Learn"],
      stats: [
        { label: "Accuracy", value: "94%" },
        { label: "Pipeline", value: "End-to-End" }
      ],
      github: "https://github.com/KhannakPGupta/GeoImpact-Risk-Engine",
      demo: "#"
    },
    {
      title: "Bike Rental Analysis",
      category: "Data Science",
      icon: <Bike size={48} className="project-hero-icon" />,
      description: "Predictive modeling for bike rental demand based on environmental and seasonal settings. Leverages historical usage patterns for accurate forecasting.",
      techStack: ["Python", "Jupyter", "Matplotlib"],
      stats: [
        { label: "R² Score", value: "0.89" },
        { label: "Forecast", value: "Seasonal" }
      ],
      github: "https://github.com/KhannakPGupta/Bike-Rental-Analysis",
      demo: "#"
    },
    {
      title: "Placement Prediction",
      category: "Predictive Analytics",
      icon: <GraduationCap size={48} className="project-hero-icon" />,
      description: "Predictive analytics tool to forecast student placement outcomes based on academic and extracurricular metrics, providing actionable insights.",
      techStack: ["Python", "ML Algorithms", "Data Viz"],
      stats: [
        { label: "Target", value: "Students" },
        { label: "Metrics", value: "Academic" }
      ],
      github: "https://github.com/KhannakPGupta/Placement-Prediction-Model",
      demo: "#"
    },
    {
      title: "Green-Wash Verifier",
      category: "Climate-Tech App",
      icon: <Leaf size={48} className="project-hero-icon" />,
      description: "An interactive climate-tech web application that audits the carbon footprint of a product's entire supply chain to detect greenwashing using real-world logistics.",
      techStack: ["Python", "Streamlit", "Plotly", "NetworkX"],
      stats: [
        { label: "Emissions", value: "Audit" },
        { label: "Logistics", value: "Modeling" }
      ],
      github: "https://github.com/KhannakPGupta/Green-Wash-Verifier",
      demo: "#"
    },
    {
      title: "Auto Project Generator",
      category: "CLI Tool",
      icon: <TerminalSquare size={48} className="project-hero-icon" />,
      description: "A lightweight, fully interactive pure Python CLI tool to instantly scaffold production-ready project architectures without wasting time on boilerplate.",
      techStack: ["Python", "CLI", "JSON"],
      stats: [
        { label: "Setup Time", value: "Instant" },
        { label: "Dependencies", value: "Zero" }
      ],
      github: "https://github.com/KhannakPGupta/Automated-Project-Structure-Generator",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title"><span className="section-number">03.</span> Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card tilt-card">
            <div className="project-glow"></div>
            
            <div className="project-header">
              {project.icon}
              <span className="project-category">{project.category}</span>
            </div>
            
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-stats">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <ul className="project-tech-list">
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>

              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn outline-btn">
                  <FaGithub size={18} /> Code
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn primary-btn">
                    <Play size={18} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
