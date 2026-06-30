import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';

import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Navbar from './components/Navbar';
import ParallaxStars from './components/ParallaxStars';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div style={{ background: '#000000' }}>
      {/* Fixed parallax star-field — lives at z-index 0 behind all content */}
      <ParallaxStars speed={0.8} opacity={0.65} />

      {/* Fixed Noir Navigation */}
      <Navbar />

      <main>
        {/* Full-screen immersive hero with scroll parallax */}
        <Hero />

        {/* Manifesto — 100vh dark statement section */}
        <Manifesto />

        {/* Skills — black bg, monochrome bars */}
        <Skills />

        {/* Projects — white bg, interactive noir cards */}
        <Projects />

        {/* Coding Profiles — zinc bg, live stats */}
        <CodingProfiles />

        {/* Certificates — black bg, grid cards */}
        <Certificates />

        {/* Contact — zinc bg, minimal form */}
        <Contact />
      </main>

    </div>
  );
}

export default App;
