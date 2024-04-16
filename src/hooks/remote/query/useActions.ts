import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchActionList } from '@/api/actionSetting';
import {
  FetchActionsParams,
  FetchActionsResponse,
} from '@/api/actionSetting/types';

import { queryKey } from '../querykey';

const useActions = (variable: FetchActionsParams) => {
  const fetcher = async () => {
    const result = await fetchActionList(variable);
    return result.data;
  };

  return useSuspenseQuery<FetchActionsResponse[], AxiosError>({
    queryKey: [queryKey.fetchActionList, variable],
    queryFn: fetcher,
  });
};

export default useActions;
