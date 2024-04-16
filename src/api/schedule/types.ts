import { Dayjs } from 'dayjs';

export interface FetchParams {
  siteID: string;
}

export interface FetchScheduleResponse {
  id: number;
  start_time: number;
  mission_name: string;
  robot_name: string;
  robot_id: string;
  status: string;
  action_count: number;
  alarm_settings: {
    id: number;
    name: string;
    enable: boolean;
  }[];
}

export interface RegisterScheduleParams {
  siteID: string;
  startTime: Dayjs;
  robotID: string;
  missionID: string;
  isEmailChecked: boolean;
  isSMSChecked: boolean;
}

export interface DeleteScheduleParams {
  id: number;
}

export interface FetchScheduleLogsParams {
  from: string;
  end: string;
}
export interface FetchBlockerParams {
  siteID: string;
  robotID: string;
}

export interface FetchBlockerResponse {
  time_invalid: boolean;
  disabled: boolean;
  in_blackout: boolean;
  robot_busy: boolean;
  bad_dock_state: boolean;
  lease_inaccessible: boolean;
  is_can_run: boolean;
}
