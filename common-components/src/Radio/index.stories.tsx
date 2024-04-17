import Stack from '@mui/material/Stack';
import { Meta, StoryObj } from '@storybook/react';

import Radio from '.';

export const Basic: StoryObj = {
  args: {
    label: 'Button',
  },
};

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
} as Meta;

export const Variants = () => (
  <Stack spacing={2} maxWidth={300}>
    <Radio />
  </Stack>
);

export const Colors = () => (
  <Stack spacing={2} maxWidth={300}>
    <Radio />
    <Radio color="secondary" />
    <Radio color="success" />
    <Radio color="error" />
  </Stack>
);

export const Sizes = () => (
  <Stack spacing={2} maxWidth={300}>
    <Radio size="small" />
    <Radio size="medium" />
  </Stack>
);
