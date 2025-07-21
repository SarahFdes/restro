import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservation'); 
  };

  return (
    <section className="hero section-padding">
      <div className="hero-container">
        {/* First Column */}
        <div className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subheading">Chicago</h2>
          <p className="hero-description">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="reserve-button" onClick={handleClick}>Reserve a Table</button>
        </div>

        {/* Second Column - Image */}
        <div className="hero-image">
          <img
            src="https://little-lemon-web.netlify.app/static/media/restauranfood.762bb670cf9db85c1b61.png"
            alt="Restaurant"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
