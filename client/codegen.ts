import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000',
  documents: 'src/queries/*.graphql',
  emitLegacyCommonJSImports: false,
  generates: {
    'src/gql/hooks.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        {
          // To be honest, we might as well ignore linting for generated files
          // But this is a POC
          add: {
            content: '/* eslint-disable @typescript-eslint/explicit-function-return-type */'
          }
        }
      ],
      config: {
        withComponent: true
      },
      hooks: {
        // Again, we should ignore this in the linter
        afterOneFileWrite: ['eslint --fix']
      }
    }
  }
};

export default config;
