import { useEffect } from 'react';

import constate from 'constate';
import { useParams } from 'react-router-dom';

import useWebSocket from '../common/useWebSocket';

interface Battery {
  current: number;
  charged_percent: number;
  status: string;
  estimated_runtime: number;
}

interface DockInfo {
  status: string;
  type: string;
}

interface NetworkInfo {
  mode: string;
}

interface DeviceStatus {
  status: string;
}

interface DeviceMission {
  status: string;
  mission: string;
}

export interface DeviceLocation {
  x: number;
  y: number;
  z: number;
}

interface DeviceRotationIn {
  x: number;
  y: number;
  z: number;
}

interface DeviceSystemEstop {
  name: string;
  type: string;
  state: string;
  state_description: string;
}

interface DeviceLeaseOwner {
  client_name: string;
  user_name: string;
}

interface Schedule {
  scheduled: number;
  progressed: number;
}

export interface RobotData {
  robot_id: string;
  battery: Battery;
  dock_info: DockInfo;
  network_info: NetworkInfo;
  device_status: DeviceStatus;
  device_location: DeviceLocation;
  device_rotation_in: DeviceRotationIn;
  device_system_estop: DeviceSystemEstop;
  device_lease_owner: DeviceLeaseOwner;
  schedule: Schedule;
  device_mission: DeviceMission; // 추가된 필드
}

const useMonitor = () => {
  const { siteID } = useParams();

  const robotData = useWebSocket<RobotData>(
    `wss://${window.location.hostname}/api/v0/ws/robot?type=robot&robot_id=18654615-972f-46da-9a45-e933c492df28&site_id=${siteID}`
  );

  useEffect(() => {
    if (robotData) {
      const storedData = sessionStorage.getItem('robotData');
      if (!storedData) {
        sessionStorage.setItem('robotData', JSON.stringify(robotData));
      } else {
        const parsedStoredData = JSON.parse(storedData);
        let isUpdated = false;
        Object.keys(robotData).forEach((key) => {
          if (robotData[key] !== parsedStoredData[key]) {
            parsedStoredData[key] = robotData[key];
            isUpdated = true;
          }
        });
        if (isUpdated) {
          sessionStorage.setItem('robotData', JSON.stringify(parsedStoredData));
        }
      }
    }
  }, [robotData]);

  return { robotData };
};

export const [MonitorProvider, useMonitorContext] = constate(useMonitor);
