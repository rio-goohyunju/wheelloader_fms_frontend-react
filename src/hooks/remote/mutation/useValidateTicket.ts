import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { validateTicket } from '@/api/auth';
import { ValidateTicketParams } from '@/api/auth/types';

const useValidateTicket = (
  options?: UseMutationOptions<string, AxiosError, ValidateTicketParams>
) => {
  const fetcher = async (variable: ValidateTicketParams) => {
    const result = await validateTicket(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useValidateTicket;
