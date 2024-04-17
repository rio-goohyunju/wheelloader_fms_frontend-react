import { TypographyVariantsOptions } from '@mui/material/styles';

// mui theme typography관련 설정.
export const options: TypographyVariantsOptions = {
  fontFamily: [
    `"Roboto"`,
    `-apple-system`,
    `"BlinkMacSystemFont"`,
    `"Segoe UI"`,
    `"Oxygen"`,
    `"Ubuntu"`,
    `"Cantarell"`,
    `"Fira Sans"`,
    `"Droid Sans"`,
    `"Helvetica Neue"`,
    `sans-serif`,
  ].join(','),
};

export const overrides: TypographyVariantsOptions = {
  h6: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  h5: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  h1: {
    fontSize: '2.125rem',
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    color: 'rgba(28, 29, 34, 0.5)',
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.334em',
  },
  body2: {
    letterSpacing: '0em',
    fontWeight: 400,
    lineHeight: '1.5em',
  },
};
