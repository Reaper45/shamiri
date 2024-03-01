
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: ['app/**/*.gql', 'app/**/*.graphql'],
  generates: {
    'app/gql/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: { withHooks: true }
    },
  }
};

export default config;
