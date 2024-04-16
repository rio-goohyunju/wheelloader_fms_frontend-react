import { useMutation } from '@tanstack/react-query';

import { updateSmsOption } from '@/api/systemSetting';
import { UpdateSmsOptionParams } from '@/api/systemSetting/types';

const useUpdateSmsOption = () => {
  const fetcher = async (variable: UpdateSmsOptionParams) => {
    const result = await updateSmsOption(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useUpdateSmsOption;
