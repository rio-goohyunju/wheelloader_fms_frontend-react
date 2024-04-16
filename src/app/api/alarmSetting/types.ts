export interface FetchAlarmSettingsResponse {
  data: {
    id: string;
    alarm_name: string;
    kind: string;
    event_message: string;
    coping_message: string;
    range: string;
    unit: string;
  }[];
}
