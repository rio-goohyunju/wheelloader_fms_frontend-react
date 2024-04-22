import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PendingIcon from '@mui/icons-material/Pending';
import { Box, Typography } from '@mui/material';

function getIcon(variant: string, size: string) {
  switch (variant) {
    case 'wait':
      return <PendingIcon color="primary" sx={{ width: size, height: size }} />;
    case 'check':
      return <CheckIcon color="primary" sx={{ width: size, height: size }} />;
    case 'error':
      return (
        <ErrorOutlineIcon color="primary" sx={{ width: size, height: size }} />
      );
    case 'cancel':
      return (
        <CancelScheduleSendIcon
          color="primary"
          sx={{ width: size, height: size }}
        />
      );
    default:
      return <PendingIcon color="primary" sx={{ width: size, height: size }} />;
  }
}

function getLabel(variant: string) {
  switch (variant) {
    case 'wait':
      return '확인대기중';
    case 'check':
      return '확인완료';
    case 'error':
      return '전송실패';
    case 'cancel':
      return '만료됨';
    default:
      return '확인대기중';
  }
}
const CheckMail = ({ variant = 'wait' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      <Typography variant="h4" sx={{ minWidth: '70px', textAlign: 'center' }}>
        {getLabel(variant)}
      </Typography>
      {getIcon(variant, '32px')}
    </Box>
  );
};

export default CheckMail;
