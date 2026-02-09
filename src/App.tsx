import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
