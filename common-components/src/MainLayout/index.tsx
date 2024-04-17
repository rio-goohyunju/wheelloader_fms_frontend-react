import { Box } from '@mui/material';

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      sx={{
        background: '#fff',
        display: 'flex',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
