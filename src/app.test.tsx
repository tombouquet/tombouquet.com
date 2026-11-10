import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { App } from './app.tsx';

test('it shows the headshot next to the profile', () => {
  const view = render(<App />);

  expect(view.getByRole('img', { name: 'Tom Bouquet' })).toBeInTheDocument();
  expect(view.getByRole('heading', { level: 1 })).toHaveTextContent('Tom Bouquet');
});
