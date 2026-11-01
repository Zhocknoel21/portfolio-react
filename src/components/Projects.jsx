import SectionKicker from './SectionKicker.jsx';
import SectionHeading from './SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects">
      <SectionKicker file="projects/" />
      <SectionHeading before="My" accent="projects" />

      <div className="proj-list">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i} {...project} />
        ))}
      </div>
    </section>
  );
}
