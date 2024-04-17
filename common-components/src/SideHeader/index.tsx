import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import Popover from '../Popover';

export type Site = {
  creation_date: number;
  logo_photo: string;
  name: string;
  permission?: Permission[];
  role_id: string;
  role_name: string;
  site_id: string;
  status: number;
  type: number;
  update_date: number;
};

type Permission = {
  action: string;
  name: string;
  object: string;
  permission_id: string;
  type: string;
};

export type User = {
  department?: string;
  email: string;
  join_date?: number;
  name?: string;
  password_update_date?: number;
  phone_number?: string;
  position?: string;
  profile_photo?: string;
  status: number;
  update_date?: number;
  user_id: string;
};

export interface SideHeaderProps {
  isLogin: boolean;
  popoverAnchorEl: HTMLButtonElement | null;
  handlePopoverOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePopoverClose: () => void;
  isPopoverOpen: boolean;
  handleLogout: () => Promise<void>;
  user: User | undefined;
  isAdmin?: boolean;
}

const SideHeader = (props: SideHeaderProps) => {
  const {
    isLogin,
    popoverAnchorEl,
    handlePopoverClose,
    handlePopoverOpen,
    isPopoverOpen,
    handleLogout,
    user,
    isAdmin,
  } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '3rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {defaultIcon}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.19019rem',
          width: '7rem',
        }}
      >
        {isLogin ? (
          <>
            <Typography
              sx={{
                fontWeight: 400,
              }}
              variant="h4"
              noWrap
              width="100%"
            >
              Welcome back,
            </Typography>
            <Typography variant="h2" noWrap width="100%">
              {user?.name ?? '사용자 이름 없음'}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontWeight: 400,
              }}
              variant="h4"
              noWrap
              width="100%"
            >
              로그인을 먼저 해주세요.
            </Typography>
            <Typography variant="h2" noWrap width="100%">
              로그아웃 상태
            </Typography>
          </>
        )}
      </Box>
      <IconButton sx={{ width: '3rem' }} onClick={handlePopoverOpen}>
        {settingIcon}
      </IconButton>
      <Popover
        open={isPopoverOpen}
        anchorEl={popoverAnchorEl}
        handleClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box width="13rem">
          <Box
            sx={{
              paddingY: '0.825rem',
              paddingX: '16px',
            }}
          >
            <Typography variant="h3" fontWeight={400} lineHeight={1.5}>
              {user?.name ?? '사용자 이름 없음'}
            </Typography>
            <Typography variant="h5" fontWeight={400}>
              {user?.email ?? '사용자 이메일 없음'}
            </Typography>
          </Box>
          <Divider />
          {/* {!isAdmin && (
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="system-log"
                sx={{
                  borderRadius: '0px',
                }}
              >
                <ListItemIcon>
                  <SettingsIcon
                    sx={{
                      color: 'gray',
                    }}
                  />
                </ListItemIcon>
                <Typography variant="h5">시스템 로그</Typography>
              </ListItemButton>
            </ListItem>
          )} */}
          <Divider />
          {!isAdmin && (
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="profile"
                sx={{
                  borderRadius: '0px',
                }}
              >
                <ListItemIcon>
                  <PersonIcon
                    sx={{
                      color: 'gray',
                    }}
                  />
                </ListItemIcon>
                <Typography variant="h5">내 프로필</Typography>
              </ListItemButton>
            </ListItem>
          )}
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '0px',
              }}
              onClick={handleLogout}
            >
              <ListItemIcon>
                <LogoutIcon
                  sx={{
                    color: 'gray',
                  }}
                />
              </ListItemIcon>
              <Typography variant="h5">로그아웃</Typography>
            </ListItemButton>
          </ListItem>
        </Box>
      </Popover>
    </Box>
  );
};

export default SideHeader;

const defaultIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="34"
    viewBox="0 0 31 34"
    fill="none"
  >
    <g clipPath="url(#clip0_2316_1074)">
      <path
        d="M26.6923 4.24074H18.0769V-0.351852C18.0769 -0.65636 17.9635 -0.948396 17.7615 -1.16372C17.5595 -1.37903 17.2856 -1.5 17 -1.5C16.7144 -1.5 16.4405 -1.37903 16.2385 -1.16372C16.0365 -0.948396 15.9231 -0.65636 15.9231 -0.351852V4.24074H7.30769C6.16522 4.24074 5.06954 4.7246 4.26169 5.58588C3.45384 6.44716 3 7.6153 3 8.83333V24.9074C3 26.1254 3.45384 27.2936 4.26169 28.1549C5.06954 29.0161 6.16522 29.5 7.30769 29.5H26.6923C27.8348 29.5 28.9305 29.0161 29.7383 28.1549C30.5462 27.2936 31 26.1254 31 24.9074V8.83333C31 7.6153 30.5462 6.44716 29.7383 5.58588C28.9305 4.7246 27.8348 4.24074 26.6923 4.24074ZM28.8462 24.9074C28.8462 25.5164 28.6192 26.1005 28.2153 26.5311C27.8114 26.9618 27.2635 27.2037 26.6923 27.2037H7.30769C6.73646 27.2037 6.18862 26.9618 5.78469 26.5311C5.38077 26.1005 5.15385 25.5164 5.15385 24.9074V8.83333C5.15385 8.22432 5.38077 7.64025 5.78469 7.20961C6.18862 6.77897 6.73646 6.53704 7.30769 6.53704H26.6923C27.2635 6.53704 27.8114 6.77897 28.2153 7.20961C28.6192 7.64025 28.8462 8.22432 28.8462 8.83333V24.9074ZM21.8462 16.8704H12.1538C11.1542 16.8704 10.1955 17.2937 9.4886 18.0474C8.78173 18.801 8.38462 19.8231 8.38462 20.8889C8.38462 21.9547 8.78173 22.9768 9.4886 23.7304C10.1955 24.484 11.1542 24.9074 12.1538 24.9074H21.8462C22.8458 24.9074 23.8045 24.484 24.5114 23.7304C25.2183 22.9768 25.6154 21.9547 25.6154 20.8889C25.6154 19.8231 25.2183 18.801 24.5114 18.0474C23.8045 17.2937 22.8458 16.8704 21.8462 16.8704ZM18.0769 19.1667V22.6111H15.9231V19.1667H18.0769ZM10.5385 20.8889C10.5385 20.4321 10.7087 19.9941 11.0116 19.6711C11.3145 19.3481 11.7254 19.1667 12.1538 19.1667H13.7692V22.6111H12.1538C11.7254 22.6111 11.3145 22.4297 11.0116 22.1067C10.7087 21.7837 10.5385 21.3457 10.5385 20.8889ZM21.8462 22.6111H20.2308V19.1667H21.8462C22.2746 19.1667 22.6855 19.3481 22.9884 19.6711C23.2913 19.9941 23.4615 20.4321 23.4615 20.8889C23.4615 21.3457 23.2913 21.7837 22.9884 22.1067C22.6855 22.4297 22.2746 22.6111 21.8462 22.6111ZM9.46154 12.8519C9.46154 12.5112 9.55628 12.1783 9.73378 11.895C9.91128 11.6118 10.1636 11.3911 10.4587 11.2607C10.7539 11.1304 11.0787 11.0963 11.3921 11.1627C11.7054 11.2292 11.9933 11.3932 12.2192 11.6341C12.4451 11.8749 12.5989 12.1818 12.6613 12.5159C12.7236 12.8499 12.6916 13.1962 12.5693 13.5109C12.4471 13.8256 12.24 14.0946 11.9744 14.2838C11.7087 14.4731 11.3964 14.5741 11.0769 14.5741C10.6485 14.5741 10.2376 14.3926 9.93467 14.0696C9.63173 13.7467 9.46154 13.3086 9.46154 12.8519ZM21.3077 12.8519C21.3077 12.5112 21.4024 12.1783 21.5799 11.895C21.7574 11.6118 22.0097 11.3911 22.3049 11.2607C22.6001 11.1304 22.9249 11.0963 23.2382 11.1627C23.5516 11.2292 23.8394 11.3932 24.0653 11.6341C24.2912 11.8749 24.4451 12.1818 24.5074 12.5159C24.5698 12.8499 24.5378 13.1962 24.4155 13.5109C24.2932 13.8256 24.0862 14.0946 23.8205 14.2838C23.5549 14.4731 23.2426 14.5741 22.9231 14.5741C22.4947 14.5741 22.0838 14.3926 21.7808 14.0696C21.4779 13.7467 21.3077 13.3086 21.3077 12.8519Z"
        fill="#1C1D22"
        fillOpacity="0.3"
      />
    </g>
    <defs>
      <clipPath id="clip0_2316_1074">
        <rect
          width="31"
          height="33"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

const settingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_2316_1061)">
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#B40101"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
        stroke="#B40101"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2316_1061">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
