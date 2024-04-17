import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

// interface MuiRadioProps {
//   RadioProps?: MuiRadioProps;
// }

const MRadio = ({ ...props }: MuiRadioProps) => {
  return <MuiRadio {...props} />;
};

export default MRadio;
