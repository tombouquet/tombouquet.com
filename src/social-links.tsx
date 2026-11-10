import type { ReactElement } from 'react';
import githubIcon from './assets/github.svg';
import linkedInIcon from './assets/linkedin.svg';
import mailIcon from './assets/mail.svg';

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: linkedInIcon, href: 'https://www.linkedin.com/in/tom-bouquet/' },
  { name: 'GitHub', icon: githubIcon, href: 'https://github.com/tombouquet' },
  { name: 'Email', icon: mailIcon, href: 'mailto:contact@tombouquet.com' },
];

export function SocialLinks(): ReactElement {
  return (
    <div className="flex justify-center gap-4 md:justify-start">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group flex size-16 items-center justify-center rounded-full border-2 border-stone-300 bg-stone-100 transition-transform hover:-translate-y-1"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="size-6 opacity-75 transition-opacity group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}
