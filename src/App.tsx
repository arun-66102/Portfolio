import { useEffect } from 'react';
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('grid-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let offset = 0;
    let animId: number;

    function drawGrid() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      offset = (offset + 0.3) % 60;

      const W = canvas.width;
      const H = canvas.height;
      const hor = H * 0.55;
      const vp = W / 2;

      // Vertical lines converging to vanishing point
      ctx!.strokeStyle = 'rgba(155,0,255,0.07)';
      ctx!.lineWidth = 1;
      const cols = 20;
      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * W;
        ctx!.beginPath();
        ctx!.moveTo(x, H);
        ctx!.lineTo(vp, hor);
        ctx!.stroke();
      }

      // Horizontal receding lines
      ctx!.strokeStyle = 'rgba(0,255,200,0.05)';
      for (let i = 0; i < 20; i++) {
        const t = i / 20;
        const y = hor + (H - hor) * Math.pow(t, 1.5);
        if (y > H) break;
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(W, y);
        ctx!.stroke();
      }

      // Animated sweep line
      const moveY = hor + (H - hor) * (offset / 60);
      ctx!.strokeStyle = 'rgba(155,0,255,0.20)';
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.moveTo(0, moveY);
      ctx!.lineTo(W, moveY);
      ctx!.stroke();

      animId = requestAnimationFrame(drawGrid);
    }

    drawGrid();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div style={{ background: '#04010d', minHeight: '100vh' }}>
      <canvas id="grid-canvas" />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <CodingProfiles />
        <div className="section-divider" />
        <Certificates />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
