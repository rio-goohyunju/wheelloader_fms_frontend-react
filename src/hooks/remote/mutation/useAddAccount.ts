import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { addAccount } from '@/api/account';
import { AddAccountParams } from '@/api/account/types';

const useAddAccount = (
  options?: UseMutationOptions<AddAccountParams, AxiosError, AddAccountParams>
) => {
  const fetcher = async (variable: AddAccountParams) => {
    const result = await addAccount(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useAddAccount;
