import client from "../client";
import {
    ChangeProfileParams,
    FetchUserResponse,
    PasswordResetParams,
    PerformLoginParams,
    SendPasswordResetEmailParams,
    ValidateTicketParams,
    resetTokenResponse,
} from "./types";

export const fetchUser = () => {
    return client.get<FetchUserResponse>(`/user/profile`);
};

export const changeProfile = (params: ChangeProfileParams) => {
    return client.put(`/user/profile`, {
        data: {
            department: params.department,
            password: params.password,
            position: params.position,
        },
    });
};

export const userLogin = (params: PerformLoginParams) => {
    return client.post("/auth/login", {
        data: {
            email: params.email,
            password: params.password,
        },
    });
};

export const adminLogin = (params: PerformLoginParams) => {
    return client.post("/auth/admin/login", {
        data: {
            email: params.email,
            password: params.password,
        },
    });
};

export const performLogout = () => {
    return client.post(`/auth/logout`);
};

export const validateTicket = (params: ValidateTicketParams) => {
    return client.post(`/ticket/${params.ticketID}/validate`);
};

export const resetToken = () => {
    return client.put<resetTokenResponse>(`/auth/refresh-token`);
};

export const sendPasswordResetEmail = (params: SendPasswordResetEmailParams) => {
    return client.post("/user/reset-password-ticket-send-email", {
        data: {
            email: params.email,
        },
    });
};
export const sendPasswordResetLocal = (params: SendPasswordResetEmailParams) => {
    return client.post("/user/reset-password-ticket", {
        data: {
            email: params.email,
        },
    });
};

export const initializePasswordReset = (params: PasswordResetParams) => {
    const requestURL = params.ticketID ? `/user/reset-password/${params.ticketID}` : "/user/reset-password/";

    return client.put(requestURL, {
        data: {
            password: params.newPassword,
        },
    });
};
