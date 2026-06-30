import React, { useEffect, useRef, useState } from 'react';
import {
  FaBrain,
  FaComments,
  FaDatabase,
  FaJava,
  FaLightbulb,
  FaLinux,
  FaNetworkWired,
  FaRobot,
  FaServer,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';
import {
  SiAmazonaws,
  SiC,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTensorflow,
} from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const SkillCard = ({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) => {
  return (
    <div
      className="noir-skill-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(1rem)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div className="noir-skill-card-icon">{skill.icon}</div>
      <span className="noir-skill-card-name">{skill.name}</span>
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
    // AI & Machine Learning
    { name: 'LangChain',           category: 'AI & Machine Learning',     icon: <FaBrain size={18} /> },
    { name: 'TensorFlow',          category: 'AI & Machine Learning',     icon: <SiTensorflow size={18} /> },
    { name: 'PyTorch',             category: 'AI & Machine Learning',     icon: <SiPytorch size={18} /> },
    { name: 'Hugging Face',        category: 'AI & Machine Learning',     icon: <FaRobot size={18} /> },
    { name: 'ChromaDB',            category: 'AI & Machine Learning',     icon: <FaDatabase size={18} /> },
    { name: 'RAG & LLM pipelines', category: 'AI & Machine Learning',     icon: <FaNetworkWired size={18} /> },

    // Backend Development
    { name: 'FastAPI',             category: 'Backend Development',       icon: <SiFastapi size={18} /> },
    { name: 'Node.js',             category: 'Backend Development',       icon: <SiNodedotjs size={18} /> },
    { name: 'Express.js',          category: 'Backend Development',       icon: <SiExpress size={18} /> },
    { name: 'Django',              category: 'Backend Development',       icon: <SiDjango size={18} /> },
    { name: 'REST APIs',           category: 'Backend Development',       icon: <FaServer size={18} /> },

    // Database & Infrastructure
    { name: 'PostgreSQL',          category: 'Database & Infrastructure', icon: <SiPostgresql size={18} /> },
    { name: 'MongoDB',             category: 'Database & Infrastructure', icon: <SiMongodb size={18} /> },
    { name: 'Redis',               category: 'Database & Infrastructure', icon: <SiRedis size={18} /> },
    { name: 'Linux',               category: 'Database & Infrastructure', icon: <FaLinux size={18} /> },
    { name: 'Git',                 category: 'Database & Infrastructure', icon: <SiGit size={18} /> },
    { name: 'Docker',              category: 'Database & Infrastructure', icon: <SiDocker size={18} /> },
    { name: 'AWS (EC2, S3)',       category: 'Database & Infrastructure', icon: <SiAmazonaws size={18} /> },

    // Languages & Frameworks
    { name: 'Python',              category: 'Languages & Frameworks',    icon: <SiPython size={18} /> },
    { name: 'Java',                category: 'Languages & Frameworks',    icon: <FaJava size={18} /> },
    { name: 'JavaScript',          category: 'Languages & Frameworks',    icon: <SiJavascript size={18} /> },
    { name: 'C',                   category: 'Languages & Frameworks',    icon: <SiC size={18} /> },
    { name: 'SQL',                 category: 'Languages & Frameworks',    icon: <FaDatabase size={18} /> },
    { name: 'React.js',            category: 'Languages & Frameworks',    icon: <SiReact size={18} /> },

    // Soft Skills
    { name: 'Problem Solving',     category: 'Soft Skills',               icon: <FaLightbulb size={18} /> },
    { name: 'Team Collaboration',  category: 'Soft Skills',               icon: <FaUsers size={18} /> },
    { name: 'Tech Communication',  category: 'Soft Skills',               icon: <FaComments size={18} /> },
    { name: 'Leadership',          category: 'Soft Skills',               icon: <FaUserTie size={18} /> },
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const stats = [
    { value: '8+',   label: 'Technologies' },
    { value: '10+',  label: 'Certificates' },
    { value: '1',    label: 'Publication' },
    { value: 'EF SET', label: 'English Cert' },
  ];

  let totalIndex = 0;

  return (
    <section id="skills" ref={ref} className="noir-skills">
      <div className="noir-section-label">Core Competencies</div>
      <h2 className="noir-section-title">
        Technical<br />
        <em>Skills</em>
      </h2>

      <div className="noir-skills-container">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="noir-skill-category">
            <h3 className="noir-category-title">{category}</h3>
            <div className="noir-category-grid">
              {categorySkills.map((skill) => {
                const currentIndex = totalIndex++;
                return (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={currentIndex * 50}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Row */}
      <div
        ref={statsRef}
        className="noir-skills-stats"
        style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(1.25rem)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          marginTop: '6rem',
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="noir-stats-item">
            <span className="noir-stats-num">{stat.value}</span>
            <div className="noir-stats-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
