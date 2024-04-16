import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { systemInitSetting } from '@/api/initializeSetting';
import { SystemAdminFormValue } from '@/components/InitSetting/types';

const useSystemInit = (
  options?: UseMutationOptions<
    SystemAdminFormValue,
    AxiosError,
    SystemAdminFormValue
  >
) => {
  const fetcher = async (variable: SystemAdminFormValue) => {
    const result = await systemInitSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useSystemInit;
