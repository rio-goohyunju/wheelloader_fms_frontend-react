import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';

interface PopoverMenuItemProps {
  label: string;
  startIcon: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}

const PopoverMenuItem = ({
  label,
  startIcon,
  disabled,
  onClick,
}: PopoverMenuItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          borderRadius: '0px',
        }}
        onClick={onClick}
        disabled={disabled}
      >
        <ListItemIcon>{startIcon}</ListItemIcon>
        <Typography variant="h5">{label}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default PopoverMenuItem;
