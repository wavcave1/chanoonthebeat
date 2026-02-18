import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Label</h3>
            <p className="label-name">Street Orchestra</p>
            <p className="label-desc">Production Team</p>
            <p className="label-desc">Nashville, TN</p>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:chano@chanoonthebeat.com">chano@chanoonthebeat.com</a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#facebook" className="social-link">
                Facebook
              </a>
              <a href="#twitter" className="social-link">
                Twitter
              </a>
              <a href="#instagram" className="social-link">
                Instagram
              </a>
              <a href="#youtube" className="social-link">
                YouTube
              </a>
              <a href="#spotify" className="social-link">
                Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Chano On The Beat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
