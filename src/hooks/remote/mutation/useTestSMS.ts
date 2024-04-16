import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { smsTest } from '@/api/initializeSetting';
import { SmsTestParams, TestResponse } from '@/api/initializeSetting/types';

const useTestSMS = (
  options?: UseMutationOptions<TestResponse, AxiosError, SmsTestParams>
) => {
  const fetcher = async (variable: SmsTestParams) => {
    const result = await smsTest(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useTestSMS;
