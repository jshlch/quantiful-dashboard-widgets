import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { useGet } from '../../hooks/useGet';
import Number from './';

// Mock the useGet hook to control its behavior
jest.mock('../../hooks/useGet');

// Mock data for testing
const mockData = {
  pokemon_species_details: [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
  ],
};

describe('List component', () => {
  // Mock the useGet hook implementation
  beforeEach(() => {
    useGet.mockReturnValue({
      getData: jest.fn(),
      data: mockData,
      isLoading: false,
    });
  });

  // Test case for rendering the component with data
  it('renders component with data', async () => {
    render(<Number title="Test Title" />);

    // Wait for the component to render
    await waitFor(() => {
      // Assertions for the rendered content
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(
        screen.getByText(mockData.pokemon_species_details.length)
      ).toBeInTheDocument();
    });
  });
});

cleanup();
