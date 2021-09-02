import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconPlay } from '.';

export default {
  title: 'Icon/IconPlay',
  component: IconPlay,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconPlay {...args} />;

export const normal = Template.bind({});
normal.args = {};
