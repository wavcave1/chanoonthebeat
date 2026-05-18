import React from ‘react’;
import ‘./Bio.css’;
function Bio() {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-container">
        {/* TODO: Replace with your artist/brand name */}
        <h2 className="bio-title">[ARTIST_NAME]</h2>
        <div className="bio-content">
          {/* TODO: Replace with your photo — recommended size: 400×400px or larger, square crop works best */}
          <img className="bio-image" src="images/placeholder.jpg" alt="[ARTIST_NAME]" />
          <div className="bio-copy">
            {/* TODO: Replace with your bio */}
            <p className="bio-text">
              [YOUR BIO HERE — Paragraph 1: Introduce yourself, your city, your sound, and what makes your production style unique.]
            </p>

            <p className="bio-text">
              [YOUR BIO HERE — Paragraph 2: List notable collaborators, credits, and your artistic vision going forward.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
