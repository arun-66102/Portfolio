import { Download, Eye } from 'lucide-react';
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
    { id: 'data-science',       name: 'Data Science Certificate',         issuer: 'Kaggle',               date: '2025', file: '/Data_Science.pdf',                         category: 'Data Science' },
    { id: 'full-stack',         name: 'Full Stack Development',           issuer: 'Code Red',             date: '2025', file: '/Full_Stack.pdf',                            category: 'Web Development' },
    { id: 'python',             name: 'Python Programming',               issuer: 'HackerRank',           date: '2024', file: '/Python.pdf',                                category: 'Programming' },
    { id: 'java',               name: 'Java Development',                 issuer: 'HackerRank',           date: '2024', file: '/Java.pdf',                                  category: 'Programming' },
    { id: 'sql',                name: 'SQL Database Management',          issuer: 'HackerRank',           date: '2024', file: '/SQL.pdf',                                   category: 'Database' },
    { id: 'opencv',             name: 'OpenCV Computer Vision',           issuer: 'OpenCV University',    date: '2025', file: '/OpenCV.pdf',                                category: 'AI/ML' },
    { id: 'problem-solving',    name: 'Problem Solving & Algorithms',     issuer: 'HackerRank',           date: '2024', file: '/Problem_Solving.pdf',                       category: 'Programming' },
    { id: 'problem-solving-int',name: 'Problem Solving (Intermediate)',   issuer: 'HackerRank',           date: '2026', file: '/Problem_Solving(Intermediate).pdf',          category: 'Programming' },
    { id: 'rhcsa',              name: 'RHCSA Certification',              issuer: 'Red Hat',              date: '2025', file: '/RHCSA_Certificate.pdf',                     category: 'DevOps' },
    { id: 'ef-set',             name: 'EF SET English Certificate',       issuer: 'EF Education First',   date: '2025', file: '/EF SET Certificate.pdf',                    category: 'Language' },
    { id: 'paper-publication',  name: 'Research Paper Publication',       issuer: 'IEEE Conference',      date: '2025', file: '/PaperPublication_Certificate.pdf', paperUrl: 'https://share.google/KDswcnEHFFreizjOB', category: 'Research' },
  ];

  const categories = Array.from(new Set(certificates.map(cert => cert.category)));

  const handleView = (certificate: Certificate) => {
    window.open(certificate.paperUrl ?? certificate.file, '_blank');
  };

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${name.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let cardIndex = 0;

  return (
    <section id="certificates" ref={ref} className="noir-certs">
      <div className="noir-section-label">Verified Credentials</div>
      <h2 className="noir-section-title">
        Professional<br />
        <em>Certs</em>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {categories.map((category) => (
          <div key={category}>
            <div className="noir-cert-category-label">{category}</div>

            <div className="noir-certs-grid">
              {certificates
                .filter(cert => cert.category === category)
                .map((certificate) => {
                  const currentIndex = cardIndex++;
                  return (
                    <div
                      key={certificate.id}
                      className="noir-cert-card"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(1.5rem)',
                        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${currentIndex * 60}ms,
                                     transform 0.6s cubic-bezier(0.16,1,0.3,1) ${currentIndex * 60}ms`,
                      }}
                    >
                      <div className="noir-cert-issuer">{certificate.issuer}</div>
                      <div className="noir-cert-name">{certificate.name}</div>
                      <div className="noir-cert-year">{certificate.date}</div>
                      <div className="noir-cert-actions">
                        <button
                          className="noir-cert-btn"
                          onClick={() => handleView(certificate)}
                        >
                          <Eye size={12} /> View
                        </button>
                        <button
                          className="noir-cert-btn"
                          onClick={() => handleDownload(certificate.file, certificate.name)}
                        >
                          <Download size={12} /> Download
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
