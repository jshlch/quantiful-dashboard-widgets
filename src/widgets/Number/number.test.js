import { render, screen } from '@testing-library/react';
import NumberTest from './';

test('Number widget renders successfully', () => {
  render(<NumberTest title="Test" />);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
