import { GridRowId } from '@mui/x-data-grid';
import { useMutation } from '@tanstack/react-query';

import { deleteContact } from '@/api/contact';

const useDeleteContact = () => {
  const fetcher = async (variable: { id: GridRowId }) => {
    const result = await deleteContact({
      id: variable.id,
    });
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useDeleteContact;
