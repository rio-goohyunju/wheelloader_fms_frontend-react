import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchBlocker } from '@/api/schedule';
import { FetchBlockerParams, FetchBlockerResponse } from '@/api/schedule/types';

import { queryKey } from '../querykey';

const useBlocker = (variable: FetchBlockerParams) => {
  const fetcher = async () => {
    const result = await fetchBlocker(variable);
    return result.data;
  };

  return useQuery<FetchBlockerResponse, AxiosError>({
    queryKey: [queryKey.fetchBlocker, variable],
    queryFn: fetcher,
    refetchInterval: 3000,
  });
};

export default useBlocker;
