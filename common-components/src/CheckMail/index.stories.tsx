import React from "react";

import Stack from "@mui/material/Stack";
import { Meta, StoryObj } from "@storybook/react";

import CheckMail from ".";

export const Basic: StoryObj = {
    args: {
        label: "확인대기중",
        variant: "wait", // 기본값을 'wait'로 설정
    },
};

export default {
    title: "Components/CheckMail",
    component: CheckMail,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["wait", "check", "error", "cancel"],
            },
        },
    },
} as Meta;

export const Variants = () => (
    <Stack spacing={2} maxWidth={300}>
        {/* <CheckMail variant="wait" label="확인대기중" />
    <CheckMail variant="check" label="확인완료" />
    <CheckMail variant="error" label="전송실패" />
    <CheckMail variant="cancel" label="만료됨" /> */}
    </Stack>
);
