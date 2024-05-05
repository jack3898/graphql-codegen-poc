import { createReactOsd } from 'react-osd';
import { Button } from '../atom/button.js';

const { OpenSeadragonViewer, useOpenSeadragon } = createReactOsd({
  showZoomControl: false,
  showHomeControl: false,
  showFullPageControl: false,
  minZoomLevel: 0.2,
  maxZoomLevel: 3
});

export function ImageViewer(): JSX.Element {
  const zoom = useOpenSeadragon((state) => state.getZoom());
  const setZoom = useOpenSeadragon((state) => state.setZoom);
  const addImage = useOpenSeadragon((state) => state.addImage);

  return (
    <>
      <p>Zoom: {zoom}</p>
      <Button onClick={() => setZoom(1)}>Zoom to 1</Button>
      <Button
        onClick={() => {
          addImage({ url: 'https://picsum.photos/200/300' });
          addImage({ url: 'https://picsum.photos/200/301', y: 1.6 });
          addImage({ url: 'https://picsum.photos/200/299', y: 1.6 * 2 });
        }}
      >
        Add an image!
      </Button>
      <OpenSeadragonViewer />
    </>
  );
}

export { OpenSeadragonViewer, useOpenSeadragon };
