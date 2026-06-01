import React from 'react';
import './Footer.css';
import socials from '../data/socials.json';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">

          <div className="footer-section">
            <h3>{socials.footerSections?.label?.title || 'Label'}</h3>
            <p className="label-name">{socials.label.name}</p>
            <img
              src={socials.label.logo}
              alt={`${socials.label.name} Logo`}
              className="label-logo"
            />
            <p className="label-desc">{socials.footerSections?.label?.description || 'Production Team'}</p>
            <p className="label-desc">{socials.label.city}, {socials.label.state}</p>
          </div>

          <div className="footer-section">
            <h3>{socials.footerSections?.contact?.title || 'Contact'}</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${socials.contact.primaryEmail}`}>
                {socials.contact.primaryEmail}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${socials.contact.businessEmail}`}>
                {socials.contact.businessEmail}
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h3>{socials.footerSections?.social?.title || 'Keep Up With Me'}</h3>
            <div className="social-links">
              <a
                href={socials.social.instagram}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href={socials.social.youtube}
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
          <p>&copy; {socials.copyright.year} {socials.copyright.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
