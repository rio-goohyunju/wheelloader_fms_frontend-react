import { Typography, Box } from '@mui/material';

interface TextFormProps {
  title: string;
  children?: React.ReactNode;
  minWidth?: string;
}

export const TextFormInput = ({
  title,
  children,
  minWidth = '18%',
}: TextFormProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem',
      }}
    >
      <Typography variant="h4" sx={{ minWidth }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
