export interface CreatePdfParams {
  formData: FormData;
  reportUUID: string;
  siteID: string;
}
export interface FetchReportParams {
  uuid: string;
}

export interface FetchReportResponse {
  run_uuid: string;
  start_time: number;
  end_time: number;
  time_spent: number;
  status: string;
  mission: Mission;
  robot: Robot;
  actions: Action[];
  battery: string;
  distance: string;
}

export interface FetchReportsParams {
  listPage: number;
  limit: number;
  MissionName?: string[];
  endDate?: string;
  startDate?: string;
  robotName?: string[];
  SuccessFailure?: string[];
}
export interface FetchReportsResponse {
  reports: Report[];
  pageCnt: number;
  curPage: number;
}

export interface Report {
  uuid: string;
  url: string;
  mission: Mission[];
  robot: Robot[];
  created_at: string;
}

export interface Mission {
  id: string;
  name: string;
  map_url: string;
  location_alias: string;
  mission_alias: string;
  detail_route: string;
  route_description: string;
}

export interface Robot {
  ip: string;
  name: string;
}

export interface RobotInfo {
  name: string;
  ip: string;
}

export interface Action {
  id: string;
  name: string;
  time: number;
  alias: string;
  line: string;
  location: string;
  description: string;
  unit: string;
  data_captures: DataCapture[];
}

export interface DataCapture {
  channel_name: string;
  time: number;
  image_url: string;
  key_results: KeyResult[];
}

export interface KeyResult {
  name: string;
  value: string;
}
