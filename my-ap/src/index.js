import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (typeof window !== 'undefined' && window.localStorage.getItem('debugOverflow') === '1') {
  const flagOverflowingElements = () => {
    document.querySelectorAll('[data-overflowing]').forEach((element) => {
      element.removeAttribute('data-overflowing');
    });

    document.querySelectorAll('body *').forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.right > window.innerWidth || rect.left < 0) {
        element.setAttribute('data-overflowing', 'true');
      }
    });
  };

  window.addEventListener('load', flagOverflowingElements);
  window.addEventListener('resize', flagOverflowingElements);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
