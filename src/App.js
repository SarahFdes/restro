import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Homepage from './components/Homepage';

function App() {
  return (
    <React.Fragment>
      <Router>
          <div>
            <Routes> {/* Wrap all your routes inside <Routes> */}
              <Route path="/" element={<Homepage />} />
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
