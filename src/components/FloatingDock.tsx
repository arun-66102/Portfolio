import { useEffect, useState } from 'react';
import { Home, Code, Briefcase, Award, User, Mail, ArrowUpRight } from 'lucide-react';

const navItems = [
  { icon: <Home size={18} />, id: 'home',            label: 'Home' },
  { icon: <Code size={18} />, id: 'skills',          label: 'Skills' },
  { icon: <Briefcase size={18} />, id: 'projects',   label: 'Projects' },
  { icon: <User size={18} />, id: 'coding-profiles', label: 'Profiles' },
  { icon: <Award size={18} />, id: 'certificates',   label: 'Certs' },
];

/**
 * FloatingDock — Midnight Editorial–style pill navigation anchored at
 * the bottom-centre of the viewport.  Tracks the active section via
 * IntersectionObserver and shows a cyan pill Contact button.
 */
export default function FloatingDock() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'coding-profiles', 'certificates', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="float-dock" aria-label="Section navigation">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`float-dock-btn${active === item.id ? ' active' : ''}`}
          title={item.label}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}

      <div className="float-dock-divider" />

      <a href="#contact" className="float-dock-contact" aria-label="Contact">
        <Mail size={13} />
        Contact
        <ArrowUpRight size={12} />
      </a>
    </div>
  );
}
