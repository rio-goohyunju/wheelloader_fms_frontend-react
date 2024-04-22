import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import * as yup from "yup";

import Link from "next/link";

import { FormInputText } from "@/components/Common/FormInputText";
import { useLocation } from "react-router";
import { useHandleSubmit } from "./Auth/Signin.hooks";

export interface SigninFormValue {
    email: string;
    password: string;
}
const schema = yup.object().shape({
    email: yup.string().email("유효한 이메일을 입력하세요").required("이메일을 입력하세요"),
    password: yup.string().required("비밀번호를 입력하세요"),
});

const Login = ({ type }: { type: string }) => {
    const { handleSubmit, control } = useForm<SigninFormValue>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const { pathname } = useLocation();
    const FORM_ID = "login-form";

    const { submit } = useHandleSubmit(type);

    return (
        <Box>
            <form onSubmit={handleSubmit(submit)}>
                <FormInputText
                    name="email"
                    control={control}
                    defaultValue=""
                    textFieldProps={{
                        label: "이메일 주소",
                        fullWidth: true,
                        autoFocus: true,
                        placeholder: "이메일 주소를 입력해주세요",
                    }}
                />
                <FormInputText
                    name="password"
                    control={control}
                    defaultValue=""
                    textFieldProps={{
                        label: "비밀번호",
                        fullWidth: true,
                        placeholder: "비밀번호를 입력해주세요",
                        type: "password",
                    }}
                />

                <Button type="submit" variant="contained" size="large" fullWidth>
                    <Typography variant="h4" component="h1" color="white">
                        로그인
                    </Typography>
                </Button>
            </form>

            <Link href="/DashboardPage">
                <Button variant="outlined" color="primary" fullWidth style={{ marginTop: "1rem" }}>
                    <Typography variant="h4" component="h1">
                        대시보드 페이지로 이동
                    </Typography>
                </Button>
            </Link>
        </Box>
    );
};

export default Login;
