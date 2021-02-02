import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Compte LinkedIn link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Compte LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});
