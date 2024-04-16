import { useMutation } from '@tanstack/react-query';

import { deleteSmtpSetting } from '@/api/systemSetting';
import { DeleteSmtpSettingParams } from '@/api/systemSetting/types';

const useDeleteSmtpSetting = () => {
  const fetcher = async (variable: DeleteSmtpSettingParams) => {
    const result = await deleteSmtpSetting(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
  });
};

export default useDeleteSmtpSetting;
