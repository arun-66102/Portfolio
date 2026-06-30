import { useMemo } from 'react';

interface ParallaxStarsProps {
  /** Animation speed multiplier. Higher = faster. */
  speed?: number;
  /** Opacity of the star layers (0–1). Default 1. */
  opacity?: number;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Picks a star colour biased toward the portfolio palette. */
function starColor(): string {
  const r = Math.random();
  if (r < 0.30) return '#f2e8ff';     // soft white (30%)
  if (r < 0.65) return '#bf40ff';     // bright neon purple (35%)
  if (r < 0.95) return '#00ffcc';     // bright neon cyan (30%)
  return '#ffffff';                   // pure white (5%)
}

/**
 * Generates a CSS box-shadow string with `n` randomly placed dots.
 * Each dot gets an independent colour from the portfolio palette.
 */
function generateBoxShadows(n: number): string {
  const parts: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    parts.push(`${x}px ${y}px ${starColor()}`);
  }
  return parts.join(', ');
}

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * ParallaxStars — a fixed full-viewport star-field that lives behind all
 * portfolio content.  Three depth layers animate at different speeds to give a
 * genuine parallax feel.  Colours match the portfolio's purple / cyan palette.
 *
 * Render once at the root level (inside App) — no props required.
 */
export default function ParallaxStars({ speed = 1, opacity = 1 }: ParallaxStarsProps) {
  // Memoised so shadows are generated only once, not on every re-render.
  const shadowsSmall  = useMemo(() => generateBoxShadows(700), []);
  const shadowsMedium = useMemo(() => generateBoxShadows(200), []);
  const shadowsBig    = useMemo(() => generateBoxShadows(100), []);

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    background: 'transparent',
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity,
        overflow: 'hidden',
      }}
    >
      {/* Shared keyframe + layer-specific durations via inline <style> */}
      <style>{`
        @keyframes parallax-star-rise {
          from { transform: translateY(0px);     }
          to   { transform: translateY(-2000px); }
        }
      `}</style>

      {/* Radial atmosphere gradient — blends with --bg (#04010d) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 110%, rgba(90, 20, 200, 0.4) 0%, rgba(0, 255, 200, 0.1) 50%, transparent 80%)',
      }} />

      {/* ── Layer 1: Small stars — 700 dots, 1 px ── */}
      <div style={{
        ...baseStyle,
        width: 1, height: 1,
        boxShadow: shadowsSmall,
        animation: `parallax-star-rise ${50 / speed}s linear infinite`,
      }}>
        {/* Duplicate shifted 2000 px down so there is no gap when layer loops */}
        <div style={{
          position: 'absolute',
          top: 2000,
          width: 1, height: 1,
          background: 'transparent',
          boxShadow: shadowsSmall,
        }} />
      </div>

      {/* ── Layer 2: Medium stars — 200 dots, 2 px ── */}
      <div style={{
        ...baseStyle,
        width: 2, height: 2,
        boxShadow: shadowsMedium,
        animation: `parallax-star-rise ${100 / speed}s linear infinite`,
      }}>
        <div style={{
          position: 'absolute',
          top: 2000,
          width: 2, height: 2,
          background: 'transparent',
          boxShadow: shadowsMedium,
        }} />
      </div>

      {/* ── Layer 3: Big stars — 100 dots, 3 px ── */}
      <div style={{
        ...baseStyle,
        width: 3, height: 3,
        boxShadow: shadowsBig,
        animation: `parallax-star-rise ${150 / speed}s linear infinite`,
      }}>
        <div style={{
          position: 'absolute',
          top: 2000,
          width: 3, height: 3,
          background: 'transparent',
          boxShadow: shadowsBig,
        }} />
      </div>
    </div>
  );
}
