import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { userLogin } from "@/api/auth";
import { PerformLoginParams, userLoginResponse } from "@/api/auth/types";
import cookies, { JWT_EXPIRY_TIME } from "../../../../common-utils/cookie";

const useUserLogin = (options?: UseMutationOptions<userLoginResponse, AxiosError, PerformLoginParams>) => {
    const fetcher = async (variable: PerformLoginParams) => {
        const result = await userLogin(variable);
        cookies.set("accessToken", result.data.access_token, {
            path: "/",
            maxAge: JWT_EXPIRY_TIME,
            domain: window.location.hostname,
        });
        cookies.set("userID", result.data.user_id, {
            path: "/",
            domain: window.location.hostname,
        });
        return result.data;
    };

    return useMutation({
        mutationFn: fetcher,
        ...options,
    });
};

export default useUserLogin;
