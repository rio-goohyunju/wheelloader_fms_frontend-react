import dayjs from "dayjs";

interface DatePreset {
    [key: string]: number;
}

export const DATE_PRESET: DatePreset = {
    "지난 7일": dayjs().subtract(7, "day").unix(),
    "지난 1개월": dayjs().subtract(1, "month").unix(),
    "지난 3개월": dayjs().subtract(3, "month").unix(),
    "지난 6개월": dayjs().subtract(6, "month").unix(),
    "지난 1년": dayjs().subtract(1, "year").unix(),
};

export const DATE_LABELS = ["지난 7일", "지난 1개월", "지난 3개월", "지난 6개월", "지난 1년"];

export const CUSTOM_DATE_TEXT = "날짜 지정";

export const DEFAULT_START_DATE = DATE_PRESET["지난 7일"];
export const DEFAULT_END_DATE = dayjs().unix();

export const LS_ROBOT_MISSION = "RobotMission";
export const LS_OPERATION_PERCENT = "OperationPercent";
export const LS_OPERATION_NUMBER = "OperationNumber";
