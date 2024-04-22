import { useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { adminLogin } from "@/api/auth";
import { adminLoginResponse, PerformLoginParams } from "@/api/auth/types";
import cookies, { JWT_EXPIRY_TIME } from "../../../../common-utils/cookie";

const useAdminLogin = (
    options?: UseMutationOptions<adminLoginResponse, AxiosError, PerformLoginParams>
): UseMutationResult<adminLoginResponse, AxiosError, PerformLoginParams> => {
    const fetcher = async (variable: PerformLoginParams) => {
        try {
            const result = await adminLogin(variable);
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
        } catch (error) {
            throw error;
        }
    };

    return useMutation({
        mutationFn: fetcher,
        ...options,
    });
};

export default useAdminLogin;
