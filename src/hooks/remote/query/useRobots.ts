import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchRobots } from '@/api/robot';
import { FetchRobotsParams, FetchRobotsResponse } from '@/api/robot/types';

import { queryKey } from '../querykey';

const useRobots = (
  variable: FetchRobotsParams,
  options?: UseQueryOptions<FetchRobotsResponse[], AxiosError>
) => {
  const fetcher = async () => {
    try {
      const result = await fetchRobots(variable);
      return result.data;
    } catch (error) {
      return [];
    }
  };

  return useSuspenseQuery<FetchRobotsResponse[], AxiosError>({
    queryKey: [queryKey.fetchRobots, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useRobots;
