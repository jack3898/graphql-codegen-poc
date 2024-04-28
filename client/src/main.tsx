import { createRoot } from 'react-dom/client';
import { GraphQLProvider } from './Apollo.js';
import { App } from './App.js';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <GraphQLProvider>
      <main className="p-4">
        <App />
      </main>
    </GraphQLProvider>
  );
}
