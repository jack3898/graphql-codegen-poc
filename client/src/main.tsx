import { createRoot } from "react-dom/client";
import { GraphQLProvider } from "./Apollo.js";
import { QueryComponent } from "./QueryComponent.js";

const root = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
    <GraphQLProvider>
      <main className="p-4">
        <QueryComponent />
      </main>
    </GraphQLProvider>
  );
}
