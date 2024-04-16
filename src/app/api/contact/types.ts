export type Subscription = {
  id: string;
  service_name?: string;
  enable?: boolean;
};

export type Loactions = {
  id: string;
  name: string;
};

export type FetchContactResponse = ContactInformation[];

export interface ContactInformation {
  id?: string;
  position: string;
  department: string;
  name: string;
  phone_number: string;
  email: string;
  locations?: Loactions[];
  reception_methods?: Subscription[];
}

export interface ModifyContactParams extends ContactInformation {
  siteID?: string;
  locationIds: string[];
  subscriptionIds: string[];
}
