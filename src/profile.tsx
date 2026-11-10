import type { ReactElement } from 'react';
import { SocialLinks } from './social-links.tsx';

export function Profile(): ReactElement {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h1 className="-ml-2 text-5xl font-extrabold text-orange-600">Tom Bouquet</h1>
        <h2 className="mt-2 text-lg font-bold">Associate Consultant Developer at Pipelabs</h2>
        <p className="mt-4">
          I&apos;m an Associate Consultant Developer at Pipelabs, a Shopify agency, where I
          integrate ERP systems with Shopify to help clients streamline operations and scale their
          businesses.
        </p>
      </div>
      <SocialLinks />
    </div>
  );
}
