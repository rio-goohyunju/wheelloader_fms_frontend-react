import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchMissions } from '@/api/missionSetting';
import {
  FetchMissionListResponse,
  FetchMissionsParams,
} from '@/api/missionSetting/types';

import { queryKey } from '../querykey';

const useMissions = (variable: FetchMissionsParams) => {
  const fetcher = async () => {
    try {
      const result = await fetchMissions(variable);
      return result.data;
    } catch (error) {
      return [];
    }
  };

  return useSuspenseQuery<FetchMissionListResponse[], AxiosError>({
    queryKey: [queryKey.fetchMissions, variable],
    queryFn: fetcher,
  });
};

export default useMissions;
