import { render, screen } from '@testing-library/react';
import ListTest from './';

test('List widget renders successfully', () => {
  render(<ListTest title="Test" />);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
