import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './components/HelloWorld/HelloWorld';

test('renders Hello Test component', () => {
  render(<HelloWorld name="Test"/>);
  const linkElement = screen.getByText(/hello test/i);
  console.log(linkElement?.outerHTML)
  expect(linkElement).toBeInTheDocument();
});
