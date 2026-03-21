import { Brain, Code, Database, Globe, Server, Shield } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const SkillRow = ({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div className="sc-skill">
      <span className="sk-cat">{skill.category}</span>
      <span className="sk-icon">{skill.icon}</span>
      <span className="sk-name">{skill.name}</span>
      <div className="sk-bar-wrap">
        <div className="sk-bar" style={{ width: `${width}%` }} />
      </div>
      <span className="sk-pct">{width}%</span>
    </div>
  );
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          if (statsRef.current) observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'Programming', icon: <Code size={16} /> },
    { name: 'Machine Learning', level: 90, category: 'AI/ML', icon: <Brain size={16} /> },
    { name: 'Deep Learning', level: 85, category: 'AI/ML', icon: <Brain size={16} /> },
    { name: 'OpenCV', level: 88, category: 'AI/ML', icon: <Brain size={16} /> },
    { name: 'TensorFlow/PyTorch', level: 82, category: 'AI/ML', icon: <Brain size={16} /> },
    { name: 'JavaScript', level: 75, category: 'Frontend', icon: <Code size={16} /> },
    { name: 'React.js', level: 70, category: 'Frontend', icon: <Globe size={16} /> },
    { name: 'Java', level: 78, category: 'Programming', icon: <Code size={16} /> },
    { name: 'SQL', level: 85, category: 'Database', icon: <Database size={16} /> },
    { name: 'MongoDB', level: 85, category: 'Database', icon: <Database size={16} /> },
    { name: 'Problem Solving', level: 95, category: 'Programming', icon: <Brain size={16} /> },
    { name: 'RHCSA (Linux)', level: 78, category: 'DevOps', icon: <Shield size={16} /> },
    { name: 'Node.js', level: 78, category: 'Backend', icon: <Server size={16} /> },
    { name: 'Flask', level: 78, category: 'Backend', icon: <Server size={16} /> },
    { name: 'FastAPI', level: 78, category: 'Backend', icon: <Server size={16} /> },
  ];

  const stats = [
    { value: '8+', label: 'TECHNOLOGIES' },
    { value: '10+', label: 'CERTIFICATES' },
    { value: '1', label: 'PUBLICATION' },
    { value: 'EF SET', label: 'ENGLISH_CERT' },
  ];

  let skillIndex = 0;

  return (
    <section id="skills" ref={ref}>
      {/* Section Header */}
      <div className="cyber-header">
        <div className="ch-num">01</div>
        <div className="ch-title">
          <span className="col-a">TECHNICAL</span>_<span className="col-b">SKILLS</span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill) => {
          const currentIndex = skillIndex++;
          return (
            <SkillRow
              key={skill.name}
              skill={skill}
              isVisible={isVisible}
              delay={currentIndex * 60}
            />
          );
        })}
      </div>

      {/* Stats Row */}
      <div
        ref={statsRef}
        className="skills-stats"
        style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="skills-stat-item">
            <span className="skills-stat-num">{stat.value}</span>
            <div className="skills-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
