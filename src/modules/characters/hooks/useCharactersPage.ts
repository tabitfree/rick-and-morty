import { CharactersPageQuery, useApi, type UseApiParams } from 'modules/api';

import { charactersPage } from '../queries';

export function useCharactersPage<TData = CharactersPageQuery>(
    page: Number,
    {
        options,
    }: {
        options?: UseApiParams<CharactersPageQuery, Error, TData>['options'];
    } = { options: undefined },
) {
    const { data, isLoading, error, isSuccess, refetch } = useApi<
        CharactersPageQuery,
        Error,
        TData
    >({
        key: ['characters'],
        query: charactersPage,
        options,
        variables: { page },
    });

    return { data, isLoading, error, isSuccess, refetch };
}
