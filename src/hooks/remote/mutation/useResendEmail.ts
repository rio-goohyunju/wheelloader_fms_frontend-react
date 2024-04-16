import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { resendEmail } from '@/api/site';
import { ResendEmailParams } from '@/api/site/types';

const useResendEmail = (
  options?: UseMutationOptions<ResendEmailParams, AxiosError, ResendEmailParams>
) => {
  const fetcher = async (variable: ResendEmailParams) => {
    const result = await resendEmail(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useResendEmail;
