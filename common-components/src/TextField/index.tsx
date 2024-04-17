import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

// interface MuiTextFieldProps {
//   textFieldProps?: MuiTextFieldProps;
// }

const MTextField = ({ ...props }: MuiTextFieldProps) => {
  return <MuiTextField {...props} />;
};

export default MTextField;
