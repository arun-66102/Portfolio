import { Brain, Code, Database, Globe, Server, Shield } from 'lucide-react';
import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'AI/ML', icon: <Brain size={24} /> },
    { name: 'Machine Learning', level: 90, category: 'AI/ML', icon: <Brain size={24} /> },
    { name: 'Deep Learning', level: 85, category: 'AI/ML', icon: <Brain size={24} /> },
    { name: 'OpenCV', level: 88, category: 'AI/ML', icon: <Brain size={24} /> },
    { name: 'TensorFlow/PyTorch', level: 82, category: 'AI/ML', icon: <Brain size={24} /> },
    { name: 'Data Science', level: 92, category: 'Data Science', icon: <Database size={24} /> },
    { name: 'JavaScript/TypeScript', level: 75, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'React.js', level: 70, category: 'Frontend', icon: <Globe size={24} /> },
    { name: 'Java', level: 78, category: 'Backend', icon: <Server size={24} /> },
    { name: 'SQL', level: 85, category: 'Database', icon: <Database size={24} /> },
    { name: 'Problem Solving', level: 95, category: 'Soft Skills', icon: <Brain size={24} /> },
    { name: 'RHCSA (Linux)', level: 78, category: 'DevOps', icon: <Shield size={24} /> },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Based on my certifications and practical experience in Machine Learning, AI, and Data Science
          </p>
        </div>

        <div className="grid gap-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="bg-secondary-200 rounded-lg p-6 card-hover border border-secondary-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-primary-600">
                            {skill.icon}
                          </div>
                          <h4 className="text-lg font-medium text-secondary-900">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="text-sm font-medium text-primary-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary-300 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">8+</div>
            <div className="text-secondary-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-secondary-600">Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1</div>
            <div className="text-secondary-600">Publication</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">EF SET</div>
            <div className="text-secondary-600">English Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
