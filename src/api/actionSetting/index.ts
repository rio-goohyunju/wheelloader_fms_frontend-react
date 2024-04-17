import client from "../client";
import { EditActionParams, FetchActionsParams, FetchActionsResponse } from "./types";

export const fetchActionList = (params: FetchActionsParams) => {
    return client.get<FetchActionsResponse[]>(`/action/${params.missionID}`);
};

export const editAction = (params: EditActionParams) => {
    return client.put(`/action/${params.id}`, {
        data: {
            alias: params.alias,
            description: params.description,
            line: params.line,
            location: params.location,
            unit: params.unit,
        },
    });
};
