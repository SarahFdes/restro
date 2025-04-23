import React, { useState} from 'react';
import BookingForm from './BookingForm';


const Booking = () => {
  const [availableTimes] = useState([]);
  const [ setSelectedDate] = useState('');

  // Fetch available times when the selected date changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // useEffect(() => {
  //   if (selectedDate) {
  //     fetchAPI(selectedDate)
  //       .then((times) => {
  //         setAvailableTimes(times); // Set the available times once fetched
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching available times:', error);
  //       });
  //   }
  // }, [selectedDate]); // Fetch times when selectedDate changes

  return (
    <React.Fragment>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
      />
    </React.Fragment>
  );
};

export default Booking;
