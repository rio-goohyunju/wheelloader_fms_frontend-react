import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchAlertHistoryReport } from '@/api/alertHistory';
import {
  FetchAlertHistoryReportParams,
  FetchAlertHistoryReportResponse,
} from '@/api/alertHistory/type';

import { queryKey } from '../querykey';

const useAlertHistoryReport = (variable: FetchAlertHistoryReportParams) => {
  const fetcher = async () => {
    const result = await fetchAlertHistoryReport(variable);
    return result.data;
  };

  return useQuery<FetchAlertHistoryReportResponse, AxiosError>({
    queryKey: [queryKey.fetchAlertHistoryReport, variable],
    queryFn: fetcher,
  });
};

export default useAlertHistoryReport;
