import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-grid">
        {/* ── Left: Text Content ── */}
        <div>
          {/* Glitch Name */}
          <div className="glitch-name-wrap">
            <div className="glitch-name">
              ARUN<br />
              <span className="name-highlight">KUMAR</span><br />
              KR
            </div>
            <div className="glitch-name-copy" aria-hidden="true">
              ARUN<br />
              <span className="name-highlight">KUMAR</span><br />
              KR
            </div>
          </div>

          {/* Role line */}
          <div className="hero-role">ML_ENGINEER &amp; AI_DEVELOPER</div>

          {/* Bio */}
          <p className="hero-bio">
            Passionate ML Engineer and AI Developer with expertise in machine learning,
            artificial intelligence, and data science. Building comprehensive
            AI-powered applications with modern full-stack technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns">
            <a href="#contact" className="cyber-btn cyber-btn-primary">
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="/ARUNKUMAR K R_23CS020.pdf"
              download
              className="cyber-btn cyber-btn-sec"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Stats Bar */}
          <div className="stats-cyber">
            <div className="sc-item">
              <span className="sc-num">445+</span>
              <span className="sc-label">PROBLEMS</span>
            </div>
            <div className="sc-item">
              <span className="sc-num">19+</span>
              <span className="sc-label">PROJECTS</span>
            </div>
            <div className="sc-item">
              <span className="sc-num">10+</span>
              <span className="sc-label">CERTS</span>
            </div>
          </div>
        </div>

        {/* ── Right: Terminal Card ── */}
        <div className="hero-terminal">
          <div className="terminal-titlebar">
            <div className="t-btn r" />
            <div className="t-btn y" />
            <div className="t-btn g" />
            <div className="t-title">ARUNKUMAR@PORTFOLIO:~</div>
          </div>
          <div className="terminal-body">
            <div className="tl"><span className="tp">▶</span><span className="tc">node</span><span className="tw"> index.js</span></div>
            <div className="tl"><span className="tg">✓</span><span className="tw"> Server running on :3000</span></div>
            <div className="tl" style={{ height: 20 }} />
            <div className="tl"><span className="tp">▶</span><span className="tc">whoami</span></div>
            <div className="tl"><span className="ty">Arunkumar KR</span></div>
            <div className="tl"><span className="td">ML Engineer &amp; AI Developer, Chennai</span></div>
            <div className="tl" style={{ height: 20 }} />
            <div className="tl"><span className="tp">▶</span><span className="tc">cat</span><span className="tw"> skills.json</span></div>
            <div className="tl"><span className="td">{'{'}</span></div>
            <div className="tl"><span className="td">&nbsp;&nbsp;</span><span className="ty">"python"</span><span className="td">:</span><span className="tg">"95%"</span><span className="td">,</span></div>
            <div className="tl"><span className="td">&nbsp;&nbsp;</span><span className="ty">"machine_learning"</span><span className="td">:</span><span className="tg">"90%"</span><span className="td">,</span></div>
            <div className="tl"><span className="td">&nbsp;&nbsp;</span><span className="ty">"deep_learning"</span><span className="td">:</span><span className="tg">"85%"</span></div>
            <div className="tl"><span className="td">{'}'}</span></div>
            <div className="tl" style={{ height: 20 }} />
            <div className="tl"><span className="tp">▶</span><span className="cursor-blink">█</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
