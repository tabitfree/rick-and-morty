import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: `https://rickandmortyapi.com/graphql`,
    documents: 'src/**/*.ts',
    generates: {
        'src/modules/api/types/graphql.ts': {
            plugins: ['typescript', 'typescript-operations'],
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};

export default config;
