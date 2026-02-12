import { Brain, Code, Database, Globe, Server, Shield } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const SkillBar = ({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div className="glass-card rounded-xl p-5 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary-400/10 text-primary-600 group-hover:text-neon-cyan transition-colors duration-300">
            {skill.icon}
          </div>
          <h4 className="text-sm font-semibold text-secondary-900">
            {skill.name}
          </h4>
        </div>
        <span className="text-xs font-bold text-neon-cyan tabular-nums">
          {width}%
        </span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <div
          className="skill-bar-fill h-1.5 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
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
    { name: 'Python', level: 95, category: 'Programming', icon: <Code size={20} /> },
    { name: 'Machine Learning', level: 90, category: 'AI/ML', icon: <Brain size={20} /> },
    { name: 'Deep Learning', level: 85, category: 'AI/ML', icon: <Brain size={20} /> },
    { name: 'OpenCV', level: 88, category: 'AI/ML', icon: <Brain size={20} /> },
    { name: 'TensorFlow/PyTorch', level: 82, category: 'AI/ML', icon: <Brain size={20} /> },
    { name: 'JavaScript', level: 75, category: 'Frontend', icon: <Code size={20} /> },
    { name: 'React.js', level: 70, category: 'Frontend', icon: <Globe size={20} /> },
    { name: 'Java', level: 78, category: 'Programming', icon: <Code size={20} /> },
    { name: 'SQL', level: 85, category: 'Database', icon: <Database size={20} /> },
    { name: 'MongoDB', level: 85, category: 'Database', icon: <Database size={20} /> },
    { name: 'Problem Solving', level: 95, category: 'Programming', icon: <Brain size={20} /> },
    { name: 'RHCSA (Linux)', level: 78, category: 'DevOps', icon: <Shield size={20} /> },
    { name: 'Node.js', level: 78, category: 'Backend', icon: <Server size={20} /> },
    { name: 'Flask', level: 78, category: 'Backend', icon: <Server size={20} /> },
    { name: 'FastAPI', level: 78, category: 'Backend', icon: <Server size={20} /> },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const stats = [
    { value: '8+', label: 'Technologies', color: 'from-primary-500 to-neon-cyan' },
    { value: '10+', label: 'Certificates', color: 'from-neon-cyan to-neon-green' },
    { value: '1', label: 'Publication', color: 'from-neon-pink to-primary-500' },
    { value: 'EF SET', label: 'English Certified', color: 'from-primary-500 to-neon-pink' },
  ];

  let skillIndex = 0;

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="orb w-[400px] h-[400px] bg-neon-cyan/5 top-[10%] right-[-10%]" />
      <div className="orb w-[300px] h-[300px] bg-primary-400/10 bottom-[10%] left-[-5%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Based on my certifications and practical experience in Machine Learning, AI, and Data Science
          </p>
          <div className="section-divider mt-8 max-w-sm mx-auto" />
        </div>

        {/* Skills by Category */}
        <div className="grid gap-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            return (
              <div key={category} className="space-y-5">
                <h3 className="text-xl font-bold text-secondary-800 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-soft" />
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {categorySkills.map((skill) => {
                    const currentIndex = skillIndex++;
                    return (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        isVisible={isVisible}
                        delay={currentIndex * 80}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card rounded-xl p-6 text-center group cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600 group-hover:text-secondary-800 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
