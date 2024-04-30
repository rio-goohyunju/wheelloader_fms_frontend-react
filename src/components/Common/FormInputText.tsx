// FormInputText.tsx

import React from "react";
import { useController, FieldValues, FieldPath, UseControllerProps } from "react-hook-form";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

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
    const [showPassword, setShowPassword] = React.useState(textFieldProps?.type === "password");
    const handleClickShowPassword = () => setShowPassword((show) => !show);
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
                                {showPassword ? <VisibilityOff /> : <Visibility />}
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
