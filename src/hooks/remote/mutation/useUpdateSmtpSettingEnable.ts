import { useMutation } from '@tanstack/react-query';

import { updateSmtpSettingEnable } from '@/api/systemSetting';
import { UpdateSmtpSettingEnableParams } from '@/api/systemSetting/types';

const useUpdateSmtpSettingEnable = () => {
  const fetcher = async (variable: UpdateSmtpSettingEnableParams) => {
    const result = await updateSmtpSettingEnable(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useUpdateSmtpSettingEnable;
