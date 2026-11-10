import type { ReactElement } from 'react';
import { Headshot } from './headshot.tsx';
import { Profile } from './profile.tsx';

export function App(): ReactElement {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full animate-pulse bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] font-pulp" />
      <div className="h-screen items-center justify-center gap-16 space-y-10 p-10 md:container md:flex md:pb-64">
        <Headshot />
        <Profile />
      </div>
    </>
  );
}
