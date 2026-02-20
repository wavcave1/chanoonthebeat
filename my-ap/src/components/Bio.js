import React from 'react';
import './Bio.css';
function Bio() {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-container">
        <h2 className="bio-title">Chano On The Beat</h2>
        <div className="bio-content">
          <img className="bio-image" src= "/chano.jpg" alt="Chano On The Beat" />
          <div className="bio-copy">
            <p className="bio-text">
           In a city renowned for its rich musical legacy, ChanoOnTheBeat is quickly establishing himself as a driving force in Nashville’s evolving hip-hop landscape. The Nashville-based producer is recognized for crafting cinematic soundscapes anchored by commanding drum patterns and a seamless fusion of Southern trap energy with polished, industry-caliber production. His work strikes a rare balance between raw authenticity and refined precision, delivering records that resonate in the streets while meeting the highest commercial standards.
        </p>

        <p className="bio-text">
        With a steadily expanding catalog, Chano has collaborated with artists including Kenny Muney, Trapperman Dale, Eddie Valero, Starlito, Don Trip, and Lil Migo, solidifying his presence among respected Southern voices. More than a producer, he serves as a creative partner who shapes records around each artist’s strengths while maintaining a distinct and recognizable sonic identity. As his placements continue to grow, ChanoOnTheBeat represents a new generation of disciplined Southern producers building with intention, longevity, and undeniable momentum.
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
