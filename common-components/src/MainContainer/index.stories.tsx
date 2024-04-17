import { Meta, StoryObj } from '@storybook/react';

import MainContainer from '.';

type MainContainerStory = StoryObj<typeof MainContainer>;

export const Basic: MainContainerStory = {
  args: {},
};

export default {
  title: 'Components/MainContainer',
  component: MainContainer,
  tags: ['autodocs'],
} as Meta;
