import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { resetTokenResponse } from "./auth/types";
import cookies, { JWT_EXPIRY_TIME } from "../../../common-utils/cookie";

const baseURL =
    process.env.REACT_APP_ENV !== "dev"
        ? `${window.location.origin}/api/v0`
        : process.env.REACT_APP_BACKEND_ENDPOINT_URL;

const clientConfig: AxiosRequestConfig = {
    baseURL,
    withCredentials: true,
    timeout: 10000,
};

const client: AxiosInstance = axios.create(clientConfig);

client.interceptors.request.use(
    (config) => {
        const modifiedConfig = { ...config };
        const accessToken: string = cookies.get("accessToken");
        modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;

        return modifiedConfig;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const {
            config,
            response: {
                status,
                data: { message },
            },
        } = error;

        if (status === 401) {
            if (message.includes("access") && message.includes("expired")) {
                const { data } = await client.put<resetTokenResponse>("/auth/refresh-token");

                cookies.set("accessToken", data.access_token, {
                    path: "/",
                    maxAge: JWT_EXPIRY_TIME,
                    domain: window.location.hostname,
                });
                cookies.set("userID", data.user_id, {
                    path: "/",
                    domain: window.location.hostname,
                });

                config.headers = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookies.get("accessToken")}`,
                };

                const response = await axios.request<AxiosRequestConfig>(config as AxiosRequestConfig);
                return response;
            }
        }
        return Promise.reject(error);
    }
);

export default client;
