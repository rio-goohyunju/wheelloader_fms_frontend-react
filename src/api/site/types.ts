import { Site } from '../auth/types';

export interface FetchRolesParams {
  siteID?: string;
}

export interface FetchSitesParams {
  userID: string;
}

export interface FetchRolesResponse {
  id: string;
  site_id: string;
  name: 'Administrator' | 'Operator' | 'Viewer';
  description: string;
  creation_date: Date;
  update_date: Date;
}

export interface FetchSiteResponse extends Site {}

export interface FetchSitesResponse {
  name: string;
  site_id: string;
  status: number;
  type: number;
}

export interface invitedUser {
  id: string;
  role_id: string;
  role_name: string;
  target_email: string;
  inviter_user_id: string;
  status: number;
  invite_date: number;
  update_date: number;
}

export interface FetchSystemSitesResponse {
  Site: {
    site_id: string;
    name: string;
    type: number;
    status: number;
  };
  invited_user: invitedUser;
}

export interface AddSiteParams {
  email: string;
  site_name: string;
}

export interface AddSiteResponse {
  expiration_time: number;
  invited_user: invitedUser;
  site: {
    site_id: string;
    name: string;
    status: number;
    type: number;
  };
}

export interface DeleteSiteParams {
  siteID: string;
}

export interface ResendEmailParams {
  inviteID: string;
}

export interface EditSiteParams {
  email: string;
  site_name: string;
  invite_id: string;
}

export interface FetchLogoParams {
  siteID: string;
}
