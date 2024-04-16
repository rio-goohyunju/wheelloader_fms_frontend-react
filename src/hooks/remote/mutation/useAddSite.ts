import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { addSite } from '@/api/site';
import { AddSiteParams } from '@/api/site/types';

const useAddSite = (
  options?: UseMutationOptions<AddSiteParams, AxiosError, AddSiteParams>
) => {
  const fetcher = async (variable: AddSiteParams) => {
    const result = await addSite(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useAddSite;
