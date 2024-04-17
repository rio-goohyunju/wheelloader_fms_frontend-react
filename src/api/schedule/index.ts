import dayjs from "dayjs";

import {
    DeleteScheduleParams,
    FetchBlockerParams,
    FetchBlockerResponse,
    FetchParams,
    FetchScheduleLogsParams,
    FetchScheduleResponse,
    RegisterScheduleParams,
} from "./types";
import client from "../client";

export const fetchSchedules = (params: FetchParams) => {
    return client.get<FetchScheduleResponse[]>(`/schedule?site_id=${params.siteID}&status=SCHEDULE`);
};

export const registerSchedule = (params: RegisterScheduleParams) => {
    return client.post(`schedule`, {
        data: {
            site_id: params.siteID,
            start_time: dayjs(params.startTime).unix(),
            robot_id: params.robotID,
            mission_id: params.missionID,
            alarm_settings: [
                { id: 1, name: "email", enable: params.isEmailChecked },
                { id: 2, name: "sms", enable: params.isSMSChecked },
            ],
        },
    });
};

export const deleteSchedule = (params: DeleteScheduleParams) => {
    return client.delete(`schedule/${params.id}`);
};

export const fetchScheduleLogs = (params?: FetchScheduleLogsParams) => {
    const searchParams = new URLSearchParams();

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            searchParams.append(key, String(value));
        });
    }

    return client.get("schedule/log", {
        params: searchParams,
    });
};

export const fetchBlocker = (params: FetchBlockerParams) => {
    return client.get<FetchBlockerResponse>(`robot/blocker/${params.robotID}/?site_id=${params.siteID}`);
};
