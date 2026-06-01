import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import profile from '../data/profile.json';
import sectionsConfig from '../data/sections.json';

function Navigation({ isLoggedIn, onLogout }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const navSections = useMemo(() => {
    return sectionsConfig.sections
      .filter(s => s.enabled && s.navLabel)
      .sort((a, b) => a.order - b.order);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo bbh-bogle-regular" onClick={scrollToTop}>
          <img src={profile.logo} alt={`${profile.brandName} logo`} className="nav-logo-image" />
          {profile.brandName}
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={scrollToTop}>
              Home
            </Link>
          </li>

          {navSections.map(section => (
            <li key={section.id} className="nav-item">
              <a href={`#${section.anchor}`} className="nav-link">
                {section.navLabelMobile ? (
                  <>
                    <span className="nav-desktop">{section.navLabel}</span>
                    <span className="nav-mobile">{section.navLabelMobile}</span>
                  </>
                ) : (
                  section.navLabel
                )}
              </a>
            </li>
          ))}

          {/*} {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link nav-link-signup">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link nav-link-logout">
                Logout
              </button>
            </li>
          ) }*/}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
