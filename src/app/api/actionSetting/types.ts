export type Action = {
  id: string;
  action_name: string;
  alias: string;
  location: string;
  line: string;
  description: string;
  unit: string;
};

export interface FetchActionsResponse extends Action {}

export interface FetchActionsParams {
  missionID: string;
}

export interface EditActionParams extends Action {}
