import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deleteSite } from '@/api/site';
import { DeleteSiteParams } from '@/api/site/types';

const useDeleteSite = (
  options?: UseMutationOptions<DeleteSiteParams, AxiosError, DeleteSiteParams>
) => {
  const fetcher = async (variable: DeleteSiteParams) => {
    const result = await deleteSite({ siteID: variable.siteID });
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useDeleteSite;
