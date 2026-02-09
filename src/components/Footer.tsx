import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: 'mailto:arun8778jul@gmail.com'
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Arunkumar K R</h3>
            <p className="text-secondary-300 mb-4">
              ML Engineer & AI Developer passionate about building intelligent solutions 
              and pushing the boundaries of machine learning and artificial intelligence. 
              Also interested in full stack development for creating comprehensive AI-powered applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4 gradient-text">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-secondary-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#coding-profiles" className="text-secondary-300 hover:text-white transition-colors">
                  Coding Profiles
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-secondary-300 hover:text-white transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4 gradient-text">Contact Info</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>Email: arun8778jul@gmail.com</li>
              <li>Phone: +91 87787 65734</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} Arunkumar K R. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
