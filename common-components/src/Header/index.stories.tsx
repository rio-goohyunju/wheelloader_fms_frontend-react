import { Meta, StoryObj } from '@storybook/react';

import Header from '.';

type HeaderStory = StoryObj<typeof Header>;

export const Basic: HeaderStory = {
  args: {},
};

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta;
