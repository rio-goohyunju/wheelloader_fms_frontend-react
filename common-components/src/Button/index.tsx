import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

interface ExtendButtonProps extends MuiButtonProps {
  label: string;
}

const MButton = ({ label = 'Button', ...props }: ExtendButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

export default MButton;
