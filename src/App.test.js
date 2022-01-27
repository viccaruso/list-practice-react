import { render, screen } from '@testing-library/react';
import PolarItem from './PolarItem';

test('renders PolarItem to screen with a flavor of "Cranberry Clementine"', () => {
  render(<PolarItem flavor={'Cranberry Clementine'} />);
  const flavor = screen.getByText('Cranberry Clementine');
  expect(flavor).toBeInTheDocument();
});
