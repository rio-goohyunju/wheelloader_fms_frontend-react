import { Meta, StoryObj } from '@storybook/react';

import SideMenu from '.';

type SideMenuStory = StoryObj<typeof SideMenu>;

export default {
  title: 'Components/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
} as Meta;

export const Basic: SideMenuStory = {
  args: {},
};
