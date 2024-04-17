import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import Paper from '.';

type PaperStory = StoryObj<typeof Paper>;

export default {
  title: 'Components/Paper',
  component: Paper,
  tags: ['autodocs'],
} as Meta;

export const Basic: PaperStory = {
  args: {},
};

export const Elevation = () => (
  <Stack spacing={2} minWidth={300} minHeight={300}>
    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
      <Paper key={elevation} elevation={elevation}>
        {`elevation=${elevation}`}
      </Paper>
    ))}
  </Stack>
);

export const Variants = () => (
  <Stack spacing={2} minWidth={300} minHeight={300} sx={{ bgcolor: 'black' }}>
    <Paper variant="elevation" />
    <Paper variant="elevation" />
  </Stack>
);
