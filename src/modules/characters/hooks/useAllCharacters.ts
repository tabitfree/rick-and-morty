import { CharactersQuery, useApi, type UseApiParams } from 'modules/api';

import { allCharacters } from '../queries';

export function useAllCharacters<TData = CharactersQuery>(
    page: number,
    name: string,
    {
        options,
    }: {
        options?: UseApiParams<CharactersQuery, Error, TData>['options'];
    } = { options: undefined },
) {
    const { data, isLoading, error, isSuccess, refetch } = useApi<
        CharactersQuery,
        Error,
        TData
    >({
        key: ['characters'],
        query: allCharacters,
        options,
        variables: { page, name },
    });

    return { data, isLoading, error, isSuccess, refetch };
}
