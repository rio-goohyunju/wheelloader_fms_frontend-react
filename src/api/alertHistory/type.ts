export interface FetchAlertHistoriesParams {
  site_id: string;
  status: string;
  page: number;
  pageSize: number;
}

export interface FetchAlertHistoryReportParams {
  uid: string;
  siteID: string;
}

export interface FetchAlertHistoryReportResponse {
  issue_title: string;
  robot_name: string;
  reason: string;
  event_date: number;
  handler_issue: string;
  alarm_image: string;
  robot_image: string[];
}

export interface FetchAlertHistoryResponse {
  id: string;
  robot_id: string;
  robot_name: string;
  mission_name: string;
  title: string;
  level: string;
  message: string;
  event_date: number;
  alert_photo: string;
  location_photo: string;
}

export interface FetchAlertHistoriesResponse {
  total: number;
  pageIndex: number;
  numberPerPage: number;
  data: {
    id: string;
    robot_name: string;
    mission_name: string;
    title: string;
    level: string;
    message: string;
    event_date: number;
    alert_photo: string;
    location_photo: string;
  }[];
}
