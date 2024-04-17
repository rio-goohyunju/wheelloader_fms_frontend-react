import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type selectOptionsType = {
  id?: string | number;
  uuid?: string;
  name?: string;
  alias?: string;
  config_id?: string;
};

interface SingleSelectProps {
  value?: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  selectOptions: selectOptionsType[];
  inputLabelText: string;
  labelId: string;
  fullWidth?: boolean;
}

const SingleSelect = ({
  value,
  onChange,
  selectOptions,
  inputLabelText,
  labelId,
  fullWidth,
}: SingleSelectProps) => {
  return (
    <FormControl sx={{ width: fullWidth ? '100%' : 200 }}>
      <InputLabel id={labelId}>{inputLabelText}</InputLabel>
      <Select
        label={inputLabelText}
        labelId={labelId}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
      >
        {selectOptions?.map((option) => (
          <MenuItem
            key={option.id || option.uuid || option.config_id}
            value={option.id || option.uuid || option.config_id}
          >
            {option.name || option.alias}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelect;
