import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchScheduleHistories } from '@/api/missionHistory';
import {
  FetchHistoriesParams,
  FetchScheduleHistoryResponse,
} from '@/api/missionHistory/types';

import { queryKey } from '../querykey';

const useHistories = (variable: FetchHistoriesParams) => {
  const fetcher = async () => {
    const result = await fetchScheduleHistories(variable);
    return result.data;
  };

  return useQuery<FetchScheduleHistoryResponse[], AxiosError>({
    queryKey: [queryKey.fetchHistories, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
  });
};

export default useHistories;
