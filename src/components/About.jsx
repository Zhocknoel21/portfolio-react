import SectionKicker from './SectionKicker.jsx';
import FocusCard from './FocusCard.jsx';
import { focusAreas } from '../data/portfolio.js';
import { asset } from '../utils/asset.js';

export default function About() {
  return (
    <section id="about">
      <SectionKicker file="about.md" />
      <div className="about-grid">
        <div className="about-mark">
          <img src={asset('assets/profile.png')} alt="Portrait of Noel" />
        </div>

        <div>
          <h2 className="sec-head" style={{ marginBottom: 0 }}>
            About <span className="accent">me</span>
          </h2>
          <div className="about-copy" style={{ marginTop: 16 }}>
            <p>
              I'm a Computer Science student interested in web development, software development,
              and database systems. I enjoy turning ideas into functional, user-friendly
              applications while continuously learning new technologies.
            </p>
            <p>
              Most of what I know, I've picked up by building — reading documentation, breaking
              things, and fixing them again. That habit is what keeps me moving from coursework
              into real projects.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <FocusCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
