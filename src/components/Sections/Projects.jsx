import ProjectCard from '../ProjectCard';

export default function Projects({ projects, onSelectProject }) {
  return (
    <section id="projects">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
}
