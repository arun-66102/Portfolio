import { ArrowUpRight, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  category: string;
}

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const projects: Project[] = [
    {
      id: 'routex',
      title: 'RouteX — PDF Routing System',
      description: 'Routes PDF documents to the appropriate department based on content analysis using Transformers and semantic search.',
      image: '/projects/routeX.png',
      technologies: ['Transformers', 'LLM', 'ChromaDB', 'Tesseract OCR', 'Semantic search'],
      liveUrl: 'https://pdf-summarizer-beta-two.vercel.app/',
      githubUrl: 'https://github.com/arun-66102/PDF-Summarizer',
      date: '2026',
      category: 'AI Automation',
    },
    {
      id: 'prism-ai',
      title: 'Prism AI — Content Generation Suite',
      description: 'AI-powered content generation platform creating SEO blogs, video scripts, and social images using Groq LLM and FLUX diffusion models.',
      image: '/projects/prism-ai.png',
      technologies: ['FastAPI', 'Groq', 'Hugging Face', 'FLUX.1', 'Python'],
      liveUrl: 'https://prism-ai-boai.onrender.com/',
      githubUrl: 'https://github.com/Indhu375/Prism-AI',
      date: '2025',
      category: 'AI Content Generation',
    },
    {
      id: 'promanage',
      title: 'ProManage — Project Management',
      description: 'Full-stack project management system for managing projects and tasks with Node.js, Express, and MongoDB.',
      image: '/projects/proManage.jpeg',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://promanage-production-5fde.up.railway.app/',
      githubUrl: 'https://github.com/arun-66102/ProManage',
      date: '2025',
      category: 'Full Stack',
    },
    {
      id: 'just-chat',
      title: 'Just-Chat — RAG Chatbot',
      description: 'A chatbot using Retrieval-Augmented Generation to answer questions based on a custom knowledge base.',
      image: '/projects/just-chat.png',
      technologies: ['Sentence-transformers', 'ChromaDB', 'RAG', 'Streamlit'],
      liveUrl: 'https://justice-chat-bot.streamlit.app/',
      githubUrl: 'https://github.com/arun-66102/Justice-Chat-Bot',
      date: '2024',
      category: 'RAG Chatbot',
    },
    {
      id: 'communhub',
      title: 'CommunHub — Community Hub',
      description: 'Full-stack community web app for posting and finding help requests, with real-time Socket.io messaging.',
      image: '/projects/communHub.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://community-hub-henna.vercel.app/',
      githubUrl: 'https://github.com/arun-66102/Community-Hub',
      date: '2025',
      category: 'Full Stack',
    },
    {
      id: 'weather-ml',
      title: 'Weather Prediction System',
      description: 'ML model predicting weather conditions based on historical data and current atmospheric conditions.',
      image: '/projects/weatherModel.png',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'NumPy'],
      githubUrl: 'https://github.com/arun-66102/Weather-Prediction-ML-model',
      date: '2025',
      category: 'Machine Learning',
    },
  ];

  return (
    <section id="projects" ref={ref} className="noir-projects">
      {/* ── Section Header ── */}
      <div className="noir-projects-header">
        <h2 className="noir-projects-title">
          Featured<br />
          <em>Projects</em>
        </h2>
        <div className="noir-projects-sub">
          Vol. 02 — 2024 / 2026 &nbsp;·&nbsp; {projects.length} Projects
        </div>
      </div>

      {/* ── 2-col Grid ── */}
      <div className="noir-projects-grid">
        {projects.map((project, index) => {
          const href = project.liveUrl ?? project.githubUrl ?? '#';
          return (
            <article
              key={project.id}
              className="noir-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms,
                             transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
              }}
            >
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="noir-card-img"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              )}

              {/* Gradient overlay */}
              <div className="noir-card-overlay" />

              {/* Info layer */}
              <div className="noir-card-info">
                <div className="noir-card-category">{project.category}</div>
                <div className="noir-card-title">{project.title}</div>
                <div className="noir-card-tags">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="noir-card-tag">{tech}</span>
                  ))}
                </div>
                <div className="noir-card-meta">
                  <span className="noir-card-year">{project.date}</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="noir-card-btn"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div className="noir-projects-cta">
        <a
          href="https://github.com/arun-66102"
          target="_blank"
          rel="noopener noreferrer"
          className="noir-text-btn"
        >
          <Github size={16} />
          View all on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
