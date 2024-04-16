import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchDeviceHub } from '@/api/robot';
import { fetchDeviceHubResponse } from '@/api/robot/types';

import { queryKey } from '../querykey';

const useDeviceHub = (variable: { siteID: string }, enabledValue?: boolean) => {
  const fetcher = async () => {
    const result = await fetchDeviceHub(variable.siteID);
    return result.data;
  };

  return useQuery<fetchDeviceHubResponse, AxiosError>({
    queryKey: [queryKey.fetchDeviceHub],
    queryFn: fetcher,
    enabled: enabledValue ?? false,
  });
};

export default useDeviceHub;
