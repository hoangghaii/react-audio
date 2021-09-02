import { IconPropsType } from '@/features/common';
import { Story, Meta } from '@storybook/react';
import { IconVolumeOff } from '.';

export default {
  title: 'Icon/IconVolumeOff',
  component: IconVolumeOff,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconVolumeOff {...args} />;

export const normal = Template.bind({});
normal.args = {};
