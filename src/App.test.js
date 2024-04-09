import { render, screen } from '@testing-library/react';
import {BookingPage} from './components/BookingPage';
import { inititalizeTimes} from './components/Main';
import { updateTimes} from './components/Main';



// test('inititalizeTimes', () => {
//  const resp = inititalizeTimes();
//  expect(resp).toStrictEqual({'availableTimes': ["17:00","18:00","19:00","20:00","21:00","22:00"]});
// });

// test('updateTimes', () => {
//   const resp = updateTimes();
//   expect(resp).toStrictEqual({'availableTimes': ["17:00","18:00","19:00","20:00","21:00","22:00"]});
//  });


test('renders learn react link', () => {
  const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
  const formvalues = {
    date: "test",
    time: "20:00",
    no_of_guests: 6,
    occasion: "Birthday"
}

  render(<BookingPage formvalues={formvalues}  availableTimes={availableTimes} />);
  const linkElement = screen.getByText(/Reserve your table/i);
  expect(linkElement).toBeInTheDocument();
});


