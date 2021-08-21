import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from "../components/search"

export default {
  title: 'Component/Search',
  component: Search,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  placeholder: 'Search',
};

export const Secondary = Template.bind({});
Secondary.args = {
    placeholder: 'Search',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'Search',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Search',
};