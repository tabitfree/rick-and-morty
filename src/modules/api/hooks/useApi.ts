import {
    type QueryKey,
    type UseQueryOptions,
    useQuery,
} from '@tanstack/react-query';

import { fetcher } from '../utils';

export interface UseApiParams<TQueryFnData, TError, TData> {
    key: QueryKey;
    query: string;
    variables?: object | TData;

    options?: Omit<
        UseQueryOptions<TQueryFnData, TError, TData, QueryKey>,
        'queryKey' | 'queryFn' | 'initialData'
    > & {
        initialData?: () => undefined;
    };
}

export function useApi<
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
>({
    key,
    query,
    variables,
    options,
}: UseApiParams<TQueryFnData, TError, TData>) {
    const { data, isLoading, error, refetch, isFetching, isSuccess } = useQuery<
        TQueryFnData,
        TError,
        TData
    >(key, () => fetcher(query, variables), options);

    return {
        data,
        isLoading,
        error,
        refetch,
        isFetching,
        isSuccess,
    };
}
