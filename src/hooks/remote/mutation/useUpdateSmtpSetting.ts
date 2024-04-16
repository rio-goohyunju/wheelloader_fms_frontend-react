import { useMutation } from '@tanstack/react-query';

import { updateSmtpSetting } from '@/api/systemSetting';
import { UpdateSmtpSettingParams } from '@/api/systemSetting/types';

const useUpdateSmtpSetting = () => {
  const fetcher = async (variable: UpdateSmtpSettingParams) => {
    const result = await updateSmtpSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useUpdateSmtpSetting;
