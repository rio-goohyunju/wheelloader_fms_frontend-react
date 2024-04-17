import client from "../client";

import { FetchAlertHistoriesParams, FetchAlertHistoriesResponse, FetchAlertHistoryReportParams } from "./type";

export const fetchAlertHistories = (variable: FetchAlertHistoriesParams) => {
    const params = new URLSearchParams({
        site_id: variable.site_id,
        status: variable.status,
        page: variable.page.toString(),
        pageSize: variable.pageSize.toString(),
    });
    return client.get<FetchAlertHistoriesResponse>(`/alert-history?${params.toString()}`);
};

export const fetchAlertHistoryReport = (variable: FetchAlertHistoryReportParams) => {
    return client.get(`/alert-history/detail/${variable.uid}?site_id=${variable.siteID}`);
};
