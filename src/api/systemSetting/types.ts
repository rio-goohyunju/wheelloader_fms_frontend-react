export interface FetchSmsSettingsParams {
  siteID: string;
}

export interface AddSmsSettingParams {
  siteID: string;
  agency: string;
  alias: string;
  api_key: string;
  enable: boolean;
  phone_number: string;
}

export interface DeleteSmsSettingParams {
  id: string;
}

export interface UpdateSmsSettingParams {
  id: string;
  agency: string;
  alias: string;
  api_key: string;
  enable: boolean;
  phone_number: string;
}

export interface TestSmsSettingParams {
  agency: string;
  api_key: string;
  enable: boolean;
  phone_number: string;
  test_content: string;
  test_phone_number: string;
}

export interface EnabledSmsSettingTestParams {
  siteID: string;
  recipients: string;
  message: string;
}

export interface EnabledSmsSettingTestResponse {
  status: {
    code: number;
    message: string;
  };
}

export interface FetchSmsSettingsResponse {
  configs: {
    id: string;
    alias: string;
    phone_number: string;
    agency: string;
    api_key: string;
    enable?: boolean;
    is_default?: boolean;
  }[];
}

export interface FetchSmtpSettingsParams {
  siteID: string;
}

export interface FetchSmtpSettingsResponse {
  tenant_id: string;
  configurations: {
    config_id: string;
    alias: string;
    account_id: string;
    enabled: boolean;
    is_default?: boolean;
  }[];
}

export interface FetchEnabledSmtpSettingResponse {
  config_id: string;
  account_id: string;
  enabled: boolean;
}

export interface AddSmtpSettingParams {
  siteID: string;
  alias: string;
  host: string;
  account_id: string;
  account_password: string;
  port: number;
  enable: boolean;
}

export interface DeleteSmtpSettingParams {
  id: string;
}

export interface UpdateSmtpSettingParams {
  id: string;
  alias: string;
  account_id: string;
  account_password: string;
  enable: boolean;
}

export interface UpdateSmtpSettingEnableParams {
  siteID: string;
  id: string;
  enable: boolean;
}

export interface TestSmtpSettingParams {
  host: string;
  account_id: string;
  account_password: string;
  port: number;
  test_recipient: string;
}

export interface EnabledSmtpSettingTestParams {
  siteID: string;
  recipient: string;
}

export interface EnabledSmtpSettingTestResponse {
  code: string;
  message: string;
}

export interface FetchSmsOptionParams {
  siteID: string;
}

export interface FetchSmsOptionResponse {
  id: string;
  setting_time: number;
}

export interface AddSmsOptionParams {
  siteID: string;
  setting_time: number;
}

export interface UpdateSmsOptionParams {
  id: string;
  setting_time: number;
  siteID: string;
}

export interface AddSmsOptionResponse {
  id: string;
  setting_time: number;
}

export interface FetchSmtpOptionParams {
  siteID: string;
}

export interface FetchSmtpOptionResponse {
  id: string;
  method: string;
  setting_time: number;
}

export interface AddSmtpOptionParams {
  siteID: string;
  setting_time: number;
  method: string;
}

export interface UpdateSmtpOptionParams {
  id: string;
  siteID: string;
  method: string;
  setting_time: number;
}
