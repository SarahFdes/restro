import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import '../../src/api'; // Import the local API file


// Function to dynamically load external script
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();  // Resolve when the script is loaded
    script.onerror = (e) => reject(`Script load error: ${e}`);
    document.body.appendChild(script);
  });
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

 // Load the external API script dynamically
 useEffect(() => {
  const loadAPI = async () => {
    try {
      // Fix the cors issue.
      await loadScript('https://crossorigin.me/https://raw.githubusercontent.com/courseraap/capstone/main/api.js'); // Load the API script
      console.log('API script loaded successfully');

      // Check if the necessary functions are available
      if (typeof window.getAvailableTimes === 'function' && typeof window.bookTable === 'function') {
        console.log('API functions are ready to use.');
      } else {
        setError('API functions are not available.');
      }
    } 
    catch (err) {
      setError('Failed to load external API.');
      console.error(err.message);
    }
  };

  loadAPI();
}, []); // Run once on mount

// Fetch available times from the API when the date changes
useEffect(() => {
  if (!formData.date) return; // Don't fetch if no date is selected

  const fetchAvailableTimes = async () => {
    
    setLoading(true);
    setError('');
    try {
      console.log(window);
      // Wait for the script to load, then call getAvailableTimes from window object
      if (typeof window.getAvailableTimes === 'function') {
        
        console.log('Fetching available times for:', formData.date);  // Debug log
    
        const times = await window.getAvailableTimes(formData.date);

        if (times && Array.isArray(times)) {
          setAvailableTimes(times);  // Successfully set available times
        } else {
          setError('No available times for the selected date.');
        }
      } else {
        throw new Error('getAvailableTimes function is not available');
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(`Failed to load available times: ${err.message}`);
      console.error('Error fetching available times:', err);  // Debug log
    }
  };

  fetchAvailableTimes();
}, [formData.date]);

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

// Handle form submission to reserve a table
const handleSubmit = async (e) => {
  e.preventDefault();

  // Ensure the selected time is available
  if (!availableTimes.includes(formData.time)) {
    alert('Selected time is no longer available.');
    return;
  }

  try {
    // Wait for the script to load, then call bookTable from window object
    if (window.bookTable) {
      const bookingResponse = await window.bookTable(formData);
      if (bookingResponse.success) {
        // alert('Your reservation has been confirmed!');
        navigate('/confirmation');

      } else {
        alert('Booking failed. Please try again.');
      }
    } else {
      throw new Error('bookTable function is not available');
    }
  } catch (err) {
    alert('Failed to make reservation, please try again later.');
    console.error(err);
  }
};


  return (
    <div>
      <h2>Table Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            disabled={loading}
            required
          >
            <option value="">Select a Time</option>
            {loading ? (
              <option>Loading available times...</option>
            ) : error ? (
              <option>{error}</option>
            ) : (
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select an Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business Meeting">Business Meeting</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Book Reservation</button>
      </form>
  </div>
  );
};

export default BookingForm;
