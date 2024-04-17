import { useCallback, useMemo, useState } from "react";

import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import usePasswordReset from "@/hooks/remote/mutation/usePasswordReset";
import useSendPasswordResetEmail from "@/hooks/remote/mutation/useSendPasswordResetEmail";
import { showToast } from "@/hooks/toast/toastUtils";

export interface AccountInfoFindEmailForm {
    email: string;
}

export interface ResetPasswordForm {
    newPassword: string;
}

export function useHandleSubmit() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [loading, setLoading] = useState(false);

    const ticketID = useMemo(() => {
        return searchParams.get("ticketID");
    }, [search]);

    const { mutateAsync: sendResetEmail } = useSendPasswordResetEmail({
        onSuccess: (data) => {
            navigate(`/signin/find?ticketExpiredTime=${data.expiration_time}`);
        },
        onError: (error) => {
            showToast("error", error?.message);
        },
    });

    const { mutateAsync: sendNewPassword } = usePasswordReset({
        onSuccess: () => {
            showToast("success", "비밀번호 변경 성공.");
            navigate(`/signin`);
        },
        onError: (error) => {
            showToast("error", error?.message);
        },
    });

    const emailSubmit: SubmitHandler<AccountInfoFindEmailForm> = useCallback(async (values) => {
        const { email } = values;
        try {
            setLoading(true);
            await sendResetEmail({ email });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const passwordReset: SubmitHandler<ResetPasswordForm> = useCallback(async (values) => {
        const { newPassword } = values;

        try {
            if (ticketID) {
                await sendNewPassword({ newPassword, ticketID });
            } else {
                await sendNewPassword({ newPassword });
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return { emailSubmit, passwordReset, loading };
}
