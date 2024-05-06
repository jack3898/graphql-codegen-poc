/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type StateCreator } from 'zustand/vanilla';
import { type Viewer } from 'openseadragon';

export interface ViewerStore {
  viewer: Viewer | undefined;
  registerOsd: (osd: Viewer) => void;
  unregisterOsd: () => void;
  zoom: () => number;
}

export const osdViewerOperations: StateCreator<ViewerStore> = (set, get) => ({
  viewer: undefined,
  registerOsd(osd): void {
    set((state) => ({ ...state, viewer: osd }));
  },
  unregisterOsd() {
    get().viewer?.destroy();
    set((state) => ({ ...state, viewer: undefined }));
  },
  zoom(): number {
    return +(get().viewer?.viewport.getZoom() ?? 0).toFixed(1);
  }
});
