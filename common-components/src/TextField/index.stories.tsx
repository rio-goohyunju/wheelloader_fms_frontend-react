import Stack from '@mui/material/Stack';
import { Meta, StoryObj } from '@storybook/react';

import TextField from '.';

export const Basic: StoryObj = {
  args: {
    label: 'TextField',
  },
};

export default {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} as Meta;

export const Variants = () => (
  <Stack spacing={2} maxWidth={300}>
    <TextField label="TextField" />
  </Stack>
);

export const Colors = () => (
  <Stack spacing={2} maxWidth={300}>
    <TextField label="Primary" />
    <TextField color="secondary" label="Secondary" />
    <TextField color="success" label="Success" />
    <TextField color="error" label="Error" />
  </Stack>
);

export const Sizes = () => (
  <Stack spacing={2} maxWidth={300}>
    <TextField size="small" label="Small" />
    <TextField size="medium" label="Medium" />
  </Stack>
);
