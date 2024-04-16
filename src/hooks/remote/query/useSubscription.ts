import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSubscriptions } from '@/api/contact';
import { Subscription } from '@/api/contact/types';

import { queryKey } from '../querykey';

const useSubscription = (variable: { siteID: string }) => {
  const fetcher = async () => {
    const result = await fetchSubscriptions(variable.siteID);
    return result.data;
  };

  return useQuery<Subscription[], AxiosError>({
    queryKey: [queryKey.fetchSubscriptions, variable],
    queryFn: fetcher,
  });
};

export default useSubscription;
