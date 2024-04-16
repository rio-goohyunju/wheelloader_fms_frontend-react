export interface FetchHistoriesParams {
  siteID: string;
  status: string[];
  robotID: string[];
  missionID: string[];
  startTime: string;
}

export interface FetchScheduleHistoryResponse {
  id: number;
  run_uuid: string;
  start_time: number;
  mission_name: string;
  robot_name: string;
  status: string;
  duration: number;
  action_count: number;
  alarm_settings: {
    id: number;
    name: string;
    enable: boolean;
  }[];
}
