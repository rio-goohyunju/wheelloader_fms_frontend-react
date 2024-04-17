import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material"; // 아이콘을 불러옴
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { useController, FieldValues, FieldPath, UseControllerProps } from "react-hook-form";

interface MuiTextFieldProps {
    textFieldProps?: TextFieldProps;
    readOnly?: boolean;
}

export const FormInputText = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    textFieldProps,
    readOnly = false,
    ...props
}: MuiTextFieldProps & UseControllerProps<TFieldValues, TName>) => {
    const {
        field: { value, onChange, ...field },
        fieldState: { error },
    } = useController(props);

    const [showPassword, setShowPassword] = useState(textFieldProps?.type === "password"); // showPassword 상태 설정

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show); // 상태 토글
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <TextField
            id={props.name}
            InputProps={{
                endAdornment:
                    textFieldProps?.type === "password" ? (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />} {/* 상태에 따라 아이콘 변경 */}
                            </IconButton>
                        </InputAdornment>
                    ) : undefined,
                readOnly,
            }}
            {...textFieldProps}
            value={value}
            onChange={(e) => onChange(e)}
            {...field}
            type={showPassword ? "password" : "text"}
            error={!!error}
            helperText={!!error && `${error.message}`}
            margin="dense"
        />
    );
};
