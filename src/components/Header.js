// src/components/Header.js
import React from 'react';
import '../styles.css'; 

const Header = () => {
  return (
    <header className="header section-padding">
      <div className="logo">
        <img src="https://little-lemon-web.netlify.app/static/media/Logo.2ff8591bab2e96129ec15171b2fa759f.svg" alt="Logo" className="logo-img" /> 
    </div>
      {/* Navigation Links */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
