import { Calendar, ExternalLink, Github, Tag } from 'lucide-react';
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
      category: 'AI Automation'
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
      category: 'RAG Chatbot'
    },
    {
      id: 'computer-vision',
      title: 'CommunHub - Community hub',
      description: 'A full-stack web application that allows users to post and find help requests in their community.',
      image: '/projects/communHub.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://communhub.netlify.app/',
      githubUrl: 'https://github.com/arun-66102/Community-Hub',
      date: '2025',
      category: 'Full Stack Development'
    },
    {
      id: 'ml-classifier',
      title: 'Weather Prediction System',
      description: 'A machine learning model that predicts weather conditions based on historical data and current atmospheric conditions.',
      image: '/projects/weatherModel.png',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'NumPy'],
      githubUrl: 'https://github.com/arun-66102/Weather-Prediction-ML-model',
      date: '2025',
      category: 'Machine Learning'
    },
    {
      id: 'chatbot-ai',
      title: 'Encryptor - Java CLI App',
      description: 'A command-line interface application that encrypts passwords using AES encryption.',
      image: '/projects/encryptor.jpeg',
      technologies: ['Java', 'AES', 'CLI'],
      githubUrl: 'https://github.com/arun-66102/Encrypted-Password-Manager',
      date: '2024',
      category: 'Security'
    }
  ];

  const categoryEmojis: Record<string, string> = {
    'AI Automation': '🤖',
    'RAG Chatbot': '💬',
    'Full Stack Development': '🌐',
    'Machine Learning': '🧠',
    'Security': '🔒',
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="orb w-[500px] h-[500px] bg-primary-400/8 top-[5%] left-[-10%]" />
      <div className="orb w-[350px] h-[350px] bg-neon-pink/5 bottom-[10%] right-[-5%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A showcase of my Machine Learning, AI and Full Stack projects
          </p>
          <div className="section-divider mt-8 max-w-sm mx-auto" />
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl overflow-hidden group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100/50 to-accent-50/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 to-transparent z-10" />
                {project.image && project.image.startsWith('/projects/') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Category badge on image */}
                <span className="absolute top-3 right-3 z-20 text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10">
                  {project.category}
                </span>

                {/* Emoji fallback */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl z-0">
                  {categoryEmojis[project.category] || '🚀'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-secondary-900 group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center text-xs text-secondary-600">
                    <Calendar size={12} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-secondary-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-chip inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md">
                      <Tag size={10} className="mr-1 opacity-60" />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-secondary-600 self-center ml-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-secondary-800 hover:bg-white/10 hover:text-white hover:border-primary-400/30 transition-all duration-300"
                    >
                      <Github size={14} className="mr-1.5" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium btn-gradient text-white"
                    >
                      <ExternalLink size={14} className="mr-1.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-neon-cyan/5 to-neon-pink/5" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">Interested in My Work?</h3>
              <p className="text-secondary-600 mb-6 max-w-lg mx-auto">
                Check out my GitHub for more projects and contributions
              </p>
              <a
                href="https://github.com/arun-66102"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl"
              >
                <Github size={18} className="mr-2" />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
