import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSites } from '@/api/site';
import { FetchSitesResponse } from '@/api/site/types';

import { queryKey } from '../querykey';

const useSites = (
  options?: UseQueryOptions<FetchSitesResponse[], AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchSites();
    return result.data;
  };

  return useQuery<FetchSitesResponse[], AxiosError>({
    queryKey: [queryKey.fetchSites],
    queryFn: fetcher,
    ...options,
  });
};

export default useSites;
