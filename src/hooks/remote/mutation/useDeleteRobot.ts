import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deleteRobot } from '@/api/robot';

interface DeleteRobotParams {
  robotID: string;
}

const useDeleteRobot = (
  options?: UseMutationOptions<DeleteRobotParams, AxiosError, DeleteRobotParams>
) => {
  const fetcher = async (variable: DeleteRobotParams) => {
    const result = await deleteRobot(variable.robotID);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useDeleteRobot;
