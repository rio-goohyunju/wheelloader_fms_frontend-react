import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { addSmsSetting } from '@/api/systemSetting';
import { AddSmsSettingParams } from '@/api/systemSetting/types';

const useAddSmsSetting = (
  options?: UseMutationOptions<string, AxiosError, AddSmsSettingParams>
) => {
  const fetcher = async (variable: AddSmsSettingParams) => {
    const result = await addSmsSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useAddSmsSetting;
