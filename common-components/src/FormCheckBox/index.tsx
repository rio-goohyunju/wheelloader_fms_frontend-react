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

const FormCheckBox = <
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
      control={
        <Checkbox {...checkboxProps} {...field} defaultChecked={field.value} />
      }
      label={label}
    />
  );
};

export default FormCheckBox;
