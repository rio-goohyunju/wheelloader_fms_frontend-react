// Login.tsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import * as yup from "yup";
import Link from "next/link";
import { FormInputText } from "@/components/Common/FormInputText";
import { useLocation } from "react-router";
// import { useHandleSubmit } from "./Auth/Signin.hooks";

// 인터페이스 및 유효성 스키마
interface SigninFormValue {
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

    const FORM_ID = "login-form";

    // const { submit } = useHandleSubmit(type);

    return (
        <Box>
            <form>
                {/* FormInputText 컴포넌트 */}
                <FormInputText
                    name="email"
                    control={control}
                    defaultValue=""
                    textFieldProps={{
                        label: "이메일 주소",
                        fullWidth: true,
                        autoFocus: true,
                        placeholder: "이메일 주소를 입력해주세요",
                        sx: { width: "350px" }, // 폭 조절
                    }}
                />
                {/* 비밀번호 입력란 */}
                <FormInputText
                    name="password"
                    control={control}
                    defaultValue=""
                    textFieldProps={{
                        label: "비밀번호",
                        fullWidth: true,
                        placeholder: "비밀번호를 입력해주세요",
                        type: "password",
                        sx: { width: "350px" }, // 폭 조절
                    }}
                />

                {/* 로그인 버튼 */}
                <Button type="submit" variant="contained" size="medium" fullWidth sx={{ top: "6px" }}>
                    <Typography variant="h5" component="h2" color="white">
                        로그인
                    </Typography>
                </Button>
            </form>

            {/* 대시보드 페이지로 이동 링크 */}
            <Link href="/DashboardPage">
                <Button variant="outlined" color="primary" fullWidth style={{ marginTop: "1rem" }}>
                    <Typography variant="h5" component="h2">
                        대시보드 페이지로 이동
                    </Typography>
                </Button>
            </Link>
        </Box>
    );
};

export default Login;
