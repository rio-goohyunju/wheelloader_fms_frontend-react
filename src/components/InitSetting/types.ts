import { DeviceHub } from '@/api/initializeSetting/types';

export type CombinedFormValue = SystemAdminFormValue | SiteAdminFormValue;

export interface SystemAdminFormValue {
  siteID: string;
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
  smsTest: {
    testRecipientPhoneNumber: string;
    testContent: string;
  };
  smtpTest: {
    testEmailRecipient: string;
  };
  smtp: {
    alias: string;
    address: string;
    id: string;
    password: string;
    port: string;
  };
}

export interface SiteAdminFormValue {
  ticketID: string;
  site: {
    logoPhoto: File;
  };
  deviceHub: DeviceHub;
}

export interface SiteUserFormValue {
  userid: string;
  name: string;
  password: string;
  confirmPassword: string;
  department: string;
  profilePhoto: File;
  position: string;
  phoneNumber: string;
}
