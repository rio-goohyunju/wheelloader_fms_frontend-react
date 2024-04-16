import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { editMission } from '@/api/missionSetting';
import { EditMissionParams } from '@/api/missionSetting/types';

const useEditMission = (
  options?: UseMutationOptions<EditMissionParams, AxiosError, EditMissionParams>
) => {
  const fetcher = async (variable: EditMissionParams) => {
    const result = await editMission(variable);
    return result.data;
  };

  return useMutation({
    mutationFn: fetcher,
    ...options,
  });
};

export default useEditMission;
