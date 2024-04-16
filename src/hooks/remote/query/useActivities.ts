import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchActivities } from '@/api/activity';

import { queryKey } from '../querykey';

interface ActivitiesParam {
  userId: string;
}

interface ActivitiesResponse {
  activities: Activities[];
}

interface Activities {
  id: string;
  date: number;
  activity: string;
  country: string;
  ip: string;
  deviceType: string;
}

const useActivities = (
  variable: ActivitiesParam,
  options?: UseQueryOptions<ActivitiesResponse, AxiosError>
) => {
  const fetcher = async () => {
    const result = await fetchActivities(variable);
    return result.data;
  };

  return useQuery<ActivitiesResponse, AxiosError>({
    queryKey: [queryKey.fetchActivities, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useActivities;
