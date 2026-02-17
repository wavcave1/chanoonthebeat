import React from 'react';
import './CatalogueSection.css';

function CatalogueSection() {
  const releases = [
    {
      id: 1,
      title: 'Album Name 1',
      artist: 'Your Name',
      date: '2024-01-20',
      cover: '🎵',
    },
    {
      id: 2,
      title: 'Single Release',
      artist: 'Your Name',
      date: '2024-01-10',
      cover: '🎵',
    },
    {
      id: 3,
      title: 'EP Collection',
      artist: 'Your Name',
      date: '2023-12-15',
      cover: '🎵',
    },
    {
      id: 4,
      title: 'Collaborations',
      artist: 'Featuring Artists',
      date: '2023-11-30',
      cover: '🎵',
    },
    {
      id: 5,
      title: 'Remix Pack',
      artist: 'Your Name',
      date: '2023-11-10',
      cover: '🎵',
    },
    {
      id: 6,
      title: 'Live Sessions',
      artist: 'Your Name',
      date: '2023-10-25',
      cover: '🎵',
    },
  ];

  return (
    <section id="catalogue" className="catalogue-section">
      <div className="catalogue-container">
        <h2 className="catalogue-title">Catalogue & Releases</h2>
        <p className="catalogue-subtitle">Explore all my music releases</p>
        
        <div className="releases-grid">
          {releases.map((release) => (
            <div key={release.id} className="release-card">
              <div className="release-cover">{release.cover}</div>
              <div className="release-info">
                <h3>{release.title}</h3>
                <p className="release-artist">{release.artist}</p>
                <p className="release-date">{release.date}</p>
                <button className="listen-button">Listen Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CatalogueSection;
