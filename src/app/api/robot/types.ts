export interface FetchRobotsParams {
  siteID: string;
}
export interface FetchRobotParams {
  robotID: string;
}

export interface RobotData {
  ip?: string;
  id: string;
  has_fault?: boolean;
  site_id?: string;
  model_id?: string;
  connection_type?: number;
  serial_number?: string;
  name?: string;
  address?: string;
  status?: number;
  parent_device_hub_id?: string;
  battery?: number;
  mission_running?: boolean;
  dock_status?: number;
  task_count?: number;
}

export interface FetchRobotResponse extends RobotData {}

export interface FetchRobotsResponse {
  id: string;
  model_id: string;
  serial_number: string;
  name: string;
  address: string;
  connection_type: number;
  status: number;
}

export interface FetchRobotOperationalStatusParams {
  robotId: string;
  startDate: number;
  endDate: number;
  siteID: string;
}

export interface FetchRobotOperationalStatusResponse {
  distance_total?: number;
  time_total?: number;
  total_mission_count?: number;
}

export interface fetchDeviceHubResponse {
  id: string;
  site_id: string;
  type: number;
  serial_number: string;
  address: string;
  account_id: string;
  account_password: string;
  api_token: string;
  status: number;
}
export interface addRobotParams {
  site_id: string;
  serialNumber: string;
  name: string;
  ip: string;
  id: string;
  password: string;
  parent_device_hub_id: string;
}

export interface addRobotResponse {
  id: string;
  model_id: string;
  serial_number: string;
  name: string;
  address: string;
  connection_type: number;
  status: number;
}

export interface updateRobotParams {
  robot_id: string;
  serialNumber: string;
  name: string;
  ip: string;
  id: string;
  password: string;
  parent_device_hub_id: string;
}

export interface remoteStatusRobotParams {
  siteID: string;
  robotID: string;
  status: string;
}
