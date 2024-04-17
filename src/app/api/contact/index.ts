import { GridRowId } from "@mui/x-data-grid";

import client from "../client";

import { ModifyContactParams, FetchContactResponse } from "./types";

export const fetchContact = (siteID: string) => {
    return client.get<FetchContactResponse>(`/contact/${siteID}`);
};

export const addContact = (params: ModifyContactParams) => {
    return client.post(`/contact/${params.siteID}`, {
        data: {
            position: params.position,
            department: params.department,
            name: params.name,
            phone_number: params.phone_number.replace(/-/g, ""),
            email: params.email,
            locations: params.locationIds,
            subscription_methods: params.subscriptionIds,
        },
    });
};

export const updateContact = (params: ModifyContactParams) => {
    return client.put(`/contact/${params.id}?site_id=${params.siteID}`, {
        data: {
            position: params.position,
            department: params.department,
            name: params.name,
            phone_number: params.phone_number.replace(/-/g, ""),
            email: params.email,
            locations: params.locationIds,
            subscription_methods: params.subscriptionIds,
        },
    });
};

export const deleteContact = (params: { id: GridRowId }) => {
    return client.delete(`/contact/${params.id}`);
};

export const fetchSubscriptions = (siteID: string) => {
    return client.get(`/contact/${siteID}/subs`);
};
