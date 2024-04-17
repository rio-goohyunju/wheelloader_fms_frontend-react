import { ChangeEvent, ReactNode } from 'react';

import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form';

interface MuiSelectFieldProps<
  TSelectOption extends Record<string, any> = Record<string, any>,
> {
  SelectFieldProps?: SelectProps;
  formControlProps?: FormControlProps;
  selectGroup: TSelectOption[];
}

export const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  SelectFieldProps,
  formControlProps,
  selectGroup,
  ...props
}: MuiSelectFieldProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field: { name, value, onChange },
    fieldState: { error: fieldError },
    field,
  } = useController(props);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    child: ReactNode
  ) => {
    onChange(event as ChangeEvent<Element>);
  };

  return (
    <FormControl fullWidth {...formControlProps} error={!!fieldError}>
      <InputLabel id="SelectField-label">{SelectFieldProps?.label}</InputLabel>
      <Select
        {...field}
        labelId={`${name}-select-label`}
        id={`${name}-select-id`}
        aria-label={`Select a ${name}`}
        value={value}
        onChange={handleChange}
        {...SelectFieldProps}
      >
        {selectGroup?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldError?.message}</FormHelperText>
    </FormControl>
  );
};
