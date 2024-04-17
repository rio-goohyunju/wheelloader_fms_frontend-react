import { Decorator } from '@storybook/react';

import { ThemeProvider } from 'src/theme';

const previewDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

export default [previewDecorator];
