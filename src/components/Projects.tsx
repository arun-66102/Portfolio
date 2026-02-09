import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

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
  const projects: Project[] = [
    {
      id: 'sentiment-analysis',
      title: 'RouteX - PDF Routing System',
      description: 'A system that routes PDF documents to the appropriate department based on content analysis.',
      image: '/project2.jpg',
      technologies: ['Transformers','LLM','ChromaDB','Tesseract OCR','Semantic search'],
      liveUrl: 'https://pdf-router.streamlit.app/',
      githubUrl: 'https://github.com/arun-66102/PDF-Summarizer',
      date: '2026',
      category: 'AI Automation'
    },
    {
      id: 'predictive-analytics',
      title: 'Just-Chat - RAG based chatbot',
      description: 'A chatbot that uses Retrieval-Augmented Generation (RAG) to answer questions based on a knowledge base.',
      image: '/project3.jpg',
      technologies: [],
      liveUrl: 'https://justice-chat-bot.streamlit.app/',
      githubUrl: 'https://github.com/arun-66102/Justice-Chat-Bot',
      date: '2024',
      category: 'RAG Chatbot'
    },
    {
      id: 'computer-vision',
      title: 'CommunHub - Community help hub',
      description: 'A full-stack web application that allows users to post and find help requests in their community.',
      image: '/project5.jpg',
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
      image: '/project1.jpg',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'NumPy'],
      githubUrl: 'https://github.com/arun-66102/Weather-Prediction-ML-model',
      date: '2025',
      category: 'Machine Learning'
    },
    {
      id: 'chatbot-ai',
      title: 'Encryptor - Java CLI App',
      description: 'A command-line interface application that encrypts passwords using AES encryption.',
      image: '/project4.jpg',
      technologies: ['Java', 'AES', 'CLI'],
      githubUrl: 'https://github.com/arun-66102/Encrypted-Password-Manager',
      date: '2024',
      category: 'Security'
    }
  ];

  const categories = Array.from(new Set(projects.map(project => project.category)));

  return (
    <section id="projects" className="py-20 bg-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A showcase of my Machine Learning, AI and Full Stack projects
          </p>
        </div>

        <div className="grid gap-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === category)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="bg-secondary-200 rounded-lg shadow-md overflow-hidden card-hover border border-secondary-300"
                    >
                      {/* Project Image */}
                      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <div className="text-6xl mb-2">🤖</div>
                          <p className="text-sm font-medium">Project Preview</p>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-secondary-900">
                            {project.title}
                          </h4>
                          <div className="flex items-center text-xs text-secondary-500">
                            <Calendar size={12} className="mr-1" />
                            {project.date}
                          </div>
                        </div>

                        <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 bg-primary-200 text-primary-800 text-xs font-medium rounded"
                            >
                              <Tag size={10} className="mr-1" />
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs text-secondary-500">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-secondary-300 text-secondary-800 text-sm font-medium rounded hover:bg-secondary-400 transition-colors"
                            >
                              <Github size={14} className="mr-1" />
                              Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-200 text-primary-800 text-sm font-medium rounded hover:bg-primary-300 transition-colors"
                            >
                              <ExternalLink size={14} className="mr-1" />
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out my GitHub repository for more projects and contributions
            </p>
            <a
              href="https://github.com/arun-66102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-secondary-100 transition-colors"
            >
              <Github size={20} className="mr-2" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
