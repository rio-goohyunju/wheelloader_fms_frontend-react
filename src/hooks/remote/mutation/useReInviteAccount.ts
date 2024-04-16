import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { reInviteAccount } from '@/api/account';
import { ReInviteAccountParams } from '@/api/account/types';

const useReInviteAccount = (
  options?: UseMutationOptions<
    ReInviteAccountParams,
    AxiosError,
    ReInviteAccountParams
  >
) => {
  const fetcher = async (variable: ReInviteAccountParams) => {
    const result = await reInviteAccount(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useReInviteAccount;
