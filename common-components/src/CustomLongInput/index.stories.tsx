import React from 'react';

import Stack from '@mui/material/Stack';
import { Meta, Story } from '@storybook/react';

import CustomLongInput from '.';

export const Basic: Story = {
  args: {
    label: '확인대기중',
  },
};

export default {
  title: 'Components/CustomLongInput',
  component: CustomLongInput,
  tags: ['autodocs'],
} as Meta;

export const Variants = () => (
  <Stack spacing={2} maxWidth={300}>
    {/* <CheckMail variant="wait" label="확인대기중" />
    <CheckMail variant="check" label="확인완료" />
    <CheckMail variant="error" label="전송실패" />
    <CheckMail variant="cancel" label="만료됨" /> */}
  </Stack>
);
