import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchAlertHistories } from '@/api/alertHistory';
import {
  FetchAlertHistoriesParams,
  FetchAlertHistoriesResponse,
} from '@/api/alertHistory/type';

import { queryKey } from '../querykey';

const useAlertHistories = (
  variable: FetchAlertHistoriesParams,
  options?: UseQueryOptions<FetchAlertHistoriesResponse, AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchAlertHistories(variable);
    return result.data;
  };

  return useQuery<FetchAlertHistoriesResponse, AxiosError>({
    queryKey: [queryKey.fetchAlertHistories, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useAlertHistories;
