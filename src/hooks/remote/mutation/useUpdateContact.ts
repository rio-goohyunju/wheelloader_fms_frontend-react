import { useMutation } from '@tanstack/react-query';

import { updateContact } from '@/api/contact';
import { ModifyContactParams } from '@/api/contact/types';

const useUpdateContact = () => {
  const fetcher = async (variable: ModifyContactParams) => {
    const result = await updateContact(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useUpdateContact;
