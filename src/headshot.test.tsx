import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Headshot } from './headshot.tsx';

test('it shows the headshot photo', () => {
  const view = render(<Headshot />);

  expect(view.getByRole('img', { name: 'Tom Bouquet' })).toBeInTheDocument();
});
