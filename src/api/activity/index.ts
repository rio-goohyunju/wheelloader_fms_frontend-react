import client from "@/app/api/client";
import { ActivitiesParams } from "./types";

export const fetchActivities = ({ userId }: ActivitiesParams) => {
    const params = new URLSearchParams({
        userId,
    });

    return client.get(`/activities?${params.toString()}`);
};
