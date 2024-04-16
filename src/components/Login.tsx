import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import * as yup from "yup";
import { useLocation } from "react-router-dom";
import { useHandleSubmit } from "./Auth/Signin.hooks";
import { FormInputText } from "./Common/FormInputText";
import Link from "next/link";

const schema = yup.object().shape({
    email: yup.string().email("유효한 이메일을 입력하세요").required("이메일을 입력하세요"),
    password: yup.string().required("비밀번호를 입력하세요"),
});

const Login = () => {
    const { handleSubmit, control } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { pathname } = useLocation();

    const { submit } = useHandleSubmit("signin");

    const onSubmit = (data:any) => {
        submit(data);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInputText
                    name="email"
                    control={control}
                    label="아이디"
                    fullWidth
                    autoFocus
                    placeholder="이메일 주소를 입력해주세요"
                />

                <FormInputText
                    name="password"
                    control={control}
                    label="비밀번호"
                    fullWidth
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
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
