import { useAppStore } from '@/store/appStore.js';
import { Button } from '../atom/button.js';

export function ZoomControls(): JSX.Element {
  const zoomIn = useAppStore((store) => store.zoomIn);
  const zoomOut = useAppStore((store) => store.zoomOut);
  const zoom = useAppStore((store) => store.zoomPercent);

  return <ZoomControlsView zoom={zoom} zoomIn={zoomIn} zoomOut={zoomOut} />;
}

export function ZoomControlsView({
  zoom,
  zoomIn,
  zoomOut
}: {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
}): JSX.Element {
  return (
    <div className="inline-flex items-center gap-2">
      <Button className="size-6 p-0" onClick={() => zoomOut()}>
        -
      </Button>
      <span className="inline-block min-w-10">{zoom}%</span>
      <Button className="size-6 p-0" onClick={() => zoomIn()}>
        +
      </Button>
    </div>
  );
}
