import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchMission } from '@/api/missionSetting';
import {
  FetchMissionParams,
  FetchMissionResponse,
} from '@/api/missionSetting/types';

import { queryKey } from '../querykey';

const useMission = (variable: FetchMissionParams, enabledValue?: boolean) => {
  const fetcher = async () => {
    const result = await fetchMission(variable);
    return result.data;
  };

  return useQuery<FetchMissionResponse, AxiosError>({
    queryKey: [queryKey.fetchMissions, variable],
    queryFn: fetcher,
    enabled: enabledValue,
  });
};

export default useMission;
