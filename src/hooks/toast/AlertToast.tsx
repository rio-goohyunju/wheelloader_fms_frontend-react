import { Card, CardContent, CardMedia, Divider, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { ToastOptions, toast } from "react-toastify";

import { colors } from "@common/styles";

import noImage from "@assets/images/404image.png";

import usePreSignedUrl from "../../components/Common/usePreSignedUrl";

type AlertToastType = "success" | "error" | "info" | "warning" | "default";
type Opacitys = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

interface AlertResponse {
    robot_id?: string;
    title: string;
    robot_name: string;
    message: string;
    level: string;
    event_date: number;
    alert_photo: string;
}

const getToastBackgroundColor = (level: string, opacity?: Opacitys) => {
    if (level.toLowerCase().includes("critical")) return `${colors.red[200]}${opacity ?? ""}`;
    if (level.toLowerCase().includes("warning")) return `${colors.pastelOrange[50]}${opacity ?? ""}`;
    return "white";
};

const getToastTextColor = (level: string) => {
    if (level.toLowerCase().includes("critical")) return `white`;
    if (level.toLowerCase().includes("warning")) return `black`;
    return "white";
};

const AlertToast = ({
    robot_id: robotId,
    robot_name: robotName,
    title,
    message,
    alert_photo: alertPhoto,
    level,
    event_date: eventDate,
}: AlertResponse) => {
    const alertPhotoUrl = usePreSignedUrl({
        Method: "GET",
        bucketName: "bucket",
        url: alertPhoto,
    });

    return (
        <Card
            id={robotId}
            sx={{
                boxShadow: "none",
                padding: 0,
                margin: 0,
                background: getToastBackgroundColor(level, 10),
                borderRadius: 0,
            }}
        >
            <CardContent
                sx={{
                    padding: 0,
                    paddingTop: 1,
                    marginBottom: 1,
                }}
            >
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h3" color={getToastTextColor(level)}>
                        로봇이름: {robotName}
                    </Typography>
                    <Typography variant="h4" color={colors.red[600]}>
                        {level.replace("SEVERITY_LEVEL_", "")}
                    </Typography>
                </Stack>
                <Typography variant="h6" color={getToastTextColor(level)}>
                    로봇ID: {robotId}
                </Typography>
                <Divider
                    sx={{
                        marginY: 1,
                    }}
                />
                <Typography variant="h5" fontWeight={700} color={colors.red[600]}>
                    {title} : {message}
                </Typography>
                <Typography variant="h6" color={getToastTextColor(level)}>
                    발생 시간 :{dayjs.unix(eventDate).format("YYYY년MM월DD일 HH시mm분ss초")}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                sx={{
                    borderRadius: 2,
                }}
                image={alertPhotoUrl ?? noImage}
                alt="alertImg"
            />
        </Card>
    );
};

export const showAlertToast = (
    type: AlertToastType,
    {
        robot_id: robotId,
        robot_name: robotName,
        title,
        message,
        alert_photo: alertPhoto,
        level,
        event_date: eventDate,
    }: AlertResponse
) => {
    const toastOption: ToastOptions = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
        style: {
            width: "100%",
            padding: "10px",
            background: getToastBackgroundColor(level),
            borderRadius: 2,
            right: "5px",
        },

        icon: false,
    };

    switch (type) {
        case "error":
            toast.error(
                <AlertToast
                    robot_id={robotId}
                    level={level}
                    robot_name={robotName}
                    title={title}
                    message={message}
                    alert_photo={alertPhoto}
                    event_date={eventDate}
                />,
                toastOption
            );
            break;
        case "warning":
            toast.warn(
                <AlertToast
                    robot_id={robotId}
                    level={level}
                    robot_name={robotName}
                    title={title}
                    message={message}
                    alert_photo={alertPhoto}
                    event_date={eventDate}
                />,
                toastOption
            );
            break;
        default:
            toast(
                <AlertToast
                    robot_id={robotId}
                    level={level}
                    robot_name={robotName}
                    title={title}
                    message={message}
                    alert_photo={alertPhoto}
                    event_date={eventDate}
                />,
                toastOption
            );
    }
};
