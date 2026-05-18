import React from 'react';
import './HeroSection.css';
import profile from '../data/profile.json';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{profile.hero.title}</h1>
        <p className="hero-subtitle">{profile.hero.subtitle}</p>
        <a href="#catalogue" className="hero-button">
          {profile.hero.ctaLabel}
        </a>
      </div>
      <div className="hero-images">
        <div className="image-grid">
          {profile.hero.featuredArtists.map((artist, index) => (
            <div key={index} className="image-card">
              <img src={artist.image} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
