"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as yup from "yup";

import { FormInputText } from "../Common/FormInputText";

import { useHandleSubmit } from "./Signin.hooks";

import passwordSchema from "@/hooks/yupSchema/passwordSchema";
import emailSchema from "@/hooks/yupSchema/emailSchema";

export interface SigninFormValue {
    email: string;
    password: string;
}
const schema = yup.object({
    email: emailSchema,
    password: passwordSchema,
});

const Signin = ({ type }: { type: string }) => {
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
            <form id={FORM_ID} onSubmit={handleSubmit(submit)}>
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
            </form>
            <Button form={FORM_ID} type="submit" variant="contained" size="large" fullWidth>
                <Typography variant="h4" component="h1" color="#FFF">
                    계속하기
                </Typography>
            </Button>
            {!pathname.includes("admin") && (
                <Typography sx={{ color: "text.secondary", marginTop: "1rem" }} variant="body2" align="center">
                    <Link sx={{ ":hover": { color: "text.primary" } }} color="inherit" href={`${pathname}/find`}>
                        비밀번호가 기억나지 않으세요?
                    </Link>
                </Typography>
            )}
        </Box>
    );
};

export default Signin;
