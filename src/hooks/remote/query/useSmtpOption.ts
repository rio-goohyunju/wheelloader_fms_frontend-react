import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchSmtpOption } from '@/api/systemSetting';
import {
  FetchSmtpOptionParams,
  FetchSmtpOptionResponse,
} from '@/api/systemSetting/types';

import { queryKey } from '../querykey';

const useSmtpOption = (variable: FetchSmtpOptionParams) => {
  const fetcher = async () => {
    const result = await fetchSmtpOption(variable);
    return result.data;
  };

  return useQuery<FetchSmtpOptionResponse, AxiosError>({
    queryKey: [queryKey.fetchSmtpOption],
    queryFn: fetcher,
  });
};

export default useSmtpOption;
