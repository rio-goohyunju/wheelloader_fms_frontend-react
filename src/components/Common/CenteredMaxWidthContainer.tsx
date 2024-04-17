import { ReactNode } from 'react';

import { Box, Paper } from '@mui/material';

interface CenteredMaxWidthContainerProps {
  children: ReactNode;
  maxWidth?: number;
  isPaper?: boolean;
}

const CenteredMaxWidthContainer = ({
  children,
  maxWidth = 1342,
  isPaper = false,
}: CenteredMaxWidthContainerProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isPaper ? (
        <Paper
          sx={{
            maxWidth: `${maxWidth}px`,
            width: '100%',
          }}
        >
          {children}
        </Paper>
      ) : (
        <Box
          sx={{
            maxWidth: `${maxWidth}px`,
            width: '100%',
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default CenteredMaxWidthContainer;
