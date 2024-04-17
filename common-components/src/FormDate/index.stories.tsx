import Stack from '@mui/material/Stack';
import { Meta, StoryObj } from '@storybook/react';

import FormDate from '.';

export const Basic: StoryObj = {
  args: {},
};

export default {
  title: 'Components/FormDate',
  component: FormDate,
  tags: ['autodocs'],
} as Meta;

export const Variants = () => (
  <Stack spacing={2} maxWidth={300}>
    <FormDate name="" />
  </Stack>
);
