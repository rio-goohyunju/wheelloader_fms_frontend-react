import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { editAction } from '@/api/actionSetting';
import { EditActionParams } from '@/api/actionSetting/types';

const useEditActions = (
  options?: UseMutationOptions<EditActionParams, AxiosError, EditActionParams>
) => {
  const fetcher = async (variable: EditActionParams) => {
    const result = await editAction(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useEditActions;
