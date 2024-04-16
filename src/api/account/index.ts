import client from '@api/client';

import {
  AcceptInviteParmas,
  AddAccountParams,
  FetchAccountParams,
  ReInviteAccountParams,
} from './types';

export const fetchAccount = ({ siteID }: FetchAccountParams) => {
  const params = new URLSearchParams({
    site_id: siteID.toString(),
  });
  return client.get(`/account?${params.toString()}`);
};

export const addAccount = (params: AddAccountParams) => {
  return client.post(`/account/invite`, {
    data: {
      site_id: params.siteID,
      target_email: params.targetEmail,
      role_id: params.roleID,
    },
  });
};

export const reInviteAccount = (params: ReInviteAccountParams) => {
  return client.post(`/account/re-invite`, {
    data: {
      invite_id: params.invite_id,
    },
  });
};

export const acceptInvite = (params: AcceptInviteParmas) => {
  return client.post(`/account/accept-invite/${params.ticketID}`);
};
