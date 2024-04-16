import { useMutation } from '@tanstack/react-query';

import { enabledSmsSettingTest } from '@/api/systemSetting';
import { EnabledSmsSettingTestParams } from '@/api/systemSetting/types';

const useEnabledSmsSettingTest = () => {
  const fetcher = async (variable: EnabledSmsSettingTestParams) => {
    const result = await enabledSmsSettingTest(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useEnabledSmsSettingTest;
