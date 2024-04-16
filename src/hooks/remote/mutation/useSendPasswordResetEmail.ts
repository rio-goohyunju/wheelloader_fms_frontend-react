import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { sendPasswordResetEmail } from '@/api/auth';

interface sendPasswordResetEmailParams {
  email: string;
}

interface sendPasswordResetEmailResponse {
  expiration_time: string;
}

const useSendPasswordResetEmail = (
  options?: UseMutationOptions<
    sendPasswordResetEmailResponse,
    AxiosError,
    sendPasswordResetEmailParams
  >
) => {
  const fetcher = async (variable: sendPasswordResetEmailParams) => {
    const result = await sendPasswordResetEmail(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useSendPasswordResetEmail;
