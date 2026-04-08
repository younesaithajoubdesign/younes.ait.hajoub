export default function About({ data, skills, tools }) {
  return (
    <section id="about" style={{ scrollMarginTop: '100px' }}>
      <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{data.bio}</p>

      <div>
        <h3>Compétences</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '16px' }}>
          {skills.map((skillGroup, idx) => (
            <div key={idx} style={{ background: 'var(--light)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ marginBottom: '8px', color: 'var(--dark)', fontSize: '1rem', fontWeight: 600 }}>{skillGroup.category}</h4>
              <ul style={{ listStyleType: 'none', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.5 }}>
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div >
        <h3>Outils</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '16px' }}>
          {Object.entries(tools).map(([category, items], idx) => (
            <div key={idx}>
              <h4 style={{ textTransform: 'capitalize', marginBottom: '8px', opacity: 0.7 }}>
                {category.replace('_', ' ')}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {items.map((tool, i) => (
                  <span key={i} style={{ padding: '4px 12px', background: 'var(--border-color)', borderRadius: '100px', fontSize: '0.8rem', opacity: 0.9 }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
