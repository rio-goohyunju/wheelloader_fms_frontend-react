import { TimePicker } from '@mui/x-date-pickers';
import { Control, Controller } from 'react-hook-form';

interface FormTimePickerProps {
  name: string;
  label: string;
  control: Control<any, any>;
}

export const FormTimePicker = ({
  name,
  control,
  label,
}: FormTimePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TimePicker
          label={label}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
