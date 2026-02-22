import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoggedIn, onLogout }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo bbh-bogle-regular" onClick={scrollToTop}>
          <img src="/LOGO.jpeg" alt="Chano on the Beat logo" className="nav-logo-image" />
          chano on the beat
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={scrollToTop}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <a href="#vlogs" className="nav-link">
              Studio Content
            </a>
          </li>
          <li className="nav-item">
            <a href="#catalogue" className="nav-link">
              Credits
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>

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