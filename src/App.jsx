import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import { SECTION_IDS } from './data/portfolio.js';

export default function App() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <Navbar activeId={activeId} />
      <main className="wrap">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CtaBanner />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
