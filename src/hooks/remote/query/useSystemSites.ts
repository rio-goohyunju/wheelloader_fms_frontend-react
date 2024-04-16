import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSystemSites } from '@/api/site';
import { FetchSystemSitesResponse } from '@/api/site/types';

import { queryKey } from '../querykey';

const useSystemSites = (
  options?: UseQueryOptions<FetchSystemSitesResponse[], AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchSystemSites();
    return result.data;
  };

  return useQuery<FetchSystemSitesResponse[], AxiosError>({
    queryKey: [queryKey.fetchSites],
    queryFn: fetcher,
    ...options,
  });
};

export default useSystemSites;
