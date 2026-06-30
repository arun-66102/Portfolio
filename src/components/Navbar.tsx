import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'About',    id: 'home' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Profiles', id: 'coding-profiles' },
  { label: 'Certs',    id: 'certificates' },
  { label: 'Contact',  id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="noir-nav">

        {/* Desktop links */}
        <div className="noir-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="noir-nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-btn"
          className="noir-nav-mobile-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <div className="noir-mobile-menu">
          <button
            className="noir-mobile-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            {[
              { icon: <Github size={20} />, href: 'https://github.com/arun-66102', label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/arunkumar-rathinasamy-844085290/', label: 'LinkedIn' },
              { icon: <Mail size={20} />, href: 'mailto:arun8778jul@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="noir-social-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
