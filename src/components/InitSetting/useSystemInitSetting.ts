import { useNavigate } from 'react-router-dom';

import { useInitContext } from '@/hooks/constate/InitContext';
import { useSystemInit } from '@/hooks/remote';
import { showToast } from '@/hooks/toast/toastUtils';

import { AdminInfoForm } from './SystemAdminForm/AdminInfoForm';
import { SMSInfoForm } from './SystemAdminForm/SMSInfoForm';
import { SMTPInfoForm } from './SystemAdminForm/SMTPInfoForm';
import { SystemInfoForm } from './SystemAdminForm/SystemInfoForm';
import {
  SiteAdminFormValue,
  SiteUserFormValue,
  SystemAdminFormValue,
} from './types';

export const useSystemInitSetting = () => {
  const { activeStep, setIsLoading } = useInitContext();
  const { mutateAsync: systemInit } = useSystemInit();
  const navigate = useNavigate();

  const steps = [
    {
      label: '계정 설정',
      component: AdminInfoForm,
    },
    {
      label: '시스템 기본설정',
      component: SystemInfoForm,
    },
    { label: 'SMS 관련 정보 입력', component: SMSInfoForm },
    { label: 'SMTP 관련 정보 입력', component: SMTPInfoForm },
  ];
  const systemInfoSubmit = async (data: SystemAdminFormValue) => {
    try {
      setIsLoading(true);
      await systemInit(data);
      showToast('success', '전송을 성공했습니다.');
      setIsLoading(false);
      navigate('/');
    } catch (e) {
      showToast('error', '전송오류');
      setIsLoading(false);
    }
  };

  const handleSubmitStep = async (
    data: SystemAdminFormValue | SiteAdminFormValue | SiteUserFormValue
  ) => {
    try {
      setIsLoading(true);
      if (activeStep === 3)
        await systemInfoSubmit(data as SystemAdminFormValue);
    } catch (e) {
      showToast('error', '전송오류');
      setIsLoading(false);
    }
  };

  return { steps, handleSubmitStep };
};
