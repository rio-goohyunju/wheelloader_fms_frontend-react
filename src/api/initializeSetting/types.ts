export type DeviceHub = {
  deviceIP: string;
  deviceSerialNumber: string;
  deviceToken: string;
  deviceID: string;
  devicePW: string;
};

export interface SmsTestParams {
  senderPhoneNumber: string;
  testRecipientPhoneNumber: string;
  testContent: string;
  apiKey: string;
  agency: string;
  enable: boolean;
}

export interface SmtpTestParams {
  testEmailRecipient: string;
  address: string;
  id: string;
  password: string;
  port: string;
}

export interface DeviceHubTestParams extends DeviceHub {
  ticketID: string;
}

export interface TestResponse {
  message: string;
}

export interface SiteInitSettingParams {
  ticketID: string;
  site: {
    logoPhoto: File;
  };
  deviceHub: DeviceHub;
}

export interface SiteUserInitSettingParams {
  userid: string;
  name: string;
  password: string;
  confirmPassword: string;
  department: string;
  profilePhoto: File;
  position: string;
  phoneNumber: string;
}

export interface SystemInitSettingParams {
  user: {
    newPassword: string;
    confirmPassword: string;
  };
  system: {
    systemName: string;
  };
  sms: {
    alias: string;
    senderPhoneNumber: string;
    agency: string;
    apiKey: string;
    enable: boolean;
  };
  smtp: {
    alias: string;
    address: string;
    id: string;
    password: string;
    port: string;
  };
}
