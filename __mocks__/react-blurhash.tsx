import type { ReactElement } from 'react';

interface BlurhashCanvasProps {
  readonly className?: string;
}

export function BlurhashCanvas({ className }: BlurhashCanvasProps): ReactElement {
  return <canvas className={className} />;
}
