import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { FetchReportParams, FetchReportResponse } from '@/api/report/types';
import { fetchReport } from '@api/report';

import { queryKey } from '../querykey';

const useReport = (variable: FetchReportParams) => {
  const fetcher = async () => {
    const result = await fetchReport(variable);
    return result.data;
  };

  return useQuery<FetchReportResponse, AxiosError>({
    queryKey: [queryKey.fetchReport, variable],
    queryFn: fetcher,
    enabled: !!variable.uuid,
  });
};

export default useReport;
