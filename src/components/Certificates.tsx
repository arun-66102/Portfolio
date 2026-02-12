import { Award, Download, Eye } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  file: string;
  paperUrl?: string;
  category: string;
}

const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const certificates: Certificate[] = [
    { id: 'data-science', name: 'Data Science Certificate', issuer: 'Kaggle', date: '2025', file: '/Data_Science.pdf', category: 'Data Science' },
    { id: 'full-stack', name: 'Full Stack Development', issuer: 'Code Red', date: '2025', file: '/Full_Stack.pdf', category: 'Web Development' },
    { id: 'python', name: 'Python Programming', issuer: 'Hackerrank', date: '2024', file: '/Python.pdf', category: 'Programming' },
    { id: 'java', name: 'Java Development', issuer: 'Hackerrank', date: '2024', file: '/Java.pdf', category: 'Programming' },
    { id: 'sql', name: 'SQL Database Management', issuer: 'Hackerrank', date: '2024', file: '/SQL.pdf', category: 'Database' },
    { id: 'opencv', name: 'OpenCV Computer Vision', issuer: 'OpenCV University', date: '2025', file: '/OpenCV.pdf', category: 'AI/ML' },
    { id: 'problem-solving', name: 'Problem Solving & Algorithms', issuer: 'Hackerrank', date: '2024', file: '/Problem_Solving.pdf', category: 'Programming' },
    { id: 'problem-solving-int', name: 'Problem Solving (Intermediate)', issuer: 'Hackerrank', date: '2026', file: '/Problem_Solving(Intermediate).pdf', category: 'Programming' },
    { id: 'rhcsa', name: 'RHCSA Certification', issuer: 'Red Hat', date: '2025', file: '/RHCSA_Certificate.pdf', category: 'DevOps' },
    { id: 'ef-set', name: 'EF SET English Certificate', issuer: 'EF Education First', date: '2025', file: '/EF SET Certificate.pdf', category: 'Language' },
    { id: 'paper-publication', name: 'Research Paper Publication', issuer: 'IEEE Conference', date: '2025', file: '/PaperPublication_Certificate.pdf', paperUrl: 'https://share.google/KDswcnEHFFreizjOB', category: 'Research' },
  ];

  const categories = Array.from(new Set(certificates.map(cert => cert.category)));

  const handleViewCertificate = (certificate: Certificate) => {
    if (certificate.paperUrl) {
      window.open(certificate.paperUrl, '_blank');
    } else {
      window.open(certificate.file, '_blank');
    }
  };

  const handleDownloadCertificate = (file: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let cardIndex = 0;

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-primary-400/8 top-[15%] left-[-8%]" />
      <div className="orb w-[350px] h-[350px] bg-neon-cyan/5 bottom-[10%] right-[-8%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements
          </p>
          <div className="section-divider mt-8 max-w-sm mx-auto" />
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className={`text-xl font-bold text-secondary-800 flex items-center gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                <Award className="text-neon-cyan" size={24} />
                {category}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificates
                  .filter(cert => cert.category === category)
                  .map((certificate) => {
                    const currentIndex = cardIndex++;
                    return (
                      <div
                        key={certificate.id + certificate.date}
                        className={`glass-card rounded-2xl p-6 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                          }`}
                        style={{ transitionDelay: `${currentIndex * 80}ms` }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 pr-3">
                            <h4 className="text-base font-bold text-secondary-900 mb-1.5 group-hover:text-white transition-colors leading-tight">
                              {certificate.name}
                            </h4>
                            <p className="text-secondary-600 text-sm">{certificate.issuer}</p>
                            <p className="text-secondary-700 text-xs mt-1 font-medium">{certificate.date}</p>
                          </div>
                          <div className="p-2.5 rounded-xl bg-primary-400/10 text-primary-500 group-hover:text-neon-cyan transition-colors">
                            <Award size={20} />
                          </div>
                        </div>

                        <div className="flex gap-2 mt-5">
                          <button
                            onClick={() => handleViewCertificate(certificate)}
                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-secondary-800 hover:bg-white/10 hover:text-neon-cyan hover:border-primary-400/30 transition-all duration-300"
                          >
                            <Eye size={14} className="mr-1.5" />
                            View
                          </button>
                          <button
                            onClick={() => handleDownloadCertificate(certificate.file, `${certificate.name.replace(/\s+/g, '_')}.pdf`)}
                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-secondary-800 hover:bg-white/10 hover:text-white hover:border-primary-400/30 transition-all duration-300"
                          >
                            <Download size={14} className="mr-1.5" />
                            Download
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-neon-cyan/5 to-neon-pink/5" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">Professional Achievements</h3>
              <p className="text-secondary-600 mb-2 max-w-lg mx-auto">
                All certificates are verified and available for download. Click on any certificate to view or download it.
              </p>
              <p className="text-sm text-secondary-700">
                For verification or references, please contact me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
