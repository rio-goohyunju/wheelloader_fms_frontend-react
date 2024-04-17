// import { useCallback } from "react";

// import { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";

// import { fetchUser } from "@/api/auth";
// import { useAuthContext } from "@/hooks/constate/AuthContext";

// import { showToast } from "@/hooks/toast/toastUtils";
// import { useAdminLogin, useResetToken, useUserLogin } from "@/hooks/remote";
// import cookies, { JWT_EXPIRY_TIME } from "../../../common-utils/cookie";

// interface submitParams {
//     email: string;
//     password: string;
// }

// export function useHandleSubmit(type: string) {
//     const { setUser, setIsLogin, setIsAdmin, setIsinit } = useAuthContext();

//     const navigate = useNavigate();

//     const { mutateAsync: performAdminLogin } = useAdminLogin();
//     const { mutateAsync: performUserLogin } = useUserLogin();
//     const { mutateAsync: resetToken } = useResetToken();

//     const setAuthInfo = async () => {
//         try {
//             const res = await fetchUser();
//             setUser(res.data);
//             setIsAdmin(res.data.user_id === "66a1512e-e185-44ac-9787-49a0500d2e42");
//             setIsLogin(true);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleAdminLogin = async (email: string, password: string) => {
//         try {
//             const res = await performAdminLogin({ email, password });
//             setUser(res);
//             setIsAdmin(true);
//             setIsLogin(true);
//             showToast("success", "로그인 성공.");

//             const { status } = res;
//             const { site_id: siteId } = res.site[0];
//             setIsinit(status === 1);
//             const route = status === 1 ? `/admin/${siteId}/init/0` : `/admin/${siteId}`;
//             navigate(route);
//         } catch (error: unknown) {
//             const myError = error as AxiosError;
//             const responseText = myError?.response?.request?.responseText;
//             if (responseText) {
//                 const parsedResponse = JSON.parse(responseText as string);
//                 showToast("error", parsedResponse.message as string);
//             }
//         }
//     };

//     const handleUserLogin = async (email: string, password: string) => {
//         try {
//             const { status } = await performUserLogin({ email, password });
//             setIsinit(status === 1);
//             const route = status === 1 ? "/site/uinit/0" : "select";
//             navigate(route);
//         } catch (error: unknown) {
//             const myError = error as AxiosError;
//             const responseText = myError?.response?.request?.responseText;
//             if (responseText) {
//                 const parsedResponse = JSON.parse(responseText as string);
//                 showToast("error", parsedResponse.message as string);
//             }
//         }
//     };

//     const submit = useCallback(
//         async (values: submitParams) => {
//             const { email, password } = values;

//             if (type === "admin") {
//                 await handleAdminLogin(email, password);
//             } else if (type === "signin") {
//                 await handleUserLogin(email, password);
//             }
//         },
//         [type]
//     );

//     const onResetToken = useCallback(async () => {
//         try {
//             if (!cookies.get("refresh_token") || !cookies.get("accessToken")) {
//                 const res = await resetToken();

//                 cookies.set("accessToken", res.access_token, {
//                     path: "/",
//                     maxAge: JWT_EXPIRY_TIME,
//                     domain: window.location.hostname,
//                 });
//                 cookies.set("userID", res.user_id, {
//                     path: "/",
//                     domain: window.location.hostname,
//                 });
//             }
//         } catch (error: unknown) {
//             console.log(error);
//         }
//     }, []);

//     return { submit, onResetToken, setAuthInfo };
// }
