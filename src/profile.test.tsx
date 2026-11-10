import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Profile } from './profile.tsx';

test('it shows the name as the page heading', () => {
  const view = render(<Profile />);

  expect(view.getByRole('heading', { level: 1 })).toHaveTextContent('Tom Bouquet');
});
