import { createRoot } from "react-dom/client";
import { GraphQLProvider } from "./Apollo.js";
import { QueryComponent } from "./QueryComponent.js";

const root = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
    <GraphQLProvider>
      <QueryComponent />
    </GraphQLProvider>
  );
}
