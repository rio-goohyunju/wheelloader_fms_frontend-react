import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { addRobot } from '@/api/robot';
import { addRobotParams, addRobotResponse } from '@/api/robot/types';

const useAddRobot = (
  options?: UseMutationOptions<addRobotResponse, AxiosError, addRobotParams>
) => {
  const fetcher = async (variable: addRobotParams) => {
    const result = await addRobot(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useAddRobot;
