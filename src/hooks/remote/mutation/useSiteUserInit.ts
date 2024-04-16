import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { siteUserInitSetting } from '@/api/initializeSetting';
import { SiteUserFormValue } from '@/components/InitSetting/types';

const useSiteUserInit = (
  options?: UseMutationOptions<SiteUserFormValue, AxiosError, SiteUserFormValue>
) => {
  const fetcher = async (variable: SiteUserFormValue) => {
    const result = await siteUserInitSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useSiteUserInit;
