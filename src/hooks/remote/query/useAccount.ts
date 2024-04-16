import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchAccount } from '@/api/account';
import { FetchAccountParams, FetchAccountResponse } from '@/api/account/types';

import { queryKey } from '../querykey';

const useAccount = (variable: FetchAccountParams) => {
  const fetcher = async () => {
    const result = await fetchAccount(variable);
    return result.data;
  };

  return useQuery<FetchAccountResponse[], AxiosError>({
    queryKey: [queryKey.fetchAccount, variable],
    queryFn: fetcher,
  });
};

export default useAccount;
