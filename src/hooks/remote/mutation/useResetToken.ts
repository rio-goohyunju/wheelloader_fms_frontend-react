import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { resetToken } from '@/api/auth';
import { resetTokenResponse } from '@/api/auth/types';

const useResetToken = (
  options?: UseMutationOptions<resetTokenResponse, AxiosError>
) => {
  const fetcher = async () => {
    const result = await resetToken();
    return result.data;
  };
  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useResetToken;
