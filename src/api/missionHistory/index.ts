// history List를 가져오는 api

import client from '../client';

import { FetchHistoriesParams, FetchScheduleHistoryResponse } from './types';

export const fetchScheduleHistories = ({
  status,
  robotID,
  missionID,
  startTime,
  siteID,
}: FetchHistoriesParams) => {
  const params = new URLSearchParams({
    site_id: siteID,
    status: status.join(','),
    robot_id: robotID.join(','),
    mission_id: missionID.join(','),
    start_time: startTime,
  });

  return client.get<FetchScheduleHistoryResponse[]>(
    `schedule?${params.toString()}`
  );
};
