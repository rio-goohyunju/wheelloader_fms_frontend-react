import { useEffect, useState } from "react";

import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";

import { FormBox } from "@/components/Common/FormBox";
import { TextFormInput } from "@/components/Common/TextFormInput";
import { useInitContext } from "@/hooks/constate/InitContext";
import { useTestDevice } from "@/hooks/remote";
import { showToast } from "@/hooks/toast/toastUtils";

import { FormInputText } from "../../Common/FormInputText";
import { SiteAdminFormValue } from "../types";

export const DeviceAdminIdPassForm = () => {
    const { control, watch, getValues } = useFormContext<SiteAdminFormValue>();
    const { setIsLoading } = useInitContext();
    const [testLoading, setTestLoading] = useState(false);
    const deviceValues = watch("deviceHub");
    const { ticketID } = useParams<{ ticketID: string }>();
    const { mutateAsync: sendTestDevice } = useTestDevice();

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const handleTestSubmit = async () => {
        if (!ticketID) return;
        const isDeviceFilled = Object.values(deviceValues).every((value) => value !== undefined && value !== "");

        try {
            if (isDeviceFilled) {
                setTestLoading(true);
                const data = {
                    ticketID,
                    ...getValues("deviceHub"),
                };
                await sendTestDevice(data);
                showToast("success", "테스트를 성공했습니다.");
                setIsLoading(false);
            }
        } catch (e) {
            showToast("error", "테스트를 실패했습니다.");
        } finally {
            setTestLoading(false);
        }
    };

    const isTestButtonDisabled = () => {
        return (
            deviceValues?.deviceID === "" ||
            deviceValues?.deviceIP === "" ||
            deviceValues?.devicePW === "" ||
            deviceValues?.deviceSerialNumber === "" ||
            deviceValues?.deviceToken === ""
        );
    };

    return (
        <>
            <IdPasswordForm control={control} />
            <Box display="flex" justifyContent="center" alignItems="center">
                <LoadingButton
                    loading={testLoading}
                    variant="contained"
                    type="button"
                    onClick={handleTestSubmit}
                    disabled={isTestButtonDisabled()}
                >
                    테스트
                </LoadingButton>
            </Box>
        </>
    );
};

const IdPasswordForm = ({ control: any }) => {
    return (
        <FormBox>
            <TextFormInput title="디바이스 IP">
                <FormInputText
                    name="deviceHub.deviceIP"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: "유효한 디바이스 IP를 입력해주세요",
                    }}
                    textFieldProps={{
                        label: "연결할 디바이스 IP를 입력해주세요 ( 접속할 수 있는 IP )",
                        fullWidth: true,
                        type: "text",
                        "aria-required": true,
                    }}
                />
            </TextFormInput>
            <TextFormInput title="디바이스 시리얼번호">
                <FormInputText
                    name="deviceHub.deviceSerialNumber"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: "유효한 디바이스 시리얼 번호를 입력해주세요",
                        minLength: {
                            value: 5,
                            message: "시리얼 번호는 최소 5자 이상이어야 합니다.",
                        },
                    }}
                    textFieldProps={{
                        label: "연결할 디바이스 시리얼 번호를 입력해주세요",
                        fullWidth: true,
                        type: "text",
                        "aria-required": true,
                    }}
                />
            </TextFormInput>
            <TextFormInput title="디바이스 토큰">
                <FormInputText
                    name="deviceHub.deviceToken"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: "유효한 디바이스 토큰을 입력해주세요",
                    }}
                    textFieldProps={{
                        label: "연결할 디바이스 토큰을 입력해주세요",
                        fullWidth: true,
                        type: "text",
                        "aria-required": true,
                    }}
                />
            </TextFormInput>
            <TextFormInput title="디바이스 아이디">
                <FormInputText
                    name="deviceHub.deviceID"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: "유효한 디바이스 admin id를 입력해주세요",
                    }}
                    textFieldProps={{
                        label: "연결할 디바이스의 아이디를 입력해주세요 ( 주의: 사용자 아이디가 아닌 Admin권한의 아이디 )",
                        fullWidth: true,
                        type: "text",
                        "aria-required": true,
                    }}
                />
            </TextFormInput>
            <TextFormInput title="디바이스 비밀번호">
                <FormInputText
                    name="deviceHub.devicePW"
                    defaultValue=""
                    control={control}
                    rules={{ required: "디바이스 admin password를 입력해주세요" }}
                    textFieldProps={{
                        label: "연결할 디바이스의 비밀번호를 입력해주세요 ( 주의: 사용자 비밀번호가 아닌 Admin권한의 비밀번호)",
                        fullWidth: true,
                        type: "password",
                        "aria-required": true,
                    }}
                />
            </TextFormInput>
        </FormBox>
    );
};
