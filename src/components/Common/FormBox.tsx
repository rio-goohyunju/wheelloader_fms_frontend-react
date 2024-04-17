import { Box, BoxProps, SxProps } from '@mui/material';

interface FormProps {
  children?: React.ReactNode;
  props?: BoxProps;
  sx?: SxProps;
}

export const FormBox = ({ children, ...props }: FormProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
