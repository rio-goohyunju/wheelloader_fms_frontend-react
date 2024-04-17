import { Meta, StoryObj } from '@storybook/react';

import SideHeader from '.';

type SideHeaderStory = StoryObj<typeof SideHeader>;

export default {
  title: 'Components/SideHeader',
  component: SideHeader,
  tags: ['autodocs'],
} as Meta;

export const Basic: SideHeaderStory = {
  args: {},
};
