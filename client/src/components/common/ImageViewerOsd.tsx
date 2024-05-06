import { createReactOpenSeadragon } from 'react-osd';
import { MouseTracker, Point } from 'openseadragon';
import { clamp } from '@/utils/clamp.js';
import { calculateNewZoom } from '@/utils/calculateNewZoom.js';
import { useLoggedInUserQuery } from '@/graphql/generated-hooks.js';

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
    mouseNavEnabled: false
  },
  (id, viewer) => {
    new MouseTracker({
      element: id,
      scrollHandler: (event): void => {
        // @ts-expect-error - shift key DOES exist on the event
        if (event.originalEvent.shiftKey) {
          // @ts-expect-error - scroll DOES exist on the event
          const newZoom = calculateNewZoom(viewer.viewport.getZoom(), event.scroll);

          viewer.viewport.zoomTo(clamp(minZoom, maxZoom, newZoom));
        } else {
          // @ts-expect-error - scroll DOES exist on the event
          const scrollY = viewer.viewport.deltaPointsFromPixels(new Point(0, -event.scroll * 100));

          viewer.viewport.panBy(new Point(0, scrollY.y));
        }
      }
    });
  }
);

export function ImageViewerOsd(): JSX.Element {
  const viewer = useOpenSeadragon((state) => state.viewer);
  useLoggedInUserQuery({
    onCompleted(data) {
      data.loggedInUser?.records.forEach((record, index) => {
        viewer?.addSimpleImage({ url: record.url, y: index * 1.9 });
      });
    }
  });

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="shrink">
        Zoom: <ImageViewerZoom />
      </div>
      <OpenSeadragonViewer className="grow" />
    </div>
  );
}

function ImageViewerZoom(): JSX.Element {
  const zoom = useOpenSeadragon((state) => state.zoom());

  return <>{zoom}</>;
}
