// src/components/Footer.js
import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer section-padding primary-color">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-column">
          <img src="https://little-lemon-web.netlify.app/static/media/Logo_white.b477af431d6dd575f58806ba2015d6ba.svg" alt="Logo" className="footer-logo" /> {/* Replace with your logo */}
        </div>

        {/* Address Section */}
        <div className="footer-column">
          <h3>Address</h3>
          <p>123 Lemon Street, Fresh City, FL 54321</p>
          <p>Open Mon-Fri: 9AM - 9PM</p>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: contact@lemonrestro.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Connect With Us Section */}
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul className="footer-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Lemon Restro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
