import { useNavigate, useParams } from 'react-router-dom';

import { useInitContext } from '@/hooks/constate/InitContext';
import { useSiteInit } from '@/hooks/remote';
import { showToast } from '@/hooks/toast/toastUtils';

import { DeviceAdminIdPassForm } from './SiteForm/DeviceAdminIdPassForm';
import { SiteLogoForm } from './SiteForm/SiteLogoForm';
import {
  SiteAdminFormValue,
  SiteUserFormValue,
  SystemAdminFormValue,
} from './types';

export const useSiteInitSetting = () => {
  const { activeStep, setIsLoading } = useInitContext();
  const { mutateAsync: siteInit } = useSiteInit();
  const navigate = useNavigate();
  const { ticketID } = useParams<{ ticketID: string }>();

  const steps = [
    {
      label: '로고설정',
      component: SiteLogoForm,
    },
    {
      label: '디바이스 연결정보',
      component: DeviceAdminIdPassForm,
    },
  ];

  const scoutAdminSubmit = async (data: SiteAdminFormValue) => {
    try {
      setIsLoading(true);
      const initParams = { ...data };
      if (ticketID) initParams.ticketID = ticketID;
      await siteInit(initParams);
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
      if (activeStep === 1) await scoutAdminSubmit(data as SiteAdminFormValue);
    } catch (e) {
      showToast('error', '전송오류');
      setIsLoading(false);
    }
  };

  return { steps, handleSubmitStep };
};
