import { useState } from 'react';
import { ImageViewerOsd } from './ImageViewerOsd.js';
import { ImageViewerHtml } from './ImageViewerHtml.js';
import { Button } from '../atom/button.js';

export function ImageViewerToggler(): JSX.Element {
  const [mode, setMode] = useState(true);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="shrink">
        <Button onClick={() => setMode((cur) => !cur)}>Toggle viewer mode</Button>
      </div>
      <div className="grow">{mode ? <ImageViewerOsd /> : <ImageViewerHtml />}</div>
    </div>
  );
}
