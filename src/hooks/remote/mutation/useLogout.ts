import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { performLogout } from '@/api/auth';

const useLogout = (options?: UseMutationOptions<AxiosError>) => {
  const fetcher = async () => {
    const result = await performLogout();
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useLogout;
