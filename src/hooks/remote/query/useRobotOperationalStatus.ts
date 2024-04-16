import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchRobotOperationalStatus } from '@/api/robot';
import {
  FetchRobotOperationalStatusParams,
  FetchRobotOperationalStatusResponse,
} from '@/api/robot/types';

import { queryKey } from '../querykey';

const useRobotOperationalStatus = (
  variable: FetchRobotOperationalStatusParams
) => {
  const fetcher = async () => {
    const result = await fetchRobotOperationalStatus(variable);
    return result.data;
  };

  return useQuery<FetchRobotOperationalStatusResponse, AxiosError>({
    queryKey: [queryKey.fetchRobotOperationalStatus, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
    enabled: !!variable.robotId,
  });
};

export default useRobotOperationalStatus;
