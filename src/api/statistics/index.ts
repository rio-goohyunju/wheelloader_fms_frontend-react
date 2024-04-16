import client from '@api/client';

import {
  FetchRobotMissionStatisticsParams,
  FetchTotalStatusResponse,
  FetchTotalStatusStatisticsParams,
  FetchRobotMissionStatisticsResponse,
  FetchOperationNumberStatisticsResponse,
  FetchOperationPercentStatisticsResponse,
  FetchOperationPercentStatisticsParams,
  FetchOperationNumberStatisticsParams,
} from './types';

export const fetchTotalStatusStatistics = (
  variable: FetchTotalStatusStatisticsParams
) => {
  const params = new URLSearchParams({
    site_id: variable.siteId,
  });

  return client.get<FetchTotalStatusResponse>(
    `/statistics/total-status?${params.toString()}`
  );
};

export const fetchOperationPercentStatistics = (
  variable: FetchOperationPercentStatisticsParams
) => {
  const params = new URLSearchParams({
    site_id: variable.siteId,
    robotId: variable.robotId,
    start_date: variable.startDate.toString(),
    end_date: variable.endDate.toString(),
  });

  return client.get<FetchOperationPercentStatisticsResponse>(
    `/statistics/operation-percent?${params.toString()}`
  );
};

export const fetchOperationNumberStatistics = (
  variable: FetchOperationNumberStatisticsParams
) => {
  const params = new URLSearchParams({
    site_id: variable.siteId,
    robotId: variable.robotId,
    start_date: variable.startDate.toString(),
    end_date: variable.endDate.toString(),
  });

  return client.get<FetchOperationNumberStatisticsResponse>(
    `/statistics/operation-number?${params.toString()}`
  );
};

export const fetchRobotMissionStatistics = (
  variable: FetchRobotMissionStatisticsParams
) => {
  const params = new URLSearchParams({
    start_date: variable.startDate.toString(),
    end_date: variable.endDate.toString(),
  });

  return client.get<FetchRobotMissionStatisticsResponse>(
    `/statistics/robot/${variable.robotId}?${params.toString()}`
  );
};
