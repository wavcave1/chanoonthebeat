import React from 'react';
import './VlogsSection.css';

function VlogsSection() {
  const vlogs = [
    {
      id: 1,
      title: 'My Music Journey',
      date: '2024-01-15',
      thumbnail: '🎬',
    },
    {
      id: 2,
      title: 'Behind the Scenes',
      date: '2024-01-10',
      thumbnail: '🎬',
    },
    {
      id: 3,
      title: 'Studio Life',
      date: '2024-01-05',
      thumbnail: '🎬',
    },
    {
      id: 4,
      title: 'On Tour',
      date: '2023-12-28',
      thumbnail: '🎬',
    },
  ];

  return (
    <section id="vlogs" className="vlogs-section">
      <div className="vlogs-container">
        <h2 className="vlogs-title">Latest Studio Content</h2>
        <p className="vlogs-subtitle">Watch my latest videos and updates</p>
        
        <div className="vlogs-grid">
          {vlogs.map((vlog) => (
            <div key={vlog.id} className="vlog-card">
              <div className="vlog-thumbnail">{vlog.thumbnail}</div>
              <div className="vlog-content">
                <h3>{vlog.title}</h3>
                <p className="vlog-date">{vlog.date}</p>
                <button className="vlog-button">Watch</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VlogsSection;
