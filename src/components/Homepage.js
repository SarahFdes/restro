import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import BookingPage from './BookingPage';

function Homepage() {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <BookingPage />
        <Footer />
    </React.Fragment>
  );
}

export default Homepage;
