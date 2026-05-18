import React from 'react';
import './Bio.css';
import profile from '../data/profile.json';

function Bio() {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-container">
        <h2 className="bio-title">{profile.artistName}</h2>
        <div className="bio-content">
          <img className="bio-image" src={profile.photo} alt={profile.artistName} />
          <div className="bio-copy">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="bio-text">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
