import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { updateSmsSetting } from '@/api/systemSetting';
import { UpdateSmsSettingParams } from '@/api/systemSetting/types';

const useUpdateSmsSetting = (
  options?: UseMutationOptions<string, AxiosError, UpdateSmsSettingParams>
) => {
  const fetcher = async (variable: UpdateSmsSettingParams) => {
    const result = await updateSmsSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useUpdateSmsSetting;
