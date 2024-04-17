import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketIcon from '@mui/icons-material/Rocket';
import {
  Box,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface SideMenuProps {
  children?: React.ReactNode;
}

interface SpaceProps extends ListItemButtonProps {
  label: string;
}

interface SideMenuItemProps extends ListItemButtonProps {
  label: string;
  to?: string;
  icon: JSX.Element;
}

interface SideMenuDrawProps extends ListItemButtonProps {
  label: string;
  to?: string;
  icon: JSX.Element;
  moreIcon: JSX.Element;
  lessIcon: JSX.Element;
  open?: boolean;
}

const SideMenu = ({ children }: SideMenuProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.6875rem',
        marginTop: '1.75rem',
        marginLeft: '1.5rem',
      }}
    >
      {children}
    </Box>
  );
};

SideMenu.Space = (props: SpaceProps) => {
  const { label, ...other } = props;
  return (
    <ListItemButton
      sx={{
        display: 'flex',
        width: '100%',
        height: '3rem',
        background: '#FFF',
        justifyContent: 'space-between',
      }}
      {...other}
    >
      <ListItemIcon>
        <RocketIcon />
      </ListItemIcon>
      <Typography variant="h6" noWrap>
        {label}
      </Typography>
      <ListItemIcon sx={{ paddingLeft: '1rem' }}>
        <ExpandMoreIcon />
      </ListItemIcon>
    </ListItemButton>
  );
};

SideMenu.Item = (props: SideMenuItemProps) => {
  const { label, to, icon, ...other } = props;

  return (
    <ListItemButton
      component={Link}
      to={to}
      sx={{
        display: 'flex',
        width: '85%',
        height: '3rem',
        padding: '0.625rem 1.25rem',
        justifyContent: 'flex-start',
        background: '#FFF',
      }}
      {...other}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <Typography variant="h6">{label}</Typography>
    </ListItemButton>
  );
};

SideMenu.DrawButton = (props: SideMenuDrawProps) => {
  const { label, icon, moreIcon, lessIcon, open, ...other } = props;

  return (
    <ListItemButton
      sx={{
        display: 'flex',
        width: '95%',
        height: '3rem',
        padding: '0.625rem 1.25rem',
        justifyContent: 'space-between',
        background: '#FFF',
        '&:hover, &:focus': { '& svg': { opacity: 1 } },
      }}
      {...other}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Typography variant="h6">{label}</Typography>
      </Box>
      <ListItemIcon>{open ? lessIcon : moreIcon}</ListItemIcon>
    </ListItemButton>
  );
};

export default SideMenu;
