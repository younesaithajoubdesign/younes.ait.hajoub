export default function Contact({ contact }) {
  return (
    <section id="contact" style={{ paddingBottom: '64px' }}>
      <p style={{ opacity: 0.8, marginBottom: '24px' }}>
        Vous avez un projet en tête ou vous souhaitez simplement échanger ? N'hésitez pas à me contacter via mon email ou sur mes réseaux sociaux !
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
        <a href={`mailto:${contact.email}`} className="btn" style={{ padding: '12px 24px' }}>Envoyer un email</a>
      </div>

      <h3>Mes Réseaux</h3>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <a href={`https://${contact.profiles.behance}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Behance</a>
        <a href={`https://${contact.profiles.github}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>GitHub</a>
        <a href={`https://${contact.profiles.linkedin}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a>
        <a href={`https://${contact.profiles.instagram}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Instagram</a>
      </div>
    </section>
  );
}
