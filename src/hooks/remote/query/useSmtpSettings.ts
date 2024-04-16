import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSmtpSettings } from '@/api/systemSetting';
import {
  FetchSmtpSettingsParams,
  FetchSmtpSettingsResponse,
} from '@/api/systemSetting/types';

import { queryKey } from '../querykey';

const useSmtpSettings = (variable: FetchSmtpSettingsParams) => {
  const fetcher = async () => {
    const result = await fetchSmtpSettings(variable);
    return result.data;
  };

  return useQuery<FetchSmtpSettingsResponse, AxiosError>({
    queryKey: [queryKey.fetchSmtpSetting],
    queryFn: fetcher,
  });
};

export default useSmtpSettings;
