import client from '@api/client';

import {
  FetchLocationsResponse,
  FetchLocationsParams,
  AddLocationParams,
  DeleteLocationParams,
  UpdateLocationParams,
} from './types';

export const fetchLocations = ({ siteID }: FetchLocationsParams) => {
  const params = new URLSearchParams({
    site_id: siteID!.toString(),
  });

  return client.get<FetchLocationsResponse[]>(`/location?${params.toString()}`);
};

export const addLocation = (params: AddLocationParams) => {
  return client.post(`/location/${params.siteID}`, {
    data: {
      name: params.name,
    },
  });
};

export const deleteLocation = (params: DeleteLocationParams) => {
  return client.delete(`/location/${params.location_id}`);
};

export const updateLocation = (params: UpdateLocationParams) => {
  return client.put(`/location/${params.location_id}`, {
    data: {
      name: params.name,
    },
  });
};
