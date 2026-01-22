import { Award, Download, Eye } from 'lucide-react';
import { useState } from 'react';

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  file: string;
  category: string;
}

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates: Certificate[] = [
    {
      id: 'data-science',
      name: 'Data Science Certificate',
      issuer: 'Professional Training Institute',
      date: '2024',
      file: '/Data_Science.pdf',
      category: 'Data Science'
    },
    {
      id: 'full-stack',
      name: 'Full Stack Development',
      issuer: 'Coding Academy',
      date: '2024',
      file: '/Full_Stack.pdf',
      category: 'Web Development'
    },
    {
      id: 'python',
      name: 'Python Programming',
      issuer: 'Tech Institute',
      date: '2024',
      file: '/Python.pdf',
      category: 'Programming'
    },
    {
      id: 'java',
      name: 'Java Development',
      issuer: 'Programming School',
      date: '2024',
      file: '/Java.pdf',
      category: 'Programming'
    },
    {
      id: 'sql',
      name: 'SQL Database Management',
      issuer: 'Database Institute',
      date: '2024',
      file: '/SQL.pdf',
      category: 'Database'
    },
    {
      id: 'opencv',
      name: 'OpenCV Computer Vision',
      issuer: 'AI Training Center',
      date: '2024',
      file: '/OpenCV.pdf',
      category: 'AI/ML'
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving & Algorithms',
      issuer: 'Competitive Programming',
      date: '2024',
      file: '/Problem_Solving.pdf',
      category: 'Programming'
    },
    {
      id: 'rhcsa',
      name: 'RHCSA Certification',
      issuer: 'Red Hat',
      date: '2024',
      file: '/RHCSA_Certificate.pdf',
      category: 'DevOps'
    },
    {
      id: 'ef-set',
      name: 'EF SET English Certificate',
      issuer: 'EF Education First',
      date: '2024',
      file: '/EF SET Certificate.pdf',
      category: 'Language'
    },
    {
      id: 'paper-publication',
      name: 'Research Paper Publication',
      issuer: 'International Journal',
      date: '2024',
      file: '/PaperPublication_Certificate.pdf',
      category: 'Research'
    }
  ];

  const categories = Array.from(new Set(certificates.map(cert => cert.category)));

  const handleViewCertificate = (file: string) => {
    setSelectedCertificate(file);
    // Open the file in a new tab for viewing
    window.open(file, '_blank');
  };

  const handleDownloadCertificate = (file: string, fileName: string) => {
    // Create a direct download link
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-20 bg-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A collection of my professional certifications and achievements
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6 flex items-center">
                <Award className="mr-3 text-primary-600" size={28} />
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates
                  .filter(cert => cert.category === category)
                  .map((certificate) => (
                    <div
                      key={certificate.id}
                      className="bg-secondary-100 rounded-lg shadow-md p-6 card-hover border border-secondary-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                            {certificate.name}
                          </h4>
                          <p className="text-secondary-600 text-sm mb-1">
                            {certificate.issuer}
                          </p>
                          <p className="text-secondary-500 text-xs">
                            {certificate.date}
                          </p>
                        </div>
                        <Award className="text-primary-500 flex-shrink-0" size={24} />
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <button
                          onClick={() => handleViewCertificate(certificate.file)}
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-200 text-primary-800 text-sm font-medium rounded hover:bg-primary-300 transition-colors"
                        >
                          <Eye size={16} className="mr-1" />
                          View
                        </button>
                        
                        <button
                          onClick={() => handleDownloadCertificate(certificate.file, `${certificate.name.replace(/\s+/g, '_')}.pdf`)}
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-secondary-300 text-secondary-800 text-sm font-medium rounded hover:bg-secondary-400 transition-colors"
                        >
                          <Download size={16} className="mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Achievements</h3>
            <p className="mb-6">
              All certificates are verified and available for download. Click on any certificate to view or download it.
            </p>
            <div className="text-sm opacity-90">
              For additional verification or references, please contact me directly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
