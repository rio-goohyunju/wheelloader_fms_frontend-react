import constate from 'constate';
import { useParams } from 'react-router-dom';

import useSmsSettings from '../remote/query/useSmsSettings';

const useSystemSettingData = () => {
  const { siteID } = useParams();
  const { data: smsSettings } = useSmsSettings({
    siteID: siteID ?? '',
  });

  return {
    smsSettings,
  };
};

export const [SystemSettingProvider, useSystemSettingContext] =
  constate(useSystemSettingData);
