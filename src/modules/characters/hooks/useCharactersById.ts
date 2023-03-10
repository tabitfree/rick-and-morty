import {
    CharactersByIdsQuery,
    CharactersByIdsQueryVariables,
    useApi,
    type UseApiParams,
} from 'modules/api';

import { charactersById } from '../queries';

export function useCharactersById<TData = CharactersByIdsQuery>(
    ids: CharactersByIdsQueryVariables['ids'],
    {
        options,
    }: {
        options?: UseApiParams<CharactersByIdsQuery, Error, TData>['options'];
    } = { options: undefined },
) {
    const { data, isLoading, error, isSuccess, refetch } = useApi<
        CharactersByIdsQuery,
        Error,
        TData
    >({
        key: ['charactersByIds'],
        query: charactersById,
        options,
        variables: { ids },
    });

    return { data, isLoading, error, isSuccess, refetch };
}
