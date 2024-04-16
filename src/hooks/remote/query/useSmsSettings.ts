import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSmsSettings } from '@/api/systemSetting';
import {
  FetchSmsSettingsParams,
  FetchSmsSettingsResponse,
} from '@/api/systemSetting/types';

import { queryKey } from '../querykey';

const useSmsSettings = (variable: FetchSmsSettingsParams) => {
  const fetcher = async () => {
    const result = await fetchSmsSettings(variable);
    return result.data;
  };

  return useQuery<FetchSmsSettingsResponse, AxiosError>({
    queryKey: [queryKey.fetchSmsSetting],
    queryFn: fetcher,
  });
};

export default useSmsSettings;
