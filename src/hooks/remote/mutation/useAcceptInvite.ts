import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { acceptInvite } from '@/api/account';
import { AcceptInviteParmas } from '@/api/account/types';

const useAcceptInvite = (
  options?: UseMutationOptions<string, AxiosError, AcceptInviteParmas>
) => {
  const fetcher = async (variable: AcceptInviteParmas) => {
    const result = await acceptInvite(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useAcceptInvite;
