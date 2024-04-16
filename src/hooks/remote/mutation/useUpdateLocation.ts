import { useMutation } from '@tanstack/react-query';

import { updateLocation } from '@/api/locations';
import { UpdateLocationParams } from '@/api/locations/types';

const useUpdateLocation = () => {
  const fetcher = async (variable: UpdateLocationParams) => {
    const result = await updateLocation(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useUpdateLocation;
