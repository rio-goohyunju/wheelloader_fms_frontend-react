import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';

// interface MuiSelectProps {
//   SelectProps?: MuiSelectProps;
// }

const MSelect = ({ ...props }: MuiSelectProps) => {
  return <MuiSelect {...props} />;
};

export default MSelect;
