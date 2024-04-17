import { SyntheticEvent } from 'react';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

interface CustomAccordionProps {
  label: string;
  index: number;
  expanded: string | false;
  activeStep: number;
  renderStepForm: () => JSX.Element;
  handleChange: (
    panel: string,
    idx: number
  ) => (event: SyntheticEvent, newExpanded: boolean) => void;
}

const CustomAccordion = ({
  label = '기본설정',
  index,
  expanded,
  activeStep,
  renderStepForm,
  handleChange,
}: CustomAccordionProps) => {
  return (
    <Accordion
      key={label}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`, index)}
      sx={{
        padding: '0.625rem 1.25rem',
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        sx={{
          minHeight: '4rem',
        }}
      >
        <Typography paddingLeft="1rem" variant="h4">
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '3rem' }}>
        {activeStep === index && renderStepForm()}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
