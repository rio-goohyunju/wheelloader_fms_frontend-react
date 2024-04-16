import client from '@api/client';

import {
  AddSiteParams,
  DeleteSiteParams,
  EditSiteParams,
  FetchLogoParams,
  FetchRolesParams,
  FetchRolesResponse,
  FetchSiteResponse,
  FetchSitesResponse,
  FetchSystemSitesResponse,
  ResendEmailParams,
} from './types';

export const fetchSites = () => {
  return client.get<FetchSitesResponse[]>(`/user/site`);
};

export const fetchSystemSites = () => {
  return client.get<FetchSystemSitesResponse[]>(`/site`);
};

export const fetchSite = (siteID: string) => {
  return client.get<FetchSiteResponse>(`/user/site/${siteID}`);
};

export const fetchRoles = ({ siteID }: FetchRolesParams) => {
  return client.get<FetchRolesResponse[]>(`/site/${siteID}/role`);
};

export const addSite = (params: AddSiteParams) => {
  return client.post(`/site/initialize-ticket-send-email`, {
    data: {
      email: params.email,
      site_name: params.site_name,
    },
  });
};

export const deleteSite = (params: DeleteSiteParams) => {
  return client.delete(`/site/${params.siteID}`);
};

export const resendEmail = (params: ResendEmailParams) => {
  return client.post(`/site/initialize-ticket-resend-email`, {
    data: {
      invite_id: params.inviteID,
    },
  });
};

export const editSite = (params: EditSiteParams) => {
  return client.put(`/site/initialize-ticket-send-change-email`, {
    data: {
      email: params.email,
      site_name: params.site_name,
      invite_id: params.invite_id,
    },
  });
};

export const fetchLogo = (params: FetchLogoParams) => {
  return client.get(`/site/${params.siteID}/logo`);
};
