import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { smtpTest } from '@/api/initializeSetting';
import { SmtpTestParams, TestResponse } from '@/api/initializeSetting/types';

const useTestSMTP = (
  options?: UseMutationOptions<TestResponse, AxiosError, SmtpTestParams>
) => {
  const fetcher = async (variable: SmtpTestParams) => {
    const result = await smtpTest(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useTestSMTP;
