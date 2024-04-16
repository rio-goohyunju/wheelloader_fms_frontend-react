import { useMutation } from '@tanstack/react-query';

import { deleteLocation } from '@/api/locations';
import { DeleteLocationParams } from '@/api/locations/types';

const useDeleteLocation = () => {
  const fetcher = async (variable: DeleteLocationParams) => {
    const result = await deleteLocation(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useDeleteLocation;
