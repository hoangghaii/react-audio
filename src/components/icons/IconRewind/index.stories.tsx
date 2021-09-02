import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconRewind } from '.';

export default {
  title: 'Icon/IconRewind',
  component: IconRewind,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconRewind {...args} />;

export const normal = Template.bind({});
normal.args = {};
