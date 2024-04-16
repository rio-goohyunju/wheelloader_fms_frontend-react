import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Site } from '@/api/auth/types';
import { fetchSite } from '@/api/site';

import { queryKey } from '../querykey';

const useSite = (variable: string, enabledValue?: boolean) => {
  const fetcher = async () => {
    const result = await fetchSite(variable);
    return result.data;
  };

  return useQuery<Site, AxiosError>({
    queryKey: [queryKey],
    queryFn: fetcher,
    enabled: enabledValue ?? false,
  });
};

export default useSite;
