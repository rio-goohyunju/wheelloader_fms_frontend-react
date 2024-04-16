import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchTotalStatusStatistics } from '@/api/statistics';
import {
  FetchTotalStatusResponse,
  FetchTotalStatusStatisticsParams,
} from '@/api/statistics/types';

import { queryKey } from '../querykey';

const useTotalStatusStatistics = (
  variable: FetchTotalStatusStatisticsParams
) => {
  const fetcher = async () => {
    const result = await fetchTotalStatusStatistics(variable);
    return result.data;
  };

  return useQuery<FetchTotalStatusResponse, AxiosError>({
    queryKey: [queryKey.fetchTotalStatusStatistics, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
  });
};

export default useTotalStatusStatistics;
