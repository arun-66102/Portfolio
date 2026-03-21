import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'coding-profiles', 'certificates', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', id: 'home',             num: '00' },
    { label: 'SKILLS', id: 'skills',          num: '01' },
    { label: 'PROJECTS', id: 'projects',      num: '02' },
    { label: 'PROFILES', id: 'coding-profiles', num: '03' },
    { label: 'CERTS', id: 'certificates',     num: '04' },
    { label: 'CONTACT', id: 'contact',        num: '05' },
  ];

  return (
    <nav className="cyber-nav">
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
        <span className="logo-bracket">[</span>
        <span className="logo-text">ARUNKUMAR_KR</span>
        <span className="logo-bracket">]</span>
      </a>

      {/* Desktop nav links */}
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-num={item.num}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}

        {/* Social icons */}
        <div className="nav-social-icons ml-6 flex items-center gap-2">
          {[
            { icon: <Github size={18} />, href: 'https://github.com/arun-66102' },
            { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/arunkumar-rathinasamy-844085290/' },
            { icon: <Mail size={18} />, href: 'mailto:arun8778jul@gmail.com' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-social-icon">
              {s.icon}
            </a>
          ))}
        </div>

        {/* Status pill */}
        <div className="status-pill">
          <div className="status-dot" />
          ONLINE
        </div>
      </div>

      {/* Mobile menu button */}
      <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 56,
          left: 0,
          right: 0,
          background: 'rgba(4,1,13,0.97)',
          borderBottom: '1px solid rgba(155,0,255,0.3)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                padding: '14px 24px',
                color: activeSection === item.id ? '#00ffc8' : 'rgba(242,232,255,0.4)',
                fontFamily: "'Fira Code', monospace",
                fontSize: 12,
                letterSpacing: 2,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(155,0,255,0.1)',
              }}
              onClick={() => setIsOpen(false)}
            >
              <span style={{ color: '#9b00ff', fontSize: 9, marginRight: 10 }}>{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
