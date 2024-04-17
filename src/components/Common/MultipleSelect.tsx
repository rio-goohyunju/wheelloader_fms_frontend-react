import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type selectOptionsType = {
  name?: string;
};

interface MultipleSelectProps {
  value: string[];
  onChange: (event: SelectChangeEvent<any[]>) => void;
  selectOptions: selectOptionsType[];
  inputLabelText: string;
  labelId: string;
}

const MultipleSelect = ({
  value,
  onChange,
  selectOptions,
  inputLabelText,
  labelId,
}: MultipleSelectProps) => {
  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id={labelId}>{inputLabelText}</InputLabel>
      <Select
        labelId={labelId}
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={inputLabelText} />}
      >
        {selectOptions?.map((option, index) => (
          <MenuItem key={index} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
