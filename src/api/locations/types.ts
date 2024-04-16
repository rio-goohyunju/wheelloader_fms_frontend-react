export interface FetchLocationsParams {
  siteID?: string;
}

export interface FetchLocationsResponse {
  location_id: string;
  name: string;
  s3_location: string;
}

export interface AddLocationParams {
  siteID: string;
  name: string;
}

export interface DeleteLocationParams {
  location_id: string;
}

export interface UpdateLocationParams {
  location_id: string;
  name: string;
}
