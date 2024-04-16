import { useMutation } from '@tanstack/react-query';

import { addSmsOption } from '@/api/systemSetting';
import { AddSmsOptionParams } from '@/api/systemSetting/types';

const useAddSmsOption = () => {
  const fetcher = async (variable: AddSmsOptionParams) => {
    const result = await addSmsOption(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useAddSmsOption;
