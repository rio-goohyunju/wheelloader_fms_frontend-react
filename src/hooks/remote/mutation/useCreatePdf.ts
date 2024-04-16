import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CreatePdfParams } from '@/api/report/types';
import { createPdf } from '@api/report';

interface CreatePdfResponse {
  status: number;
  statusText?: string;
}

const useCreatePdf = (
  options?: UseMutationOptions<CreatePdfResponse, AxiosError, CreatePdfParams>
) => {
  const fetcher = async (variable: CreatePdfParams) => {
    const result = await createPdf(variable);
    return result;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useCreatePdf;
