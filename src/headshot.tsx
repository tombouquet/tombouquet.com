import type { ReactElement } from 'react';
import { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import headshot from './assets/Tom-Headshot-Square.jpg';

const BLURHASH =
  '|EK12h001N}@vz57RP%MSg00%MaLRj%Ms:V[WBs:yrxa={IpE1xubbWBjF00t7smWWWBa#ozs.kC?vn%xZR*NGxZt7RjWBIARjRjxaNGj@soW;j[%gxaM{Nb-pe.S2axWBsoRjNas:V@WURjofX8bHofRjofxuWBs:ayWU';

export function Headshot(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative order-last mx-auto size-64 shrink-0 drop-shadow-xl">
      {loaded ? null : (
        <BlurhashCanvas
          hash={BLURHASH}
          width={256}
          height={256}
          punch={1}
          className="rounded-full"
        />
      )}
      <img
        src={headshot}
        onLoad={() => {
          setLoaded(true);
        }}
        className={`h-full w-full rounded-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        alt="Tom Bouquet"
      />
    </div>
  );
}
