import { TextField, TextFieldProps } from '@mui/material';
import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form';

interface MuiTextFieldProps {
  textFieldProps?: TextFieldProps;
}

const FormDate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  textFieldProps,
  ...props
}: MuiTextFieldProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <TextField
      InputProps={{}}
      {...textFieldProps}
      {...field}
      error={!!error}
      helperText={!!error && error.message}
      margin="dense"
    />
  );
};

export default FormDate;
