import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ConfirmBooking from './components/ConfirmBooking';

function App() {
  return (
    <React.Fragment>
      <Router>
          <div>
            <Routes> {/* Wrap all your routes inside <Routes> */}
              <Route path="/" element={<Homepage />} />
              <Route path="/confirmation" element={<ConfirmBooking />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/services" element={<div>Services Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
