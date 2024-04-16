import { useMutation } from '@tanstack/react-query';

import { updateSmtpOption } from '@/api/systemSetting';
import { UpdateSmtpOptionParams } from '@/api/systemSetting/types';

const useUpdateSmtpOption = () => {
  const fetcher = async (variable: UpdateSmtpOptionParams) => {
    const result = await updateSmtpOption(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useUpdateSmtpOption;
