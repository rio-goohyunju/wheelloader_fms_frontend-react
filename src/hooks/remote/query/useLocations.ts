import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchLocations } from '@/api/locations';
import {
  FetchLocationsResponse,
  FetchLocationsParams,
} from '@/api/locations/types';

import { queryKey } from '../querykey';

const useLocations = (
  variable: FetchLocationsParams,
  options?: UseQueryOptions<FetchLocationsResponse[], AxiosError>
) => {
  const fetcher = async () => {
    try {
      const result = await fetchLocations({ siteID: variable.siteID });
      return result.data;
    } catch (error) {
      return [];
    }
  };

  return useSuspenseQuery<FetchLocationsResponse[], AxiosError>({
    queryKey: [queryKey.fetchLocations, variable],
    queryFn: fetcher,
    ...options,
  });
};

export default useLocations;
