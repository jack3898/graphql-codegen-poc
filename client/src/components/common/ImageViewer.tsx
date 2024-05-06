import { createReactOpenSeadragon } from 'react-osd';
import { Button } from '../atom/button.js';
import { useState } from 'react';

const { OpenSeadragonViewer, useOpenSeadragon } = createReactOpenSeadragon({
  showZoomControl: false,
  showHomeControl: false,
  showFullPageControl: false,
  minZoomLevel: 0.2,
  maxZoomLevel: 3
});

export function ImageViewer(): JSX.Element {
  const viewer = useOpenSeadragon((state) => state.viewer);
  const [view, setView] = useState(true);

  console.log('render');

  return (
    <>
      <Button onClick={() => setView((cur) => !cur)}>Toggle OSD!</Button>
      {view && (
        <>
          <p>
            Zoom: <ImageViewerZoom />
          </p>
          <Button onClick={() => viewer?.viewport.zoomTo(1)}>Zoom to 1</Button>
          <Button
            onClick={() => {
              viewer?.addSimpleImage({ url: 'https://picsum.photos/200/300' });
              viewer?.addSimpleImage({ url: 'https://picsum.photos/200/301', y: 1.6 });
              viewer?.addSimpleImage({ url: 'https://picsum.photos/200/299', y: 1.6 * 2 });
            }}
          >
            Add an image!
          </Button>
          <OpenSeadragonViewer />
        </>
      )}
    </>
  );
}

function ImageViewerZoom(): JSX.Element {
  const zoom = useOpenSeadragon((state) => state.zoom());

  return <>{zoom}</>;
}
