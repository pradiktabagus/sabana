import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemArticle } from "../components/ItemArticle"

export default {
  title: 'Component/Item',
  component: ItemArticle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ItemArticle>;

const Template: ComponentStory<typeof ItemArticle> = (args) => <ItemArticle {...args} />;

export const Primary = Template.bind({});
    Primary.args = {
};