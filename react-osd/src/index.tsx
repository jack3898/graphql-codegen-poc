/* eslint-disable @typescript-eslint/explicit-function-return-type */
import newOpenSeadragon, {
  type Options,
  type SimpleImageOptions,
  type Viewer
} from 'openseadragon';
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

export interface ViewerStore {
  viewer: Viewer | undefined;
  registerOsd: (osd: Viewer) => void;
  getZoom: () => number;
  setZoom: (to: number) => void;
  addImage: (options: SimpleImageOptions) => void;
}

export function createReactOsd(osdOptions: Options) {
  const { id = crypto.randomUUID(), ...restOfOsdOptions } = osdOptions;

  const store = createStore<ViewerStore>()((set, get) => ({
    /**
     * @private
     */
    viewer: undefined,
    registerOsd(osd): void {
      set((state) => ({ ...state, viewer: osd }));
    },
    getZoom(): number {
      const zoom = get().viewer?.viewport.getZoom() || 0;

      return +zoom.toFixed(1);
    },
    setZoom(to: number): void {
      get().viewer?.viewport.zoomTo(to);
    },
    addImage(options: SimpleImageOptions): void {
      get().viewer?.addSimpleImage(options);
    }
  }));

  function OpenSeadragonViewerComponent(): JSX.Element {
    useEffect(() => {
      const viewer = newOpenSeadragon({
        id,
        ...restOfOsdOptions
      });

      const updateViewportHandler = (): void => store.setState({});

      viewer.addHandler('update-viewport', updateViewportHandler);
      store.getState().registerOsd(viewer);

      return (): void => {
        viewer.destroy();
        viewer.removeHandler('update-viewport', updateViewportHandler);
      };
    }, []);

    return (
      <div id={id} style={{ height: '100%' }}>
        {/* OSD will be mounted here via the useEffect */}
      </div>
    );
  }

  function useOpenSeadragon<T>(selector: (state: ViewerStore) => T) {
    return useStore(store, selector);
  }

  return {
    OpenSeadragonViewer: OpenSeadragonViewerComponent,
    useOpenSeadragon
  };
}
