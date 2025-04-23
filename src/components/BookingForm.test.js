import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} onDateChange={() => {}} />);
  const headingElement = screen.getByText(/Book a Reservation/i);
  expect(headingElement).toBeInTheDocument();
});

test('calls onDateChange when date is selected', () => {
  const mockOnDateChange = jest.fn();
  render(<BookingForm availableTimes={['12:00 PM', '2:00 PM']} onDateChange={mockOnDateChange} />);
  const dateInput = screen.getByLabelText(/Date/i);
  fireEvent.change(dateInput, { target: { value: '2025-03-07' } });
  expect(mockOnDateChange).toHaveBeenCalledWith('2025-03-07');
});

test('renders available times correctly in the dropdown', () => {
  const availableTimes = ['12:00 PM', '2:00 PM', '4:00 PM'];
  render(<BookingForm availableTimes={availableTimes} onDateChange={() => {}} />);
  availableTimes.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});

test('form submits correctly', () => {
  const mockOnDateChange = jest.fn();
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<BookingForm availableTimes={['12:00 PM', '2:00 PM']} onDateChange={mockOnDateChange} />);
  
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-03-07' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '12:00 PM' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
  
  fireEvent.click(screen.getByText(/Submit Reservation/i));
  expect(mockAlert).toHaveBeenCalledWith('Reservation submitted!');
  
  mockAlert.mockRestore();
});
