import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchLogo } from '@/api/site';

import { queryKey } from '../querykey';

interface fetchLogoResponse {
  url: string;
}

const useConfigLogo = (
  variable: { siteID: string },
  options?: UseQueryOptions<fetchLogoResponse, AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchLogo(variable);
    return result.data;
  };

  return useQuery<fetchLogoResponse, AxiosError>({
    queryKey: [queryKey.fetchLogo, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useConfigLogo;
