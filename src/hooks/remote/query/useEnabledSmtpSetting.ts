import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchEnableSmtpSetting } from '@/api/systemSetting';
import {
  FetchEnabledSmtpSettingResponse,
  FetchSmtpSettingsParams,
} from '@/api/systemSetting/types';

import { queryKey } from '../querykey';

const useEnabledSmtpSetting = (variable: FetchSmtpSettingsParams) => {
  const fetcher = async () => {
    const result = await fetchEnableSmtpSetting(variable);
    return result.data;
  };

  return useQuery<FetchEnabledSmtpSettingResponse, AxiosError>({
    queryKey: [queryKey.fetchEnableSmtpSetting],
    queryFn: fetcher,
  });
};

export default useEnabledSmtpSetting;
