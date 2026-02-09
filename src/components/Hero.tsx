import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-secondary-900">
            I'm <span className="gradient-text">Arunkumar K R</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-secondary-700 font-medium">
            ML Engineer & AI Developer
          </h3>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Passionate ML Engineer and AI Developer with expertise in machine learning, 
            artificial intelligence, and data science. Also interested in full stack development 
            for building comprehensive AI-powered applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </a>
            
            <a
              href="/ARUNKUMAR K R_23CS020.pdf"
              download
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>

          <div className="pt-6">
            <div className="flex items-center space-x-6 text-sm text-secondary-600">
              <div>
                <span className="font-semibold text-secondary-900">Location:</span> India
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-600 rounded-full blur-3xl opacity-40"></div>
            <img
              src="/ARUNKUMAR K R_23CS020.jpg"
              alt="Arunkumar K R"
              className="relative w-80 h-85 md:w-90 md:h-90 rounded-full object-cover border-4 border-accent-400 shadow-2xl mx-auto purple-glow"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIwMCAyNDBDMjQwIDI0MCAyODAgMjgwIDI4MCAzMjBIMTIwQzEyMCAyODAgMTYwIDI0MCAyMDAgMjQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
