import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchRobotMissionStatistics } from '@/api/statistics';
import {
  FetchRobotMissionStatisticsParams,
  FetchRobotMissionStatisticsResponse,
} from '@/api/statistics/types';

import { queryKey } from '../querykey';

const useRobotMissionStatistics = (
  variable: FetchRobotMissionStatisticsParams
) => {
  const fetcher = async () => {
    if (variable.robotId === null || variable.robotId === '') {
      return {
        date: [],
        details: [],
      };
    }

    const result = await fetchRobotMissionStatistics(variable);
    return result.data;
  };

  return useQuery<FetchRobotMissionStatisticsResponse, AxiosError>({
    queryKey: [queryKey.fetchRobotMissionStatistics, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
  });
};

export default useRobotMissionStatistics;
