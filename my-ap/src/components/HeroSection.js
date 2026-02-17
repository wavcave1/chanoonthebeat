import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Explore my music, vlogs, and releases</p>
        <a href="#catalogue" className="hero-button">
          Explore Now
        </a>
      </div>
      <div className="hero-images">
        <div className="image-grid">
          <div className="image-placeholder">Image 1</div>
          <div className="image-placeholder">Image 2</div>
          <div className="image-placeholder">Image 3</div>
          <div className="image-placeholder">Image 4</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
