type StatisticsDetails = {
  name: string;
  data: number[];
};

export interface FetchTotalStatusStatisticsParams {
  siteId: string;
}

export interface FetchOperationPercentStatisticsParams {
  siteId: string;
  robotId: string;
  startDate: number;
  endDate: number;
}

export interface FetchOperationNumberStatisticsParams {
  siteId: string;
  robotId: string;
  startDate: number;
  endDate: number;
}

export interface FetchRobotMissionStatisticsParams {
  robotId: string;
  startDate: number;
  endDate: number;
}

type StatistcsResponse = {
  date: number[];
  details: StatisticsDetails;
};

export interface FetchOperationPercentStatisticsResponse
  extends StatistcsResponse {}
export interface FetchOperationNumberStatisticsResponse
  extends StatistcsResponse {}

export interface FetchRobotMissionStatisticsResponse {
  date: number[];
  details: StatisticsDetails[];
}

export interface FetchTotalStatusResponse {
  total_status: { name: string; y: number }[];
}
