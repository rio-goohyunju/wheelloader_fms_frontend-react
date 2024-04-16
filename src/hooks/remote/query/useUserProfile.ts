import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchUser } from '@/api/auth';
import { FetchUserResponse } from '@/api/auth/types';

import { queryKey } from '../querykey';

const useUserProfile = (enabledValue: boolean) => {
  const fetcher = async () => {
    const result = await fetchUser();
    return result.data;
  };

  return useQuery<FetchUserResponse, AxiosError>({
    queryKey: [queryKey.fetchUser],
    queryFn: fetcher,
    enabled: enabledValue ?? false,
  });
};

export default useUserProfile;
