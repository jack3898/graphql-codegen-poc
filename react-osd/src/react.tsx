/* eslint-disable @typescript-eslint/explicit-function-return-type */
import newOpenSeadragon, { type Options } from 'openseadragon';
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';
import { osdViewerOperations, type ViewerStore } from './store.js';

/**
 * An OpenSeadragon (OSD) reactive API for internal changes to the viewer.
 *
 * Powered by Zustand, the zustand store recomputes when changes are detected in the viewport.
 *
 * *How to use:*
 *
 * Run this factory function in your React app: with any options to customise the OSD:
 *
 * ```ts
 * const osd = createReactOpenSeadragon({
 *     minZoomLevel: 0.2,
 *     maxZoomLevel: 3
 * });
 * ```
 *
 * It will return a component that renders the canvas, and a hook that is linked to the canvas.
 *
 * ```ts
 * const { OpenSeadragonViewer, useOpenSeadragon } = osd;
 * ```
 *
 * Then you can render the component `<OpenSeadragonViewer />` and use the hook `useOpenSeadragon` to watch internal changes to the viewer.
 *
 * Currently, there is no use of context. Placement of the component and hook is completely loose.
 */
export function createReactOpenSeadragon(osdOptions: Options) {
  const { id = crypto.randomUUID(), ...restOfOsdOptions } = osdOptions;

  const store = createStore<ViewerStore>()((...ops) => ({ ...osdViewerOperations(...ops) }));

  function OpenSeadragonViewerComponent(): JSX.Element {
    useEffect(() => {
      const viewer = newOpenSeadragon({ id, ...restOfOsdOptions });

      if (store.getState().viewer) {
        throw Error('You cannot render more than one OSD viewer at a time.');
      }

      store.getState().registerOsd(viewer);

      viewer.addHandler('update-viewport', (): void => store.setState({}));

      console.log('OSD has been created');

      return (): void => {
        console.log('OSD has been destroyed');
        store.getState().unregisterOsd();
      };
    }, []);

    return (
      <div id={id} style={{ height: '100%' }}>
        {/* OSD canvas will be mounted here via the useEffect */}
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
