import { Calendar, ExternalLink, Github } from 'lucide-react';
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
      id: 'sentiment-analysis',
      title: 'RouteX - PDF Routing System',
      description: 'A system that routes PDF documents to the appropriate department based on content analysis.',
      image: '/projects/routeX.png',
      technologies: ['Transformers', 'LLM', 'ChromaDB', 'Tesseract OCR', 'Semantic search'],
      liveUrl: 'https://pdf-router.streamlit.app/',
      githubUrl: 'https://github.com/arun-66102/PDF-Summarizer',
      date: '2026',
      category: 'AI Automation',
    },
    {
      id: 'prism-ai',
      title: 'Prism AI - Content Generation Suite',
      description: 'An AI-powered content generation platform that creates SEO-optimized blogs, video scripts, and social media images using Groq LLM and Hugging Face FLUX diffusion models.',
      image: '/projects/prism-ai.png',
      technologies: ['FastAPI', 'Groq', 'Hugging Face', 'FLUX.1', 'Python', 'JavaScript'],
      liveUrl: 'https://prism-ai-boai.onrender.com/',
      githubUrl: 'https://github.com/Indhu375/Prism-AI',
      date: '2025',
      category: 'AI Content Generation',
    },
    {
      id: 'chatbot-ai',
      title: 'ProManage - Project Management System',
      description: 'A project management system that allows users to manage their projects and tasks.',
      image: '/projects/proManage.jpeg',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://promanage-production-5fde.up.railway.app/',
      githubUrl: 'https://github.com/arun-66102/ProManage',
      date: '2025',
      category: 'Full Stack Development',
    },
    {
      id: 'predictive-analytics',
      title: 'Just-Chat - RAG based chatbot',
      description: 'A chatbot that uses Retrieval-Augmented Generation (RAG) to answer questions based on a knowledge base.',
      image: '/projects/just-chat.png',
      technologies: ['Sentence-transformers', 'ChromaDB', 'RAG', 'Streamlit', 'Python'],
      liveUrl: 'https://justice-chat-bot.streamlit.app/',
      githubUrl: 'https://github.com/arun-66102/Justice-Chat-Bot',
      date: '2024',
      category: 'RAG Chatbot',
    },
    {
      id: 'computer-vision',
      title: 'CommunHub - Community hub',
      description: 'A full-stack web application that allows users to post and find help requests in their community.',
      image: '/projects/communHub.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://community-hub-henna.vercel.app/',
      githubUrl: 'https://github.com/arun-66102/Community-Hub',
      date: '2025',
      category: 'Full Stack Development',
    },
    {
      id: 'ml-classifier',
      title: 'Weather Prediction System',
      description: 'A machine learning model that predicts weather conditions based on historical data and current atmospheric conditions.',
      image: '/projects/weatherModel.png',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'NumPy'],
      githubUrl: 'https://github.com/arun-66102/Weather-Prediction-ML-model',
      date: '2025',
      category: 'Machine Learning',
    },
  ];

  const categorySymbols: Record<string, string> = {
    'AI Automation': 'AI',
    'AI Content Generation': 'GEN',
    'RAG Chatbot': 'RAG',
    'Full Stack Development': 'WEB',
    'Machine Learning': 'ML',
    'Security': 'SEC',
  };

  return (
    <section id="projects" style={{ padding: '100px 60px' }} ref={ref}>
      {/* Section Header */}
      <div className="cyber-header">
        <div className="ch-num">02</div>
        <div className="ch-title">
          <span className="col-b">FEATURED</span>_<span className="col-a">PROJECTS</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="cert-cyber-grid-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="cert-cyber"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
            }}
          >
            <div className="cert-corner" />

            {/* Image */}
            <div className="project-img-wrap">
              {project.image && project.image.startsWith('/projects/') && (
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              )}
              <div className="project-img-overlay" />
              <div className="project-cat-symbol">{categorySymbols[project.category] || 'DEV'}</div>
              <div className="cyber-category-badge">{project.category}</div>
            </div>

            {/* Content */}
            <div className="cert-cyber-top" style={{ flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div className="cert-cyber-name" style={{ fontSize: 15 }}>{project.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={11} style={{ color: 'rgba(242,232,255,0.3)' }} />
                  <span className="cert-cyber-year">{project.date}</span>
                </div>
              </div>
            </div>

            <div className="cert-cyber-body">
              <p className="cert-cyber-desc">{project.description}</p>
              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className={`cyber-tag ${i % 2 === 0 ? '' : 'teal'}`}>{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span style={{ fontFamily: "'Fira Code',monospace", fontSize: 10, color: 'rgba(242,232,255,0.3)', alignSelf: 'center' }}>
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="cert-cyber-footer">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cyber-card-btn">
                  <Github size={13} /> CODE
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cyber-card-btn btn-live">
                  <ExternalLink size={13} /> LIVE
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <a
          href="https://github.com/arun-66102"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-btn cyber-btn-sec"
          style={{ display: 'inline-flex' }}
        >
          <Github size={16} />
          VIEW GITHUB PROFILE
        </a>
      </div>
    </section>
  );
};

export default Projects;
