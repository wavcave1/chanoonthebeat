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

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <div className="image-card">
          <img src="/images/stepbros.jpg" alt="Don Trip & Starlito" />
          <p>Don Trip & Starlito</p>
        </div>

        <div className="image-card">
          <img src="/images/slepton.jpeg" alt="Lil Migo" />
          <p>Lil Migo</p>
        </div>

        <div className="image-card">
          <img src="/images/eddie.jpeg" alt="Eddie Valero" />
          <p>Eddie Valero</p>
        </div>

        <div className="image-card">
          <img src="/images/tuneup.jpeg" alt="Kenny Muney" />
          <p>Kenny Muney</p>
        </div>
      </div>
</div>
      </div>
   
  );
}

export default HeroSection;
