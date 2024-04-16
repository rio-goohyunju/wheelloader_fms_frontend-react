import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { initializePasswordReset } from '@/api/auth';

interface PasswordResetParams {
  newPassword: string;
  ticketID?: string;
}

interface PasswordResetResponse {
  message: string;
}

const usePasswordReset = (
  options?: UseMutationOptions<
    PasswordResetResponse,
    AxiosError,
    PasswordResetParams
  >
) => {
  const fetcher = async (variable: PasswordResetParams) => {
    const result = await initializePasswordReset(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default usePasswordReset;
