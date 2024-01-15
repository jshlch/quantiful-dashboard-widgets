import { render, screen, cleanup } from '@testing-library/react';
import ColumnTest from './index';

const mockWidgets = [
  {
    title: 'Pokemon Colours',
    subtitle: 'List of all the colours',
    type: 'list',
    api: 'https://pokeapi.co/api/v2/pokemon-color/',
  },
  {
    title: 'Pokemon Gender',
    subtitle: 'List of all the genders',
    type: 'list',
    api: 'https://pokeapi.co/api/v2/gender/',
  },
];

describe('Column component', () => {
  it('should contains the "test heading" as a heading', () => {
    render(<ColumnTest heading="Test Heading" widgets={null} />);
    expect(screen.getByText(/test heading/i)).toBeInTheDocument();
  });

  it('should contains the "Pokemon Colours" column', () => {
    render(<ColumnTest heading="Test Heading" widgets={mockWidgets} />);
    expect(screen.getByText(/Pokemon Colours/i)).toBeInTheDocument();
  });

  it('should contains the "Pokemon Gender" column', () => {
    render(<ColumnTest heading="Test Heading" widgets={mockWidgets} />);
    expect(screen.getByText(/Pokemon Gender/i)).toBeInTheDocument();
  });
});

cleanup();
