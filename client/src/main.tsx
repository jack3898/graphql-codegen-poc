import { createRoot } from 'react-dom/client';
import { GraphQLProvider } from './Apollo.js';
import { App } from './App.js';
import React from 'react';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <GraphQLProvider>
        <App />
      </GraphQLProvider>
    </React.StrictMode>
  );
}
