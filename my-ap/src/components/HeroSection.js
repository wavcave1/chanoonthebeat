import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
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
          // Display only top 10
          setCredits(result.data.slice(0, 10));
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
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">THE CATALOG</h1>
        <p className="hero-subtitle">Production credits spanning charting releases and industry recognition.</p>
        <a href="#catalogue" className="hero-button">
          Explore Now
        </a>
      </div>
      <div className="hero-images">
        <div className="image-grid">
          {loading ? (
            <p>Loading credits...</p>
          ) : error ? (
            <p>Error loading credits: {error}</p>
          ) : credits.length > 0 ? (
            credits.map((credit) => (
              <div key={credit.id} className="image-placeholder">
                <img 
                  src={credit.imageUrl || credit.avatarUrl} 
                  alt={credit.title || credit.name}
                  className="credit-avatar"
                  title={credit.title || credit.name}
                />
              </div>
            ))
          ) : (
            <p>Chanoonthebeat is a talented rap producer from Nashville, known for his hard-hitting, signature sound that blends Southern trap energy with polished production. He has worked with prominent artists like Trapperman Dale, Eddie Valero, and a growing roster of talent, earning a reputation for crafting beats that elevate any project. With a relentless work ethic and a passion for creating music that resonates, Chano is quickly becoming a name to watch in the hip-hop scene.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
