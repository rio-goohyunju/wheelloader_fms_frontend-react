export interface FetchAccountParams {
  siteID: string;
}

export interface AddAccountParams {
  siteID: string;
  roleID: string;
  targetEmail: string;
}

export interface FetchAccountResponse {
  id: string;
  invite_date: number;
  inviter_user_id: string;
  role_id: string;
  role_name: string;
  status: number;
  target_email: string;
  update_date: number;
}

export interface ReInviteAccountParams {
  invite_id: string;
}

export interface AcceptInviteParmas {
  ticketID: string;
}
