import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initialState = {
  availableTimes: [],
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return {
        ...state,
        availableTimes: action.times, // Update availableTimes based on action
      };
    default:
      return state;
  }
};

const Booking = () => {
  // Initialize availableTimes using useReducer
  const [state, dispatch] = useReducer(timesReducer, initialState);

  // Function to initialize available times (for now, it returns fixed times)
  const initializeTimes = () => {
    return ['12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];
  };

  // Function to handle updating available times based on selected date
  const updateTimes = (selectedDate) => {
    // For now, the available times are the same regardless of the date
    const times = initializeTimes();
    dispatch({ type: 'SET_TIMES', times });
  };

  return (
    <React.Fragment>
      <BookingForm availableTimes={state.availableTimes} onDateChange={updateTimes} />
    </React.Fragment>
    );
};

export default Booking;
