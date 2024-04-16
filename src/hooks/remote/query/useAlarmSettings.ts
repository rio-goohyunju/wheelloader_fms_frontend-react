import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchAlarmSettings } from '@/api/alarmSetting';
import { FetchAlarmSettingsResponse } from '@/api/alarmSetting/types';

import { queryKey } from '../querykey';

const useAlarmSettings = () => {
  const fetcher = async () => {
    const result = await fetchAlarmSettings();
    return result.data;
  };

  return useQuery<FetchAlarmSettingsResponse, AxiosError>({
    queryKey: [queryKey.fetchAlarmSettings],
    queryFn: fetcher,
  });
};

export default useAlarmSettings;
