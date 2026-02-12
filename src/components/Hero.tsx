import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Animated Background Orbs ── */}
      <div className="orb w-[500px] h-[500px] bg-primary-400/20 top-[-10%] left-[-10%] animate-float" />
      <div className="orb w-[400px] h-[400px] bg-neon-cyan/10 bottom-[-5%] right-[-5%] animate-float-slow" />
      <div className="orb w-[300px] h-[300px] bg-neon-pink/10 top-[40%] right-[20%] animate-float-delay" />

      {/* ── Grid Pattern Overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-20">

        {/* Left: Text Content */}
        <div className="space-y-8">
          {/* Tag */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary-400/10 border border-primary-400/20 text-primary-600">
              <Sparkles size={14} className="text-neon-cyan" />
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-secondary-900">I'm </span>
              <span className="gradient-text">Arunkumar</span>
              <br />
              <span className="gradient-text">K R</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl md:text-2xl font-medium text-secondary-700 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-neon-cyan to-transparent" />
              ML Engineer & AI Developer
            </h3>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <p className="text-lg text-secondary-600 leading-relaxed max-w-lg">
              Passionate ML Engineer and AI Developer with expertise in machine learning,
              artificial intelligence, and data science. Building comprehensive
              AI-powered applications with modern full-stack technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="btn-gradient inline-flex items-center px-7 py-3.5 text-white font-semibold rounded-xl"
            >
              Get In Touch
              <ArrowRight className="ml-2" size={18} />
            </a>

            <a
              href="/ARUNKUMAR K R_23CS020.pdf"
              download
              className="btn-outline inline-flex items-center px-7 py-3.5 text-primary-600 font-semibold rounded-xl"
            >
              <Download className="mr-2" size={18} />
              Resume
            </a>
          </div>

          {/* Mini Stats */}
          <div className="flex items-center gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
            {[
              { value: '445+', label: 'Problems' },
              { value: '19+', label: 'Projects' },
              { value: '10+', label: 'Certs' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-secondary-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-[-20px] bg-gradient-to-br from-primary-400/30 via-neon-cyan/10 to-neon-pink/20 rounded-full blur-3xl animate-glow-pulse" />

            {/* Decorative rotating ring */}
            <div className="absolute inset-[-15px] rounded-full border border-dashed border-primary-400/20 animate-spin-slow" />

            {/* Image */}
            <img
              src="/ARUNKUMAR K R_23CS020.jpg"
              alt="Arunkumar K R"
              className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full object-cover border-2 border-primary-400/30 shadow-2xl purple-glow z-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIwMCAyNDBDMjQwIDI0MCAyODAgMjgwIDI4MCAzMjBIMTIwQzEyMCAyODAgMTYwIDI0MCAyMDAgMjQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-soft">
        <span className="text-xs text-secondary-600 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-secondary-600/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-500 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
