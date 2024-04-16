import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { testSmtpSetting } from '@/api/systemSetting';
import { TestSmtpSettingParams } from '@/api/systemSetting/types';

const useTestSmtpSetting = (
  options?: UseMutationOptions<string, AxiosError, TestSmtpSettingParams>
) => {
  const fetcher = async (variable: TestSmtpSettingParams) => {
    const result = await testSmtpSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useTestSmtpSetting;
