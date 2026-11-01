import SectionKicker from './SectionKicker.jsx';
import Terminal from './Terminal.jsx';
import { asset } from '../utils/asset.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div>
          <SectionKicker file="home.tsx" />
          <h1>
            <span className="hi">Hi, I'm</span>
            <span className="name">Noel</span>
            <span className="role">Computer Science student &amp; aspiring web developer</span>
          </h1>
          <p className="lede">
            I enjoy creating websites, applications, and technology-based projects — and I'm
            continuously sharpening my programming and problem-solving skills along the way.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-solid">View my projects</a>
            <a href="#contact" className="btn btn-ghost">
              Contact me <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={asset('assets/hero.png')} alt="Full-body portrait of Noel" />
        </div>

        <Terminal />
      </div>
    </section>
  );
}
