import { useEffect, useRef, useState } from 'react';

const Manifesto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="manifesto" ref={ref} className="noir-manifesto">
      <div className={`noir-manifesto-label${visible ? ' visible' : ''}`}>
        Philosophy
      </div>

      <p className={`noir-manifesto-text${visible ? ' visible' : ''}`}>
        Every pixel is intentional.{' '}
        <em>Every line of code,</em>{' '}
        deliberate. I build systems that think — and interfaces that feel.
      </p>

      <div className={`noir-manifesto-line${visible ? ' visible' : ''}`} />

      {/* ── About Bio ── */}
      <div className={`noir-manifesto-about${visible ? ' visible' : ''}`}>
        <span className="noir-manifesto-about-tag">About</span>
        <p className="noir-manifesto-about-text">
          My code has two settings: "still thinking" and "deployed." There's no in-between,
          because I genuinely don't know how to half-finish a problem — ask the 500+ DSA
          solutions, the published vision model, the live AI platform currently running without
          my supervision. I'm Arunkumar, and somewhere between training neural nets and arguing
          with PostgreSQL, I realized I wasn't just learning to code. I was just doing what I've
          always done: refusing to walk away from a puzzle.
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
