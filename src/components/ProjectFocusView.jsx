export default function ProjectFocusView({ project, onReturn }) {
  return (
    <div className="project-focus-view" style={{ minHeight: '100vh', background: 'var(--light)', padding: '32px 16px', paddingTop: '0px' }}>
      <div className="project-container" style={{ maxWidth: '736px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'sticky', top: '0', zIndex: '1000', padding: '32px 8px', backdropFilter: 'blur(20px)', backgroundColor: 'var(--light)' }}>
          <button onClick={onReturn} className="btn" style={{ background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>&larr;</span> Retour aux projets
          </button>
        </div>

        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{project.title}</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>{project.subtitle}</p>
          </div>

          {project.cover2 ? (
            <img src={project.cover2} alt="Cover 2" style={{ width: '100%', borderRadius: '8px' }} />
          ) : (
            <img src={project.cover} alt="Cover 1" style={{ width: '100%', borderRadius: '8px' }} />
          )}

          <p style={{ lineHeight: 1.6, fontSize: '1.1rem', opacity: 0.9 }}>{project.description}</p>

          {(project.problem || project.solution) && (
            <div style={{ display: 'grid', gap: '32px' }}>
              {project.problem && (
                <div className="wrapper">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Problème</h2>
                  <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="wrapper">
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Solution</h2>
                  <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {project.visuels && project.visuels.length > 0 && (
            <div className="wrapper" id="visuels">
              <h2 style={{ marginBottom: '16px' }}>Visuels</h2>
              <div className="images" style={{ display: 'grid', gap: '24px' }}>
                {project.visuels.map((v, i) => (
                  <img key={i} src={v.src} alt={v.alt} style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
