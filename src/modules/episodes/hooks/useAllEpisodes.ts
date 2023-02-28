import { EpisodesQuery, useApi, type UseApiParams } from 'modules/api';

import { allEpisodes } from '../queries';

export function useAllEpisodes<TData = EpisodesQuery>(
    {
        options,
    }: {
        options?: UseApiParams<EpisodesQuery, Error, TData>['options'];
    } = { options: undefined },
) {
    const { data, isLoading, error, isSuccess } = useApi<
        EpisodesQuery,
        Error,
        TData
    >({
        key: ['episodes'],
        query: allEpisodes,
        options,
    });

    return { data, isLoading, error, isSuccess };
}
