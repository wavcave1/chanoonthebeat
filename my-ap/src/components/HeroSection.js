import React from 'react';
import './HeroSection.css';

function HeroSection() {
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
