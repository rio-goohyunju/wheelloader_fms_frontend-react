import { useMutation } from '@tanstack/react-query';

import { addLocation } from '@/api/locations';
import { AddLocationParams } from '@/api/locations/types';

const useAddLocation = () => {
  const fetcher = async (variable: AddLocationParams) => {
    const result = await addLocation(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useAddLocation;
