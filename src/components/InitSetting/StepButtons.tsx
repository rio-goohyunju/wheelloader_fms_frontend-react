import { Button, Grid } from '@mui/material';

export interface StepButtonsProps {
  isLoading: boolean;
  activeStep: number;
  handlePrevious: () => void;
  handleSkip: () => void;
  stepLength: number;
  disabled: boolean;
}

export const StepButtons = ({
  isLoading,
  activeStep,
  handlePrevious,
  stepLength,
  handleSkip,
  disabled,
}: StepButtonsProps) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 3,
      }}
    >
      <Button disabled={activeStep === 0} onClick={handlePrevious}>
        이전
      </Button>
      {activeStep === stepLength - 1 ? (
        <Button
          disabled={isLoading}
          variant="contained"
          color="primary"
          type="submit"
        >
          설정완료
        </Button>
      ) : (
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                disabled={disabled}
                onClick={handleSkip}
              >
                다음
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSkip}>
                건너뛰기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
