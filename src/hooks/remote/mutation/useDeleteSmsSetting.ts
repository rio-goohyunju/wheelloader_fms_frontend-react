import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deleteSmsSetting } from '@/api/systemSetting';
import { DeleteSmsSettingParams } from '@/api/systemSetting/types';

const useDeleteSmsSetting = (
  options?: UseMutationOptions<string, AxiosError, DeleteSmsSettingParams>
) => {
  const fetcher = async (variable: DeleteSmsSettingParams) => {
    const result = await deleteSmsSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useDeleteSmsSetting;
