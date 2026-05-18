import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">

          <div className="footer-section">
            <h3>Label</h3>
            {/* TODO: Replace with your label or team name */}
            <p className="label-name">[LABEL_NAME]</p>

            {/* TODO: Replace with your label logo — recommended size: 200×200px, PNG with transparent background preferred */}
            <img
              src="images/placeholder.jpg"
              alt="[LABEL_NAME] Logo"
              className="label-logo"
            />

            <p className="label-desc">Production Team</p>
            {/* TODO: Replace with your city and state */}
            <p className="label-desc">[CITY], [STATE]</p>

          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            {/* TODO: Replace with your primary contact email */}
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:you@yourdomain.com">
                you@yourdomain.com
              </a>
            </p>
            {/* TODO: Replace with your business/booking email */}
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:yourbusiness@email.com">
                yourbusiness@email.com
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Keep Up With Me</h3>
            <div className="social-links">
              {/* TODO: Replace with your Instagram profile URL */}
              <a
                href="https://www.instagram.com/[YOUR_INSTAGRAM_HANDLE]/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              {/* TODO: Replace with your YouTube channel URL */}
              <a
                href="https://www.youtube.com/@[YOUR_YOUTUBE_HANDLE]"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          {/* TODO: Replace [YEAR] and [ARTIST_NAME] with your copyright info */}
          <p>&copy; [YEAR] [ARTIST_NAME]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
