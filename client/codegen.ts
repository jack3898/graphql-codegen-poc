import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000",
  documents: "src/queries/*.graphql",
  emitLegacyCommonJSImports: false,
  generates: {
    "src/gql/hooks.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withComponent: true,
      },
    },
  },
};

export default config;
