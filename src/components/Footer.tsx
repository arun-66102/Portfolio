import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/arun-66102' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arunkumar-rathinasamy-844085290/' },
    { icon: <Mail size={18} />, label: 'Email', href: 'mailto:arun8778jul@gmail.com' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Profiles', href: '#coding-profiles' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line at top */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold gradient-text mb-4">Arunkumar K R</h3>
            <p className="text-secondary-600 text-sm leading-relaxed mb-6">
              ML Engineer & AI Developer passionate about building intelligent solutions
              and pushing the boundaries of machine learning and artificial intelligence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-secondary-600 hover:text-neon-cyan hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-secondary-800 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-600 hover:text-neon-cyan transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-secondary-600 group-hover:bg-neon-cyan group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold text-secondary-800 mb-5">Contact Info</h4>
            <ul className="space-y-3 text-sm text-secondary-600">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary-500" />
                arun8778jul@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Github size={14} className="text-primary-500" />
                github.com/arun-66102
              </li>
              <li>
                📍 India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-700 text-sm flex items-center gap-1">
            © {currentYear} Arunkumar K R · Built with
            <Heart size={14} className="text-red-500 animate-pulse" fill="currentColor" />
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-secondary-700 hover:text-neon-cyan hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300 text-sm font-medium"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
