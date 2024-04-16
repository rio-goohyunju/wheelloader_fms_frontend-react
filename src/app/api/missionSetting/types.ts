export interface FetchMissionsParams {
  siteID: string;
}

export interface FetchMissionParams {
  missionID: string;
}

export interface FetchRouteImageParams {
  uuid: string;
}

export interface FetchMissionListResponse {
  mission_id: string;
  name: string;
  alias: string;
  created_date: number;
  updated_date: number;
  action_count: number;
  location: string;
}

export type MissionEditFormValue = {
  alias: string;
  route: string;
  routeDescription: string;
  locationId: string;
  image: File;
};

type Mission = {
  mission_name: string;
  updated_date: number;
  alias: string;
  route: string;
  route_description: string;
  location: {
    location_id: string;
    name: string;
    s3_location: string;
  };
};

export interface FetchMissionResponse extends Mission {}

export interface EditMissionParams extends MissionEditFormValue {
  missionID: string;
}
