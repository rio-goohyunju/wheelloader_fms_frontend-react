import {
  DateTimePicker,
  DateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form';

interface MuiDatePickerProps {
  datePickerProps?: DateTimePickerProps<Date>;
}

export const FormDateTimePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  datePickerProps,
  ...props
}: MuiDatePickerProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <DateTimePicker
      label="Controlled picker"
      {...field}
      {...datePickerProps}
      format="YYYY년 MM월 DD일 dddd HH시 mm분"
      slotProps={{
        textField: {
          helperText: error?.message,
        },
      }}
    />
  );
};
