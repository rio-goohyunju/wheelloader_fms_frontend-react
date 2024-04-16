import { useMutation } from '@tanstack/react-query';

import { addContact } from '@/api/contact';
import { ModifyContactParams } from '@/api/contact/types';

const useAddContact = () => {
  const fetcher = async (variable: ModifyContactParams) => {
    const result = await addContact(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useAddContact;
