// src/components/Header.js
import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <a href="/">
          <img src="../logo.png" alt="Logo" className="logo-img" /> {/* Replace with your actual logo */}
        </a>
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
