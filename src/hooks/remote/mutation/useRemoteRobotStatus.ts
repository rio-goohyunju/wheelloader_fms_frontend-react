import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { remoteStatusRobot } from '@/api/robot';
import { remoteStatusRobotParams } from '@/api/robot/types';

const useRemoteRobotStatus = (
  options?: UseMutationOptions<
    remoteStatusRobotParams,
    AxiosError,
    remoteStatusRobotParams
  >
) => {
  const fetcher = async (variable: remoteStatusRobotParams) => {
    const result = await remoteStatusRobot(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useRemoteRobotStatus;
