import SectionKicker from './SectionKicker.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

// Styled to look like a JSON file.
export default function Skills() {
  return (
    <section id="skills">
      <SectionKicker file="skills.json" />
      <SectionHeading before="My" accent="skills" />

      <div className="skills-file">
        <div className="line">{'{'}</div>

        {skillGroups.map((group) => (
          <div className="skills-cat" key={group.name}>
            <div className="catname">
              <span className="q">"</span>{group.name}<span className="q">"</span>:
            </div>
            <div className="tag-row">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="line" style={{ marginTop: 16 }}>{'}'}</div>
      </div>
    </section>
  );
}
