import client from '@api/client';

export const fetchAlarmSettings = () => {
  return client.get(`/alarm-setting`);
};
