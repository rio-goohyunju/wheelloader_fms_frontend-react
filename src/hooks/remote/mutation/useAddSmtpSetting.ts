import { useMutation } from '@tanstack/react-query';

import { addSmtpSetting } from '@/api/systemSetting';
import { AddSmtpSettingParams } from '@/api/systemSetting/types';

const useAddSmtpSetting = () => {
  const fetcher = async (variable: AddSmtpSettingParams) => {
    const result = await addSmtpSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useAddSmtpSetting;
