import { useMutation } from '@tanstack/react-query';

import { enabledSmtpSettingTest } from '@/api/systemSetting';
import { EnabledSmtpSettingTestParams } from '@/api/systemSetting/types';

const useEnabledSmtpSettingTest = () => {
  const fetcher = async (variable: EnabledSmtpSettingTestParams) => {
    const result = await enabledSmtpSettingTest(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useEnabledSmtpSettingTest;
