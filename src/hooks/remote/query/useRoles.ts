import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchRoles } from '@/api/site';
import { FetchRolesParams, FetchRolesResponse } from '@/api/site/types';

import { queryKey } from '../querykey';

const useRoles = (
  variable: FetchRolesParams,
  options?: UseQueryOptions<FetchRolesResponse[], AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchRoles(variable);
    return result.data;
  };

  return useQuery<FetchRolesResponse[], AxiosError>({
    queryKey: [queryKey.fetchRoles, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useRoles;
