import Stack from '@mui/material/Stack';
import { Meta, StoryObj } from '@storybook/react';

import Select from '.';

export const Basic: StoryObj = {
  args: {
    label: 'Button',
  },
};

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} as Meta;

export const Variants = () => (
  <Stack spacing={2} maxWidth={300}>
    <Select label="Select" />
  </Stack>
);

export const Colors = () => (
  <Stack spacing={2} maxWidth={300}>
    <Select label="Primary" />
    <Select color="secondary" label="Secondary" />
    <Select color="success" label="Success" />
    <Select color="error" label="Error" />
  </Stack>
);

export const Sizes = () => (
  <Stack spacing={2} maxWidth={300}>
    <Select size="small" label="Small" />
    <Select size="medium" label="Medium" />
  </Stack>
);
