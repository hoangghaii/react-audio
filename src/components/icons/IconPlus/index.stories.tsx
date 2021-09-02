import { IconPropsType } from '@/features/common';
import { Story, Meta } from '@storybook/react';
import { IconPlus } from '.';

export default {
  title: 'Icon/IconPlus',
  component: IconPlus,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconPlus {...args} />;

export const normal = Template.bind({});
normal.args = {};
