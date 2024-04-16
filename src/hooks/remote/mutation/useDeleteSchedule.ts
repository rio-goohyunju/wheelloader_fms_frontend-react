import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deleteSchedule } from '@/api/schedule';
import { DeleteScheduleParams } from '@/api/schedule/types';

const useDeleteSchedule = (
  options?: UseMutationOptions<undefined, AxiosError, DeleteScheduleParams>
) => {
  const fetcher = async (variable: DeleteScheduleParams) => {
    const result = await deleteSchedule(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useDeleteSchedule;
