import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { updateRobot } from '@/api/robot';
import { updateRobotParams } from '@/api/robot/types';

const useUpdateRobot = (
  options?: UseMutationOptions<updateRobotParams, AxiosError, updateRobotParams>
) => {
  const fetcher = async (variable: updateRobotParams) => {
    const result = await updateRobot(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useUpdateRobot;
