import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { SocialLinks } from './social-links.tsx';

test.each([
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tom-bouquet/' },
  { name: 'GitHub', href: 'https://github.com/tombouquet' },
  { name: 'Email', href: 'mailto:contact@tombouquet.com' },
])('it links $name to $href', ({ name, href }) => {
  const view = render(<SocialLinks />);

  expect(view.getByRole('link', { name })).toHaveAttribute('href', href);
});
