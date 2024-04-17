import { Box, SxProps, Theme } from '@mui/material';

export type MainContainerProps = {
  children?: React.ReactNode;
  theme: Theme;
  sx?: SxProps<Theme>;
};
const MainContainer = ({ children, theme, ...props }: MainContainerProps) => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 88px)',
        height: 'calc(100vh - 44px)',
        borderRadius: '1.875rem',
        background: theme.palette.background.default,
        padding: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        flexGrow: 1,
        overflowY: 'auto',
        ...(props.sx || {}), // props로 전달된 sx가 있으면 병합, 없으면 빈 객체 사용
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
