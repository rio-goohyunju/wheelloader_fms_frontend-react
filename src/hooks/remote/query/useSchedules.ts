import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSchedules } from '@/api/schedule';
import { FetchParams, FetchScheduleResponse } from '@/api/schedule/types';

import { queryKey } from '../querykey';

const useSchedules = (variable: FetchParams) => {
  const fetcher = async () => {
    const result = await fetchSchedules(variable);
    return result.data;
  };

  return useQuery<FetchScheduleResponse[], AxiosError>({
    queryKey: [queryKey.fetchSchedule, variable],
    queryFn: fetcher,
    refetchInterval: 3000,
    placeholderData: keepPreviousData,
    select: (data) => data.sort((a, b) => a.start_time - b.start_time),
  });
};

export default useSchedules;
