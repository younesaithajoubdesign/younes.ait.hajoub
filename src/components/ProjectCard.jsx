export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.cover} alt={project.title} />
      </div>
      <h2>{project.title}</h2>
      <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '16px' }}>{project.subtitle}</p>
      <p className="project-description" style={{ padding: '0 0 16px 0' }}>{project.description}</p>
      <button className="btn" onClick={onSelect}>Voir le projet</button>
    </div>
  );
}
