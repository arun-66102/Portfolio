import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen mesh-bg">
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
