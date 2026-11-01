import SectionKicker from './SectionKicker.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education">
      <SectionKicker file="education.md" />
      <div className="edu-card">
        <div className="edu-mark">{education.badge}</div>
        <div>
          <h3>{education.degree}</h3>
          <div className="school">{education.school}</div>
          <p>{education.text}</p>
        </div>
      </div>
    </section>
  );
}
