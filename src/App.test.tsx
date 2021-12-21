import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('one budget up', () => {
  render(<App />);
  const linkElement = screen.getByText(/Grab Total Control of Your Cash Flow/i);
  expect(linkElement).toBeInTheDocument();
});
