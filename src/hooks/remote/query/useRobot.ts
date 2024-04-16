import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchRobot } from '@/api/robot';
import { FetchRobotParams, FetchRobotResponse } from '@/api/robot/types';

import { queryKey } from '../querykey';

const useRobot = (variable: FetchRobotParams, enabledValue?: boolean) => {
  const fetcher = async () => {
    const result = await fetchRobot(variable);
    return result.data;
  };

  return useQuery<FetchRobotResponse, AxiosError>({
    queryKey: [queryKey.fetchRobots, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
    enabled: enabledValue ?? false,
  });
};

export default useRobot;
