import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';

function Homepage() {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <About />
        <Footer />
    </React.Fragment>
  );
}

export default Homepage;
