import { ChangeEvent } from 'react';

import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormControlProps,
  FormHelperText,
  Radio,
  RadioGroup,
  RadioProps,
  Stack,
  Typography,
} from '@mui/material';
import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form';

type TRadioGroup = Omit<FormControlLabelProps, 'control'>;

interface MuiRadioGroupProps {
  group: TRadioGroup[];
  formControlProps?: FormControlProps;
  formRadioProps?: RadioProps;
  label: string;
}

export const FormRadio = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  group,
  formControlProps,
  formRadioProps,
  ...props
}: MuiRadioGroupProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field: { name, onChange, value },
    fieldState: { error: fieldError },
  } = useController(props);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <FormControl
      sx={{
        border: 1,
        borderColor: '#CDD5DF',
        width: '100%',
        padding: 1,
        marginBottom: 1,
      }}
      {...formControlProps}
      error={!!fieldError}
    >
      <RadioGroup row name={name} value={value} onChange={handleChange}>
        <Box>
          <Stack>
            <Typography variant="subtitle2">{props.label}</Typography>
          </Stack>
          <Stack direction="row" spacing={5}>
            {group?.map(({ value: radioValue, disabled, label }) => (
              <FormControlLabel
                key={radioValue?.toString()}
                value={radioValue}
                label={label}
                control={
                  <Radio
                    {...formRadioProps}
                    value={radioValue}
                    disabled={disabled}
                  />
                }
              />
            ))}
          </Stack>
        </Box>
      </RadioGroup>
      <FormHelperText>{fieldError?.message}</FormHelperText>
    </FormControl>
  );
};
