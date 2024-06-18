import { render, screen } from '@testing-library/react';
import File from '../src/File';

test('File component, given name prop, renders correctly', () => {
  render(<File name="File123"/>);
  expect(screen.queryByText(/File123/)).toBeInTheDocument();
});
