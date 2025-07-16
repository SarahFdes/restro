import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import MenuCards from './MenuCards';

function Homepage() {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <MenuCards />
        <About />
        <Footer />
    </React.Fragment>
  );
}

export default Homepage;
