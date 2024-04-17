import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ScheduleIcon from "@mui/icons-material/Schedule";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { CUSTOM_DATE_TEXT, DATE_LABELS } from "../Statistics/constant";

interface DateFilterProps {
    handleDateChange: (event: SelectChangeEvent) => void;
    value: string | undefined;
    handleModalOpen: () => void;
}

const DateFilter = ({ handleDateChange, value, handleModalOpen }: DateFilterProps) => {
    return (
        <FormControl
            sx={{
                marginLeft: 4,
                minWidth: 120,
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                },
            }}
            size="small"
        >
            <InputLabel id="date-filter-label">날짜 기간</InputLabel>
            <Select
                labelId="date-filter-label"
                value={value}
                onChange={handleDateChange}
                input={<OutlinedInput label="날짜 기간" />}
                IconComponent={ExpandMoreIcon}
                startAdornment={
                    <InputAdornment position="start">
                        <ScheduleIcon />
                    </InputAdornment>
                }
            >
                {DATE_LABELS?.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
                <MenuItem key={CUSTOM_DATE_TEXT} value={CUSTOM_DATE_TEXT} onClick={handleModalOpen}>
                    {CUSTOM_DATE_TEXT}
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default DateFilter;
