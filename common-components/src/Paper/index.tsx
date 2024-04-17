import React from 'react';

import { Paper as MPaper, PaperProps as MPaperProps } from '@mui/material';
import PropTypes from 'prop-types';

export type PaperProps = {
  children?: React.ReactNode;
  elevation?: number;
  borderRadius?: string;
  minWidth?: string;
  minHeight?: string;
} & MPaperProps;

const Paper = ({ children, ...props }: PaperProps) => {
  return <MPaper {...props}>{children}</MPaper>;
};

Paper.propTypes = {
  elevation: PropTypes.number,
  borderRadius: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  variant: PropTypes.oneOf(['elevation', 'outlined']),
};

Paper.defaultProps = {
  borderRadius: '12px',
  minWidth: '300px',
  minHeight: '300px',
  variant: 'elevation',
};

export default Paper;
