export default function ProjectCard({ id, index, title, description, stack, status }) {
  return (
    <div className="proj" id={id || undefined}>
      <div className="icon">{String(index + 1).padStart(2, '0')}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="stack">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="status">{status}</div>
    </div>
  );
}
