import { render, screen } from '@testing-library/react';
import ColumnTest from './';

// test('Column widget renders successfully', () => {
//   render(<ColumnTest heading="Test" />);
//   const element = screen.getByText(/test/i);
//   expect(element).toBeInTheDocument();
// });

describe('Column tests', () => {
  it('should contains the heading 1', () => {
    render(<ColumnTest />);
    const heading = screen.getByText(/test/i);
    expect(heading).toBeInTheDocument();
  });
});
