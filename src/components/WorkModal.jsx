import React, { useState } from 'react';

export default function WorkModal({ work, onClose }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="project-modal" onClick={(e) => { if (e.target.classList.contains('project-modal')) onClose() }}>
      <div className="project-container" style={{ maxWidth: '600px', height: 'auto', maxHeight: '90vh', gap: 0 }}>
        <div className="modal-header" style={{ border: 0 }}>
          <h1>{work.title}</h1>
          <button className="modal-close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--text-color)" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
        <div className="content" style={{ gap: '16px' }}>
          <img src={work.image} alt={work.title} style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border-color)' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--dark)', fontWeight: '600', opacity: 0.6 }}>{work.category}</span>
          </div>

          {work.description && <p style={{ fontSize: '1rem' }}>{work.description}</p>}

          {work.tools && work.tools.length > 0 && (
            <div style={{ marginTop: '16px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>Outils utilisés</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {work.tools.map((tool, i) => (
                  <span key={i} style={{ padding: '4px 12px', background: 'var(--border-color)', borderRadius: '100px', fontSize: '0.8rem', opacity: 0.9 }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {work.tags && work.tags.length > 0 && (
            <div style={{ marginTop: '16px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>Tags</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {work.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', opacity: 0.6 }}>#{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
