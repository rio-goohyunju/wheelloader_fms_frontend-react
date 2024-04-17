import { Box, TextField, Typography } from '@mui/material';

const CustomLongInput = ({ label = '확인대기중' }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: '0rem',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <Typography sx={{ minWidth: '6rem' }} variant="h4">
        {label}
      </Typography>
      <TextField label="string" />
    </Box>
  );
};

export default CustomLongInput;
