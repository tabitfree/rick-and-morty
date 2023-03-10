import { CharacterQuery, useApi, type UseApiParams } from 'modules/api';

import { oneCharacter } from '../queries';

export function useOneCharacter<TData = CharacterQuery>(
    id: String,
    {
        options,
    }: {
        options?: UseApiParams<CharacterQuery, Error, TData>['options'];
    } = { options: undefined },
) {
    const { data, isLoading, error, isSuccess, refetch } = useApi<
        CharacterQuery,
        Error,
        TData
    >({
        key: ['character'],
        query: oneCharacter,
        options,
        variables: { id },
    });

    return { data, isLoading, error, isSuccess, refetch };
}
