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

            {/* Logo Added Here */}
            <img
              src="/images/so-logo-2.jpg"
              alt="Street Orchestra Logo"
              className="label-logo"
            />
            
            <p className="label-desc">Production Team</p>
            <p className="label-desc">Nashville, TN</p>
            <p className="label-desc">StreetOrchestraBusiness@Gmail.com</p>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:chano@chanoonthebeat.com">
                chano@chanoonthebeat.com
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Keep Up With Me</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/chanoonthebeat/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@chanoonthebeat"
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
          <p>&copy; 2026 Chano On The Beat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
