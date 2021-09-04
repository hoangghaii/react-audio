import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconMenu } from '.';

export default {
  title: 'Icon/IconMenu',
  component: IconMenu,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconMenu {...args} />;

export const normal = Template.bind({});
normal.args = {};
