import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import cookies, { JWT_EXPIRY_TIME } from '@common/utils/cookie';

import { adminLogin } from '@/api/auth';
import { adminLoginResponse, PerformLoginParams } from '@/api/auth/types';

const useAdminLogin = (
  options?: UseMutationOptions<
    adminLoginResponse,
    AxiosError,
    PerformLoginParams
  >
) => {
  const fetcher = async (variable: PerformLoginParams) => {
    const result = await adminLogin(variable);
    cookies.set('accessToken', result.data.access_token, {
      path: '/',
      maxAge: JWT_EXPIRY_TIME,
      domain: window.location.hostname,
    });
    cookies.set('userID', result.data.user_id, {
      path: '/',
      domain: window.location.hostname,
    });
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useAdminLogin;
