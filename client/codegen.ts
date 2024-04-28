import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // Server introspection should be enabled for this to work.
  // You can load a backend schema from the filesystem.
  // But for simplicity, I don't see it as bad that we run the generate script out of CI
  // only when we need to and load it over the gateway then add it to source control
  schema: 'http://localhost:3000',
  documents: 'src/graphql/*-{query,mutation,fragment}.graphql',
  emitLegacyCommonJSImports: false,
  generates: {
    'src/graphql/generated-hooks.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        {
          // To be honest, we might as well ignore linting for generated files
          // But this is a POC
          // Still kinda cool it tries to be as compliant as possible with our eslint/prettier config
          add: {
            content: `/* eslint-disable @typescript-eslint/explicit-function-return-type */
            /* eslint-disable @typescript-eslint/no-unused-vars */`
          }
        }
      ],
      config: {
        withComponent: true
      },
      hooks: {
        // Again, we should ignore linting generated files
        afterOneFileWrite: ['eslint --fix']
      }
    }
  }
};

export default config;
