import React from 'react';
import {
  Gamepad2,
  Map,
  Play,
  Leaf,
  Sparkles,
  HeartPulse,
  ScanLine,
  Film,
  Bot
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "The Last CEO",
      category: "AI Strategy Simulator",
      icon: <Gamepad2 size={48} className="project-hero-icon" />,
      description: "Award-winning AI business-strategy simulator where players lead a company through 2035. Powered by a live XGBoost engine trained on ~200k rows with 8 engineered features and 'glass-box' SHAP explainability.",
      techStack: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "React", "TypeScript", "SHAP"],
      stats: [
        { label: "Productivity R²", value: "0.96" },
        { label: "Recognition", value: "Best Project" }
      ],
      github: "https://github.com/KhannakPGupta/The-Last-CEO",
      demo: "https://the-last-ceo-eight.vercel.app"
    },
    {
      title: "GeoImpact Risk Engine",
      category: "Geopolitical ML",
      icon: <Map size={48} className="project-hero-icon" />,
      description: "Interactive ML dashboard simulating how geopolitical energy shocks cascade through APAC supply chains, forecasting inflation, GDP, and import-cost impact with tuned XGBoost regressors, K-Means vulnerability tiers, and SHAP.",
      techStack: ["Python", "XGBoost", "Pandas", "Streamlit", "Plotly", "SHAP", "K-Means"],
      stats: [
        { label: "Inflation R²", value: "0.97" },
        { label: "Dataset", value: "2,160 Scenarios" }
      ],
      github: "https://github.com/KhannakPGupta/GeoImpact-Risk-Engine",
      demo: "https://geoimpact.streamlit.app/"
    },
    {
      title: "FridgeMind",
      category: "Multimodal AI",
      icon: <Sparkles size={48} className="project-hero-icon" />,
      description: "Zero-waste culinary AI that turns a single photo of a messy fridge into chef-grade recipes in ~3 seconds using Gemini 2.0 Vision, sub-millisecond SQLite FTS5 search, smart chemistry swaps, and a 4-signal hybrid ML ranking engine.",
      techStack: ["Python", "FastAPI", "React 19", "Gemini 2.0 Vision", "SQLite FTS5", "Hybrid ML"],
      stats: [
        { label: "End-to-End", value: "~3 Seconds" },
        { label: "Ranker", value: "4-Signal ML" }
      ],
      github: "https://github.com/KhannakPGupta/FridgeMind",
      demo: "#"
    },
    {
      title: "Personal Health Companion",
      category: "Federated & Edge AI",
      icon: <HeartPulse size={48} className="project-hero-icon" />,
      description: "Privacy-preserving on-device AI and Federated Learning system (UROP research) that detects physical stress and strain from smartwatch signals fused with local Air Quality Index (AQI) for early health warnings.",
      techStack: ["Python", "PyTorch", "Federated Learning", "TinyML", "Sensor Fusion"],
      stats: [
        { label: "Architecture", value: "Federated AI" },
        { label: "Inference", value: "On-Device Edge" }
      ],
      github: "https://github.com/KhannakPGupta/Personal-Health-Companion-UROP",
      demo: "#"
    },
    {
      title: "CardSnap AI",
      category: "Computer Vision & OCR",
      icon: <ScanLine size={48} className="project-hero-icon" />,
      description: "Full-stack AI scanner that converts business-card photos into structured contacts in ~5 seconds using OpenCV preprocessing, PaddleOCR, heuristic parsing, human-in-the-loop review, and fuzzy deduplication synced to Excel & Google Sheets.",
      techStack: ["Python", "FastAPI", "React", "OpenCV", "PaddleOCR", "Google Sheets API"],
      stats: [
        { label: "Scan Speed", value: "~5 Seconds" },
        { label: "Deduplication", value: "0.85+ Fuzzy" }
      ],
      github: "https://github.com/KhannakPGupta/CardSnap",
      demo: "https://cardsnap-delta.vercel.app"
    },
    {
      title: "Movie Recommendation System",
      category: "NLP & Recommenders",
      icon: <Film size={48} className="project-hero-icon" />,
      description: "Hybrid movie recommendation platform combining local TF-IDF content-based filtering and cosine similarity across 45,000+ movies with real-time TMDB API genre discovery.",
      techStack: ["Python", "FastAPI", "Streamlit", "NLP", "TF-IDF", "TMDB API"],
      stats: [
        { label: "Catalog Size", value: "45k+ Movies" },
        { label: "Engine", value: "Hybrid TF-IDF" }
      ],
      github: "https://github.com/KhannakPGupta/Movie-Recommendation-System",
      demo: "https://movies-recommendation-khannakpgupta.streamlit.app/"
    },
    {
      title: "SRM Insider AI",
      category: "RAG & Local LLMs",
      icon: <Bot size={48} className="project-hero-icon" />,
      description: "Private, local RAG-powered AI assistant built for the SRM Insider community. Uses Gemma-2B (via Ollama) and ChromaDB vector search to query campus PDFs, scraped web data, and social feeds.",
      techStack: ["Python", "RAG", "Ollama (Gemma-2B)", "ChromaDB", "Streamlit"],
      stats: [
        { label: "Local LLM", value: "Gemma-2B" },
        { label: "Vector DB", value: "ChromaDB" }
      ],
      github: "https://github.com/KhannakPGupta/SRM-Insider-AI",
      demo: "https://srm-insider-ai.streamlit.app/"
    },
    {
      title: "Green-Wash Verifier",
      category: "Climate-Tech App",
      icon: <Leaf size={48} className="project-hero-icon" />,
      description: "Interactive climate-tech web application that audits a product's end-to-end supply chain to detect greenwashing by modeling multi-leg logistics graphs and quantifying carbon emissions.",
      techStack: ["Python", "Streamlit", "Plotly", "NetworkX", "ESG Analytics"],
      stats: [
        { label: "Graph Engine", value: "NetworkX" },
        { label: "Verification", value: "Carbon Audit" }
      ],
      github: "https://github.com/KhannakPGupta/Green-Wash-Verifier",
      demo: "https://green-wash-verifier.streamlit.app/"
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
