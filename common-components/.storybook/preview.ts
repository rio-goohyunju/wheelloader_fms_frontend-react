import type { Preview } from '@storybook/react';
import previewDecorators from './preview-decorators';
import '@fontsource/material-icons';

const preview: Preview = {
  decorators: previewDecorators,
  // global decorator

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    mode: {
      description: 'Mode for preview area',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'starhollow', title: 'light' },
          { value: 'dark', icon: 'star', title: 'dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
