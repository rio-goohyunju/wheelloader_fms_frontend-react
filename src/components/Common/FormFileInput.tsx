import { ChangeEvent, useState } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input, Button, InputProps as MUIInputProps, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useController, FieldValues, FieldPath, UseControllerProps } from "react-hook-form";
import colors from "@/colors";

interface MuiInputProps {
    inputProps?: MUIInputProps;
}

interface FormFileInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends MuiInputProps,
        UseControllerProps<TFieldValues, TName> {}

const VisuallyHiddenInput = styled(Input)({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export const FormFileInput = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    inputProps,
    ...props
}: FormFileInputProps<TFieldValues, TName>) => {
    const {
        field,
        fieldState: { error },
    } = useController(props);

    const [value, setValue] = useState("");
    const [preview, setPreview] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setValue(e.target.value);

        if (file) {
            field.onChange(file);

            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onloadend = () => {
                    setPreview(reader.result as string);
                };

                reader.readAsDataURL(file);
            } else {
                setPreview(null);
            }
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} fullWidth>
                Upload file
                <VisuallyHiddenInput
                    {...inputProps}
                    {...field}
                    type="file"
                    value={value}
                    onChange={handleInputChange}
                    error={!!error}
                    margin="dense"
                />
            </Button>
            {preview && (
                <Box
                    width="100%"
                    marginTop="10px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    border={`1px solid ${colors.gray[4]}`}
                    borderRadius="5px"
                    paddingY={1}
                >
                    <Typography align="center" variant="subtitle2">
                        이미지 미리보기 (250px x 250px)
                    </Typography>
                    <img
                        src={preview}
                        alt="Preview"
                        style={{ height: "250px", width: "250px", borderRadius: "5px" }}
                        loading="lazy"
                    />
                </Box>
            )}
        </Box>
    );
};
