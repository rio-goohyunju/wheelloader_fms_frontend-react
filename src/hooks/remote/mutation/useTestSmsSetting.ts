import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { testSmsSetting } from '@/api/systemSetting';
import { TestSmsSettingParams } from '@/api/systemSetting/types';

const useTestSmsSetting = (
  options?: UseMutationOptions<string, AxiosError, TestSmsSettingParams>
) => {
  const fetcher = async (variable: TestSmsSettingParams) => {
    const result = await testSmsSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useTestSmsSetting;
