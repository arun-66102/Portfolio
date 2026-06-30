import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', '30% start'],
  });

  // Background scales OUT (zooms in = immersive depth)
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.27]);

  // Heading scales DOWN (recedes into screen)
  const headingScale = useTransform(scrollYProgress, [0, 1], [1.0, 0.89]);

  // Side label fades out
  const labelOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} className="noir-hero">
      {/* ── Layer 1: Background ── */}
      <motion.div
        className="noir-hero-bg"
        style={{ scale: bgScale }}
      />

      {/* ── Layer 2: Heading (recedes on scroll) ── */}
      <motion.div
        className="noir-hero-heading-wrap"
        style={{ scale: headingScale }}
      >
        <h1 className="noir-hero-heading">
          Arun<br />
          <em>kumar</em><br />
          KR
        </h1>

        {/* ── Layer 3: Side Label (fades on scroll) ── */}
        <motion.div
          className="noir-hero-side-label"
          style={{ opacity: labelOpacity }}
          aria-hidden="true"
        >
          ML Engineer &amp; AI Developer
        </motion.div>
      </motion.div>

      {/* ── Bottom: Scroll Hint ── */}
      <div className="noir-hero-scroll-wrap">
        <motion.div
          className="noir-hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="noir-hero-scroll-line" />
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
