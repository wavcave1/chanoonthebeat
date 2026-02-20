import React from 'react';
import './Bio.css';

function Bio() {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-container">
        <h2 className="bio-title">ChanoOnTheBeat</h2>
        <div className="bio-content">
          <img className="bio-image" src="/LOGO.jpeg" alt="ChanoOnTheBeat" />
          <div className="bio-copy">
            <p className="bio-text">
              In a city long celebrated for its musical heritage, ChanoOnTheBeat is emerging as one of the key
              figures shaping Nashville’s evolving hip-hop landscape. The Nashville-based producer has built a
              reputation for crafting hard-hitting records defined by cinematic melodies, commanding drum patterns,
              and a seamless fusion of Southern trap energy with polished, industry-caliber production. His sound
              strikes a balance between grit and refinement, delivering records that resonate in the streets while
              maintaining a level of detail and structure suited for major platforms.
            </p>

            <p className="bio-text">
              Chano’s rise has been marked by steady growth and calculated evolution. By prioritizing consistency
              and artistic development, he has carved out a distinct lane within the region’s rap scene. His
              growing list of collaborations speaks to his momentum and credibility, including work with Kenny
              Muney, Trapperman Dale, Eddie Valero, and respected Southern voices such as Starlito and Don Trip.
              Most recently, his release with Lil Migo further underscored his ability to align with artists who
              carry strong regional influence while contributing a sound that feels both current and timeless.
              Across each record, Chano maintains a recognizable sonic identity while adapting seamlessly to the
              artist in front of him.
            </p>

            <p className="bio-text">
              Beyond the technical elements, industry observers point to his collaborative mindset as a defining
              strength. Rather than simply supplying beats, Chano positions himself as a creative partner, shaping
              records around an artist’s strengths and helping bring their vision into sharper focus. That
              commitment to craftsmanship and collaboration has fueled a rapidly expanding catalog and strengthened
              his standing within Nashville’s growing hip-hop community.
            </p>

            <p className="bio-text">
              As his placements continue to grow and his sound evolves, ChanoOnTheBeat represents a new generation
              of Southern producers who are ambitious, disciplined, and intent on building something lasting. If
              current momentum is any indication, his presence in the industry is only set to expand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
