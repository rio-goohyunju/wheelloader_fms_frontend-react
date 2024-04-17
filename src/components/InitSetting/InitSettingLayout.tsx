import { useEffect } from "react";

import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Stack, Box } from "@mui/system";
import { useFormContext } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useInitContext } from "@/hooks/constate/InitContext";

import { StepButtons } from "./StepButtons";
import { SiteAdminFormValue, SiteUserFormValue, SystemAdminFormValue } from "./types";
import { MainContainer } from "../../../common-components/src";

interface Step {
    label: string;
    component: () => JSX.Element;
}
export interface Props {
    steps: Step[];
    handleSubmitStep: (data: SystemAdminFormValue | SiteAdminFormValue | SiteUserFormValue) => Promise<void>;
    type: string;
}

const generatePath = (type: string, step: number, siteID?: string, ticketID?: string) => {
    if (type === "adminInit") {
        return `/admin/${siteID}/init/${step}`;
    }
    if (type === "siteInit") {
        return `/site/sinit/${ticketID}/${step}`;
    }
    if (type === "userInit") {
        return `/site/uinit/${step}`;
    }
    throw new Error(`Unsupported type: ${type}`);
};

export const InitSettingLayout = ({ steps, handleSubmitStep, type }: Props) => {
    const { activeStep, isLoading, setIsLoading, setActiveStep, setExpanded } = useInitContext();

    const theme = useTheme();
    const navigate = useNavigate();
    const {
        watch,
        formState: { errors },
    } = useFormContext();

    const stepFormValueMap: Record<string, string[]> = {
        "계정 설정":
            type === "adminInit"
                ? ["user.newPassword", "user.confirmPassword"]
                : ["name", "password", "confirmPassword"],
        로고설정: ["site.logoPhoto"],
        "디바이스 연결정보": [
            "deviceHub.deviceIP",
            "deviceHub.deviceSerialNumber",
            "deviceHub.deviceToken",
            "deviceHub.deviceID",
            "deviceHub.devicePW",
        ],
        "프로필 설정": ["department", "profilePhoto", "position", "phoneNumber"],
        "시스템 기본설정": ["system.systemName"],
        "SMS 관련 정보 입력": [
            "sms.alias",
            "sms.apiKey",
            "sms.senderPhoneNumber",
            "sms.agency",
            "smsTest.testRecipientPhoneNumber",
            "smsTest.testContent",
        ],
        "SMTP 관련 정보 입력": ["smtp.alias", "smtp.address", "smtp.id", "smtp.password", "smtp.port"],
    };

    const isInputProvided = () => {
        const step = steps[activeStep].label;
        const watchValues = watch(stepFormValueMap[step]);
        return watchValues.every((value) => value !== undefined && value !== "");
    };

    const { step, ticketID, siteID } = useParams();
    const { handleSubmit } = useFormContext<SystemAdminFormValue | SiteAdminFormValue | SiteUserFormValue>();

    useEffect(() => {
        setExpanded(`panel${step}`);
        setActiveStep(Number(step));
    }, [step]);

    const handlePrevious = () => {
        const newStep = activeStep - 1;
        setActiveStep(newStep);
        setExpanded(`panel${newStep}`);
        navigate(generatePath(type, newStep, siteID, ticketID));
        setIsLoading(false);
    };

    const handleSkip = () => {
        if (Object.keys(errors).length !== 0) {
            return;
        }
        const newStep = activeStep + 1;
        setActiveStep(newStep);
        setExpanded(`panel${newStep}`);
        navigate(generatePath(type, newStep, siteID, ticketID));
        setIsLoading(false);
    };

    const renderStepForm = () => {
        const FormComponent = steps[activeStep].component;
        return (
            <form onSubmit={handleSubmit(handleSubmitStep)}>
                <FormComponent />
                <StepButtons
                    isLoading={isLoading}
                    activeStep={activeStep}
                    handlePrevious={handlePrevious}
                    stepLength={steps.length}
                    handleSkip={handleSkip}
                    disabled={!isInputProvided()}
                />
            </form>
        );
    };

    return (
        <MainContainer
            theme={theme}
            sx={{
                margin: "0 2rem 2rem 2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "59.5rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Stack
                        direction="row"
                        pt={6}
                        ml={15}
                        mb={1}
                        alignContent="center"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h2">ROAMS 시작 설정</Typography>
                        <Typography variant="caption" marginLeft="1rem">
                            * 최초 접속시 설정입니다.
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "100%" }} p={3}>
                        <Stepper
                            activeStep={activeStep}
                            sx={{
                                marginBottom: 4,
                            }}
                        >
                            {steps?.map(({ label }) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                    optional?: React.ReactNode;
                                } = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {steps?.map(({ label }, index) => (
                            <Stack key={label}>{activeStep === index && renderStepForm()}</Stack>
                        ))}
                    </Box>
                </Box>
            </Box>
        </MainContainer>
    );
};
