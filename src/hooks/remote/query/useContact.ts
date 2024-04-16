import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchContact } from '@/api/contact';
import { FetchContactResponse } from '@/api/contact/types';

import { queryKey } from '../querykey';

const useContact = (variable: { siteID: string }) => {
  const fetcher = async () => {
    const result = await fetchContact(variable.siteID);
    return result.data;
  };

  return useQuery<FetchContactResponse, AxiosError>({
    queryKey: [queryKey.fetchContacts, variable],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
  });
};

export default useContact;
