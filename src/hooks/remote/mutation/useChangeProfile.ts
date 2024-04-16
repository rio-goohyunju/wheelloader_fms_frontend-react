import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { changeProfile } from '@/api/auth';
import { ChangeProfileParams } from '@/api/auth/types';

const useChangeProfile = (
  options?: UseMutationOptions<
    ChangeProfileParams,
    AxiosError,
    ChangeProfileParams
  >
) => {
  const fetcher = async (variable: ChangeProfileParams) => {
    const result = await changeProfile(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useChangeProfile;
