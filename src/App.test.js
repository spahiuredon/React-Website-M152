import { render, screen } from '@testing-library/react';
import Video from './App';
import App from './App';
import Video from './App'

test('renders learn react link', () => {
  render(<Video />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
