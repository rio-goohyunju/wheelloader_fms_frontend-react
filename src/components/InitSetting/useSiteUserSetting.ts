/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useNavigate } from 'react-router-dom';

import { useInitContext } from '@/hooks/constate/InitContext';
import useSiteUserInit from '@/hooks/remote/mutation/useSiteUserInit';
import { showToast } from '@/hooks/toast/toastUtils';

import {
  SiteAdminFormValue,
  SiteUserFormValue,
  SystemAdminFormValue,
} from './types';
import { UserAccountForm } from './UserInfoForm/UserAccountForm';
import { UserProfileForm } from './UserInfoForm/UserProfileForm';

export const useSiteUserSetting = () => {
  const { activeStep, setIsLoading } = useInitContext();

  const { mutateAsync: siteUserInit } = useSiteUserInit();
  const navigate = useNavigate();

  const siteUserSubmit = async (data: SiteUserFormValue) => {
    try {
      setIsLoading(true);
      await siteUserInit(data);
      showToast('success', '전송을 성공했습니다.');
      setIsLoading(false);
      navigate('/');
    } catch (e) {
      showToast('error', '전송오류');
      setIsLoading(false);
    }
  };

  const steps = [
    {
      label: '계정 설정',
      component: UserAccountForm,
    },
    {
      label: '프로필 설정',
      component: UserProfileForm,
    },
  ];

  const handleSubmitStep = async (
    data: SystemAdminFormValue | SiteAdminFormValue | SiteUserFormValue
  ) => {
    try {
      setIsLoading(true);
      if (activeStep === 1) await siteUserSubmit(data as SiteUserFormValue);
    } catch (e) {
      showToast('error', '전송오류');
      setIsLoading(false);
    }
  };

  return { steps, handleSubmitStep };
};
