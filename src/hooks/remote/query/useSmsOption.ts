import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSmsOption } from '@/api/systemSetting';
import {
  FetchSmsOptionParams,
  FetchSmsOptionResponse,
} from '@/api/systemSetting/types';

import { queryKey } from '../querykey';

const useSmsOption = (variable: FetchSmsOptionParams) => {
  const fetcher = async () => {
    const result = await fetchSmsOption(variable);
    return result.data;
  };

  return useQuery<FetchSmsOptionResponse, AxiosError>({
    queryKey: [queryKey.fetchSmsOption],
    queryFn: fetcher,
  });
};

export default useSmsOption;
