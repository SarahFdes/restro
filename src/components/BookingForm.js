import React, { useState, useEffect } from 'react';
import '../styles.css';

const BookingForm = ({ availableTimes, onDateChange }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: 'Birthday',
  });

  // Update available times when the date is changed
  useEffect(() => {
    if (formData.date) {
      onDateChange(formData.date);
    }
  }, [formData.date, onDateChange]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation details:', formData);
    alert('Reservation submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Reservation</h2>

      <div className="form-group">
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

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
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

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
