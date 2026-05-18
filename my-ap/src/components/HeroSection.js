import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        {/* TODO: Replace with your section headline */}
        <h1 className="hero-title">THE CATALOG</h1>
        {/* TODO: Replace with your subtitle/tagline */}
        <p className="hero-subtitle">[YOUR TAGLINE OR SUBTITLE HERE]</p>
       <a href="#catalogue" className="hero-button">
        Explore Now
      </a>
      </div>
    <div className="hero-images">
  <div className="image-grid">
        {/* TODO: Replace each image src and label with your featured collaborators */}
        {/* Recommended image size: 400×400px or 1:1 square ratio */}
        <div className="image-card">
          {/* TODO: Replace with your photo/image */}
          <img src="images/placeholder.jpg" alt="[FEATURED_ARTIST_1]" />
          <p>[FEATURED_ARTIST_1]</p>
        </div>

        <div className="image-card">
          {/* TODO: Replace with your photo/image */}
          <img src="images/placeholder.jpg" alt="[FEATURED_ARTIST_2]" />
          <p>[FEATURED_ARTIST_2]</p>
        </div>

        <div className="image-card">
          {/* TODO: Replace with your photo/image */}
          <img src="images/placeholder.jpg" alt="[FEATURED_ARTIST_3]" />
          <p>[FEATURED_ARTIST_3]</p>
        </div>

        <div className="image-card">
          {/* TODO: Replace with your photo/image */}
          <img src="images/placeholder.jpg" alt="[FEATURED_ARTIST_4]" />
          <p>[FEATURED_ARTIST_4]</p>
        </div>
      </div>
</div>
      </div>
   
  );
}

export default HeroSection;
