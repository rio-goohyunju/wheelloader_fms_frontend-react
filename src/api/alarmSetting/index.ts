import client from "../client";

export const fetchAlarmSettings = () => {
    return client.get(`/alarm-setting`);
};
