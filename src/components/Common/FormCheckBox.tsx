import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form';

interface MuiCheckboxGroupProps {
  checkboxProps?: CheckboxProps;
  label: string;
}

export const FormCheckBox = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  checkboxProps,
  label,
  ...props
}: MuiCheckboxGroupProps & UseControllerProps<TFieldValues, TName>) => {
  const { field } = useController(props);
  return (
    <FormControlLabel
      control={<Checkbox {...checkboxProps} {...field} checked={field.value} />}
      label={label}
    />
  );
};
