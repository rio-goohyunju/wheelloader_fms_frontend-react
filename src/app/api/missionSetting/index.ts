import client from '@api/client';

import {
  FetchMissionsParams,
  FetchMissionParams,
  EditMissionParams,
  FetchMissionResponse,
  FetchMissionListResponse,
} from './types';

export const fetchMissions = (params: FetchMissionsParams) => {
  return client.get<FetchMissionListResponse[]>(
    `/mission?site_id=${params.siteID}`
  );
};

export const fetchMission = (params: FetchMissionParams) => {
  return client.get<FetchMissionResponse>(`/mission/${params.missionID}`);
};

export const editMission = (params: EditMissionParams) => {
  const formData = new FormData();

  formData.append('alias', params.alias);
  formData.append('route', params.route);
  formData.append('route_description', params.routeDescription);
  formData.append('location_id', params.locationId);
  formData.append('image', params.image);

  return client.put(`/mission/${params.missionID}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
