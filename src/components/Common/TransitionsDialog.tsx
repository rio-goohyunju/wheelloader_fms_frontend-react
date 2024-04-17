import { forwardRef, SetStateAction } from 'react';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface TransitionsDialogProps {
  modalOpen: boolean;
  setModalOpen: (value: SetStateAction<boolean>) => void;
  onSubmit: () => void;
  titleText: string;
  contextText: string;
}

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export const TransitionsDialog = ({
  modalOpen,
  setModalOpen,
  onSubmit,
  titleText,
  contextText,
}: TransitionsDialogProps) => {
  return (
    <Box>
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModalOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{titleText} </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {contextText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            content="취소"
            onClick={() => setModalOpen(false)}
          >
            취소
          </Button>
          <Button variant="contained" type="submit" onClick={onSubmit}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
