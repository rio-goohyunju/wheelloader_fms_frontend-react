import { useMutation } from '@tanstack/react-query';

import { addSmtpOption } from '@/api/systemSetting';
import { AddSmtpOptionParams } from '@/api/systemSetting/types';

const useAddSmtpOption = () => {
  const fetcher = async (variable: AddSmtpOptionParams) => {
    const result = await addSmtpOption(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useAddSmtpOption;
