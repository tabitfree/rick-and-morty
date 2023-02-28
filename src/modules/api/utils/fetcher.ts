import { GraphQLClient, Variables } from 'graphql-request';

export const fetcher = async <T = any, V = Variables>(
    query: string,
    variables: V | undefined,
) => {
    const graphQLClient = new GraphQLClient(
        'https://rickandmortyapi.com/graphql',
    );

    return await graphQLClient.request<T, Variables>(query, variables);
};
