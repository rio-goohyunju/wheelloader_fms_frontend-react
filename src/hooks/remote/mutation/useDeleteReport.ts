import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deleteReport } from '@/api/report';

interface DeleteReportParmas {
  uuid: string[];
}

const useDeleteReport = (
  options?: UseMutationOptions<
    DeleteReportParmas,
    AxiosError,
    DeleteReportParmas
  >
) => {
  const fetcher = async (variable: DeleteReportParmas) => {
    const result = await deleteReport(variable.uuid);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useDeleteReport;
