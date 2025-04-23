// Mock API functions for booking system
const getAvailableTimes = (date) => {
  // Mock available times
  const times = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  return Promise.resolve(times);
};

const bookTable = (formData) => {
  // Mock booking confirmation
  return Promise.resolve({
    success: true,
    message: 'Booking confirmed!',
    bookingDetails: formData
  });
};

// Make functions available globally
window.getAvailableTimes = getAvailableTimes;
window.bookTable = bookTable; 