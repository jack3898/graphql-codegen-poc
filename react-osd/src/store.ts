/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Viewer } from 'openseadragon';
import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface ViewerStore {
  viewer: Viewer;
  zoom: () => number;
}

export function createViewerStore(viewer: Viewer) {
  const store = createStore<ViewerStore>()(
    immer((_, get) => ({
      viewer,
      zoom(): number {
        return get().viewer.viewport.getZoom();
      }
    }))
  );

  return {
    store,
    useStore: <T>(selector: (state: ViewerStore) => T) => useStore(store, selector)
  };
}
