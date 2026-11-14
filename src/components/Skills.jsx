import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Server,
  Brain,
  Sparkles,
  ScanLine,
  Layers,
  Activity,
  Network,
  LayoutDashboard,
  LineChart,
  Share2,
  BookOpen,
  Globe,
  Cloud,
  Table
} from 'lucide-react';
import { FaPython, FaJs, FaReact, FaGitAlt, FaHtml5, FaJava } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "Machine Learning & AI",
      items: [
        { name: "XGBoost & Scikit-Learn", icon: <Brain size={24} />, frequency: "Daily", projects: "The Last CEO, GeoImpact, Bike Rental" },
        { name: "LLMs, RAG & GenAI", icon: <Sparkles size={24} />, frequency: "Daily", projects: "FridgeMind (Gemini), SRM Insider AI, Yukti-AI" },
        { name: "Computer Vision & OCR", icon: <ScanLine size={24} />, frequency: "Frequent", projects: "CardSnap AI (OpenCV, PaddleOCR), FridgeMind" },
        { name: "NLP & Recommenders", icon: <Layers size={24} />, frequency: "Frequent", projects: "Movie Recommender (TF-IDF), FridgeMind" },
        { name: "Explainable AI (SHAP)", icon: <Activity size={24} />, frequency: "Frequent", projects: "The Last CEO, GeoImpact Risk Engine" },
        { name: "PyTorch & Federated AI", icon: <Network size={24} />, frequency: "Frequent", projects: "Personal Health Companion (UROP)" }
      ]
    },
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: <FaPython size={24} />, frequency: "Daily", projects: "All AI/ML & Backend Projects" },
        { name: "TypeScript & JavaScript", icon: <FaJs size={24} />, frequency: "Daily", projects: "The Last CEO, CardSnap AI, Portfolio" },
        { name: "C & C++", icon: <Code2 size={24} />, frequency: "Frequent", projects: "180+ LeetCode Problems, Core CS" },
        { name: "SQL & SQLite (FTS5)", icon: <Database size={24} />, frequency: "Frequent", projects: "FridgeMind, Data Analysis" },
        { name: "HTML5 & CSS3", icon: <FaHtml5 size={24} />, frequency: "Frequent", projects: "Portfolio, CardSnap AI, FridgeMind" },
        { name: "Java", icon: <FaJava size={24} />, frequency: "Occasional", projects: "STEP Tic-Tac-Toe, OOP" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "FastAPI", icon: <Server size={24} />, frequency: "Daily", projects: "The Last CEO, FridgeMind, CardSnap AI" },
        { name: "React", icon: <FaReact size={24} />, frequency: "Daily", projects: "The Last CEO, FridgeMind, CardSnap AI" },
        { name: "Streamlit", icon: <LayoutDashboard size={24} />, frequency: "Daily", projects: "GeoImpact, Green-Wash, Movie Recommender" },
        { name: "Pandas & NumPy", icon: <Table size={24} />, frequency: "Daily", projects: "GeoImpact, The Last CEO, Bike Rental" },
        { name: "Plotly & Matplotlib", icon: <LineChart size={24} />, frequency: "Frequent", projects: "GeoImpact, Green-Wash Verifier" },
        { name: "NetworkX & ChromaDB", icon: <Share2 size={24} />, frequency: "Frequent", projects: "Green-Wash Verifier, SRM Insider AI" }
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt size={24} />, frequency: "Daily", projects: "All Open-Source & Team Repositories" },
        { name: "Jupyter Notebook", icon: <BookOpen size={24} />, frequency: "Daily", projects: "GeoImpact, Movie Recommender, Bike Rental" },
        { name: "REST & External APIs", icon: <Globe size={24} />, frequency: "Daily", projects: "Gemini 2.0, TMDB, Google Sheets" },
        { name: "Vercel & Streamlit Cloud", icon: <Cloud size={24} />, frequency: "Frequent", projects: "The Last CEO, CardSnap AI, GeoImpact" },
        { name: "Ollama & AWS PartyRock", icon: <Cpu size={24} />, frequency: "Frequent", projects: "SRM Insider AI (Gemma-2B), Yukti-AI" }
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
