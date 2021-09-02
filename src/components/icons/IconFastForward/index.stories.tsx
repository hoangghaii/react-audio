import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconFastForward } from '.';

export default {
  title: 'Icon/IconFastForward',
  component: IconFastForward,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconFastForward {...args} />;

export const normal = Template.bind({});
normal.args = {};
