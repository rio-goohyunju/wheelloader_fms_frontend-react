import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { registerSchedule } from '@/api/schedule';
import { RegisterScheduleParams } from '@/api/schedule/types';

const useRegisterSchedule = (
  options?: UseMutationOptions<
    RegisterScheduleParams,
    AxiosError,
    RegisterScheduleParams
  >
) => {
  const fetcher = async (variable: RegisterScheduleParams) => {
    const result = await registerSchedule(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useRegisterSchedule;
