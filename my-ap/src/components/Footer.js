import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Label</h3>
            <p className="label-name">Your Label Name</p>
            <p className="label-desc">Creating amazing music and content</p>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+1234567890">+1 (234) 567-8900</a>
            </p>
            <p>
              <strong>Address:</strong> <br />
              123 Music Street <br />
              City, State 12345
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
          <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
