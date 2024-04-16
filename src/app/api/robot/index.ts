import client from '@api/client';

import {
  FetchRobotOperationalStatusParams,
  FetchRobotParams,
  FetchRobotResponse,
  FetchRobotsParams,
  FetchRobotsResponse,
  addRobotParams,
  addRobotResponse,
  fetchDeviceHubResponse,
  remoteStatusRobotParams,
  updateRobotParams,
} from './types';

export const fetchRobots = ({ siteID }: FetchRobotsParams) => {
  const params = new URLSearchParams({
    site_id: siteID.toString(),
  });

  return client.get<FetchRobotsResponse[]>(`/robot?${params.toString()}`);
};

export const fetchRobot = ({ robotID }: FetchRobotParams) => {
  return client.get<FetchRobotResponse>(`/robot/${robotID}`);
};

export const fetchRobotOperationalStatus = ({
  robotId,
  startDate,
  endDate,
  siteID,
}: FetchRobotOperationalStatusParams) => {
  const params = new URLSearchParams({
    start_date: startDate.toString(),
    end_date: endDate.toString(),
    site_id: siteID.toString(),
  });

  return client.get(
    `/robot/operational-status/${robotId}?${params.toString()}`
  );
};

export const fetchDeviceHub = (siteID: string) => {
  return client.get<fetchDeviceHubResponse>(`/device-hub?site_id=${siteID}`);
};

export const addRobot = (params: addRobotParams) => {
  return client.post<addRobotResponse>(`/robot?site_id=${params.site_id}`, {
    data: {
      serial_number: params.serialNumber,
      name: params.name,
      address: params.ip,
      account_id: params.id,
      account_password: params.password,
      parent_device_hub_id: params.parent_device_hub_id,
    },
  });
};

export const updateRobot = (params: updateRobotParams) => {
  return client.put(`robot/${params.robot_id}`, {
    data: {
      serial_number: params.serialNumber,
      name: params.name,
      address: params.ip,
      account_id: params.id,
      account_password: params.password,
      parent_device_hub_id: params.parent_device_hub_id,
    },
  });
};

export const deleteRobot = (robotID: string) => {
  return client.delete(`robot/${robotID}`);
};

export const remoteStatusRobot = (params: remoteStatusRobotParams) => {
  return client.post(`mission/control?site_id=${params.siteID}`, {
    data: {
      robot_id: params.robotID,
      target_status: params.status,
    },
  });
};
