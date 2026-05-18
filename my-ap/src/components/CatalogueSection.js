import React, { useMemo } from 'react';
import './CatalogueSection.css';
import tracks from '../data/tracks.json';

function formatDate(iso) {
  // iso expected "YYYY-MM-DD"
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function CatalogueSection() {
  const sorted = useMemo(() => {
    return [...tracks].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  return (
    <section id="catalogue" className="catalogue-section">
      <div className="catalogue-container">
        <h2 className="catalogue-title">Production Credits</h2>
        <p className="catalogue-subtitle">
          Selected production work and collaborations.
        </p>

        <div className="credits-list">
          {sorted.map((release) => (
            <div key={release.id} className="credit-row">
              <div className="credit-title">
                <h3>{release.title}</h3>
                <p className="credit-artist">{release.artist}</p>
              </div>

              <div className="credit-date">
                {formatDate(release.date)}
              </div>

              {/*
              Future feature:
              <button className="listen-button">Listen Now</button>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogueSection;
