export type Site = {
  creation_date: number;
  logo_photo: string;
  name: string;
  permission?: Permission[];
  role_id: string;
  role_name: string;
  site_id: string;
  status: number;
  type: number;
  update_date: number;
};

type Permission = {
  action: string;
  name: string;
  object: string;
  permission_id: string;
  type: string;
};

export type User = {
  department?: string;
  email: string;
  join_date?: number;
  name?: string;
  password_update_date?: number;
  phone_number?: string;
  position?: string;
  profile_photo?: string;
  status: number;
  update_date?: number;
  user_id: string;
};

export interface FetchUserResponse extends User {}

export interface SendPasswordResetEmailParams {
  email: string;
}

export interface ValidateTicketParams {
  ticketID: string;
}

export interface PerformLoginParams {
  email: string;
  password: string;
}

export interface FetchUserParams {
  userID: string;
}

export interface PasswordResetParams {
  newPassword: string;
  ticketID?: string;
}

export interface ChangeProfileParams {
  department: string;
  password: string;
  position: string;
}

export interface userLoginResponse {
  access_token: string;
  user_id: string;
  status: number;
  password_update_date: number;
}

export interface adminLoginResponse {
  access_token: string;
  email: string;
  password_update_data: number;
  status: number;
  user_id: string;
  site: Site[];
}

export interface resetTokenResponse {
  access_token: string;
  email: string;
  password_update_data: Date;
  status: number;
  user_id: string;
}
