import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchOperationPercentStatistics } from '@/api/statistics';
import {
  FetchOperationPercentStatisticsParams,
  FetchOperationPercentStatisticsResponse,
} from '@/api/statistics/types';

import { queryKey } from '../querykey';

const useOperationPercentStatistics = (
  variable: FetchOperationPercentStatisticsParams
) => {
  const fetcher = async () => {
    const result = await fetchOperationPercentStatistics(variable);
    return result.data;
  };

  return useQuery<FetchOperationPercentStatisticsResponse, AxiosError>({
    queryKey: [queryKey.fetchOperationPercentStatistics, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
    enabled: !!variable.robotId,
  });
};

export default useOperationPercentStatistics;
