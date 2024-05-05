import openSeadragon from 'openseadragon';
import { useEffect } from 'react';

export function OpenSeadragonCanvas({ id }: { id: string }): JSX.Element {
  useEffect((): (() => void) => {
    const canvas = document.createElement('canvas');
    const viewer = openSeadragon({ id });

    viewer.addSimpleImage({
      url: 'https://picsum.photos/200/300'
    });

    return (): void => {
      canvas.remove();
      viewer.destroy();
    };
  }, [id]);

  return (
    <div id={id} style={{ height: '100%' }}>
      {/* OSD will be mounted here via the useEffect */}
    </div>
  );
}
