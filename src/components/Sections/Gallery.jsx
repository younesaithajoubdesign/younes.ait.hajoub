import React, { useState } from 'react';
import WorkModal from '../WorkModal';

export default function Gallery({ gallery }) {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section id="gallery">

      {/* Masonry Layout via CSS Columns */}
      <div style={{ columnCount: 3, columnGap: '24px' }}>
        {gallery.works.map((work, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedWork(work)}
            style={{
              breakInside: 'avoid',
              marginBottom: '24px',
              display: 'inline-block',
              width: '100%',
              cursor: 'pointer'
            }}
          >
            <div className="project-image" style={{ width: '100%', marginBottom: '12px' }}>
              <img src={work.image} alt={work.title} style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
            </div>
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>{work.title}</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{work.category}</p>
          </div>
        ))}
      </div>

      {selectedWork && (
        <WorkModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </section>
  );
}
