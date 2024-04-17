// import React from 'react';

// import Stack from '@mui/material/Stack';
import { Meta, StoryObj } from '@storybook/react';

import CustomAccordion from '.';

export const Basic: StoryObj = {
  args: {
    label: '기본설정',
    index: 0,
    expanded: 'panel0',
    activeStep: 0,
    renderStepForm: () => <div>Step Form</div>,
    handleChange: () => () => {},
  },
};

export default {
  title: 'Components/CustomAccordion',
  component: CustomAccordion,
  tags: ['autodocs'],
} as Meta;

// export const Variants = () => (
//   <Stack spacing={2} minWidth={300}>
//     <CustomAccordion label="유저 정보입력" />
//     <CustomAccordion label="스카우트 정보" />
//     <CustomAccordion label="계정정보" />
//   </Stack>
// );
