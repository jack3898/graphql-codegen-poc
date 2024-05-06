import { createReactOpenSeadragon } from 'react-osd';
import { Button } from '../atom/button.js';
import { useState } from 'react';
import { MouseTracker, Point } from 'openseadragon';
import { clamp } from '@/utils/clamp.js';

const minZoom = 0.2;
const maxZoom = 2;

const { OpenSeadragonViewer, useOpenSeadragon } = createReactOpenSeadragon(
  {
    showZoomControl: false,
    showHomeControl: false,
    showFullPageControl: false,
    panHorizontal: false,
    animationTime: 0.3,
    minZoomLevel: minZoom,
    maxZoomLevel: maxZoom,
    mouseNavEnabled: false,
    id: 'osd-renderer'
  },
  (id, viewer) => {
    new MouseTracker({
      element: id,
      scrollHandler: (event): void => {
        // @ts-expect-error - shift key DOES exist on the event
        if (event.originalEvent.shiftKey) {
          const oldZoom = viewer.viewport.getZoom();
          // @ts-expect-error - scroll DOES exist on the event
          const delta = event.scroll / 10;
          const newZoom = oldZoom + delta;

          viewer.viewport.zoomTo(clamp(minZoom, maxZoom, newZoom));
        } else {
          // @ts-expect-error - scroll DOES exist on the event
          const scrollY = viewer.viewport.deltaPointsFromPixels(new Point(0, -event.scroll * 40));

          viewer.viewport.panBy(new Point(0, scrollY.y));
        }
      },
      dblClickTimeThreshold: 1000
    });
  }
);

export function ImageViewer(): JSX.Element {
  const viewer = useOpenSeadragon((state) => state.viewer);
  const [view, setView] = useState(true);

  return (
    <div className="flex h-full flex-col gap-2">
      <Button onClick={() => setView((cur) => !cur)}>Toggle OSD!</Button>
      {view && (
        <>
          <div className="shrink">
            <p>
              Zoom: <ImageViewerZoom />
            </p>
            <Button
              onClick={() => {
                viewer?.addSimpleImage({ url: 'https://picsum.photos/200/300' });
                viewer?.addSimpleImage({ url: 'https://picsum.photos/200/301', y: 1.6 });
                viewer?.addSimpleImage({ url: 'https://picsum.photos/200/299', y: 1.6 * 2 });
              }}
            >
              Add imagery!
            </Button>
          </div>
          <OpenSeadragonViewer className="grow" />
        </>
      )}
    </div>
  );
}

function ImageViewerZoom(): JSX.Element {
  const zoom = useOpenSeadragon((state) => state.zoom());

  return <>{zoom}</>;
}
