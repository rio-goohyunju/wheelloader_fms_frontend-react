import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchScheduleLogs } from '@/api/schedule';
import { queryKey } from '@/hooks/remote/querykey';

interface FetchScheduleLogsResponse {
  data: string[][];
}

interface FetchScheduleLogsParams {
  from: string;
  end: string;
}

const useScheduleLogs = (
  variable: FetchScheduleLogsParams,
  options?: UseQueryOptions<FetchScheduleLogsResponse, AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchScheduleLogs(variable);
    return result;
  };

  return useQuery<FetchScheduleLogsResponse, AxiosError>({
    queryKey: [queryKey.fetchScheduleLogs, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useScheduleLogs;
