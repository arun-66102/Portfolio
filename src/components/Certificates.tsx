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
    <section id="certificates" style={{ padding: '100px 60px' }} ref={ref}>
      {/* Section Header */}
      <div className="cyber-header">
        <div className="ch-num">04</div>
        <div className="ch-title">
          <span className="col-b">PROFESSIONAL</span>_<span className="col-a">CERTS</span>
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        {categories.map((category) => (
          <div key={category}>
            {/* Category label */}
            <div className="skills-category-label" style={{ marginBottom: 20 }}>
              <Award size={14} style={{ color: '#00ffc8' }} />
              {category.toUpperCase()}
            </div>

            {/* Cards grid */}
            <div className="cert-cyber-grid-3">
              {certificates
                .filter(cert => cert.category === category)
                .map((certificate) => {
                  const currentIndex = cardIndex++;
                  const isPrimary = currentIndex % 2 === 0;
                  return (
                    <div
                      key={certificate.id + certificate.date}
                      className={`cert-cyber ${isPrimary ? 'primary' : ''}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `opacity 0.6s ease ${currentIndex * 60}ms, transform 0.6s ease ${currentIndex * 60}ms`,
                      }}
                    >
                      <div className={`cert-corner ${isPrimary ? 'primary-corner' : ''}`} />

                      <div className="cert-cyber-top">
                        <div className="cert-cyber-issuer">{certificate.issuer}</div>
                        <div className="cert-cyber-year">{certificate.date}</div>
                      </div>

                      <div className="cert-cyber-body">
                        <div className="cert-cyber-name">{certificate.name}</div>
                      </div>

                      <div className="cert-cyber-footer">
                        <button
                          className="cyber-card-btn"
                          onClick={() => handleViewCertificate(certificate)}
                        >
                          <Eye size={13} /> VIEW
                        </button>
                        <button
                          className="cyber-card-btn"
                          onClick={() => handleDownloadCertificate(certificate.file, `${certificate.name.replace(/\s+/g, '_')}.pdf`)}
                        >
                          <Download size={13} /> DOWNLOAD
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        marginTop: 60,
        border: '1px solid rgba(155,0,255,0.2)',
        padding: '32px 40px',
        textAlign: 'center',
        background: 'rgba(155,0,255,0.02)',
      }}>
        <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 20, fontWeight: 700, color: '#f2e8ff', marginBottom: 12 }}>
          Professional Achievements
        </div>
        <p style={{ fontFamily: 'inherit', fontWeight: 300, color: 'rgba(242,232,255,0.5)', fontSize: 14, lineHeight: 1.8 }}>
          All certificates are verified and available for download. For verification or references, please contact me directly.
        </p>
      </div>
    </section>
  );
};

export default Certificates;
