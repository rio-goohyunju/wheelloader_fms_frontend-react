import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { editSite } from '@/api/site';
import { EditSiteParams } from '@/api/site/types';

const useEditSite = (
  options?: UseMutationOptions<EditSiteParams, AxiosError, EditSiteParams>
) => {
  const fetcher = async (variable: EditSiteParams) => {
    const result = await editSite(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useEditSite;
