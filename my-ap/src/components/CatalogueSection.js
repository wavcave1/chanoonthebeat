import React, { useState, useEffect } from 'react';
import './CatalogueSection.css';

function CatalogueSection() {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setLoading(true);
        const profileId = '0676f4ef-0134-4a05-b15d-24ac6cb6dd58';
        const response = await fetch(
          `https://api.developer.muso.ai/v4/profiles/${profileId}/credits?sort=popularity&direction=DESC&page=1`
        );
        const result = await response.json();
        
        if (result.result === 'ok' && result.data) {
          setCredits(result.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, []);

  return (
    <section id="catalogue" className="catalogue-section">
      <div className="catalogue-container">
        <h2 className="catalogue-title">Credits & Releases</h2>
        <p className="catalogue-subtitle">Explore all production credits</p>
        
        {loading ? (
          <p>Loading credits...</p>
        ) : error ? (
          <p>Error loading credits: {error}</p>
        ) : (
          <div className="releases-grid">
            {credits.map((credit) => (
              <div key={credit.id} className="release-card">
                <div className="release-cover">
                  <img 
                    src={credit.imageUrl || credit.avatarUrl} 
                    alt={credit.title || credit.name}
                    className="credit-image"
                  />
                </div>
                <div className="release-info">
                  <h3>{credit.title || credit.name}</h3>
                  <p className="release-artist">{credit.artist || 'N/A'}</p>
                  <p className="release-date">{credit.releaseDate || credit.date || 'N/A'}</p>
                  <button className="listen-button">View Credit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CatalogueSection;
