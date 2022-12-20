import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Button', () => {
  render(<App />);
    const button = screen.getByText(/Sign In/i);
    expect(button).toBeInTheDocument();
});
