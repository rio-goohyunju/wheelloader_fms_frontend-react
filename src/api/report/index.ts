import client from "../client";
import { CreatePdfParams, FetchReportParams } from "./types";

export const createPdf = (params: CreatePdfParams) => {
    return client.post(`/report/pdf/${params.siteID}/${params.reportUUID}`, params.formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const fetchReport = (params: FetchReportParams) => {
    return client.get(`/report/${params.uuid}`);
};

export const deleteReport = (uuid: string[]) => {
    return client.delete(`/report/`, { data: { uuid } });
};
