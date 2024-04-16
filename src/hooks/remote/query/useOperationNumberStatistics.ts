import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchOperationNumberStatistics } from '@/api/statistics';
import {
  FetchOperationNumberStatisticsParams,
  FetchOperationNumberStatisticsResponse,
} from '@/api/statistics/types';

import { queryKey } from '../querykey';

const useOperationNumberStatistics = (
  variable: FetchOperationNumberStatisticsParams
) => {
  const fetcher = async () => {
    const result = await fetchOperationNumberStatistics(variable);
    return result.data;
  };

  return useQuery<FetchOperationNumberStatisticsResponse, AxiosError>({
    queryKey: [queryKey.fetchOperationNumberStatistics, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
    enabled: !!variable.robotId,
  });
};

export default useOperationNumberStatistics;
