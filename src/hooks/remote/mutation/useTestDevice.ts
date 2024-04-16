import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deviceTest } from '@/api/initializeSetting';
import {
  DeviceHubTestParams,
  TestResponse,
} from '@/api/initializeSetting/types';

const useTestDevice = (
  options?: UseMutationOptions<TestResponse, AxiosError, DeviceHubTestParams>
) => {
  const fetcher = async (variable: DeviceHubTestParams) => {
    const result = await deviceTest(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useTestDevice;
