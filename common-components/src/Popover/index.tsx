import React from 'react';

import { Popover as MPopover, PopoverProps } from '@mui/material';

interface PopoverWindowProps extends PopoverProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const Popover = ({ children, handleClose, ...props }: PopoverWindowProps) => {
  return (
    <MPopover onClick={handleClose} {...props}>
      {children}
    </MPopover>
  );
};

export default Popover;
