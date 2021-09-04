import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconVolumeUp } from '.';

export default {
  title: 'Icon/IconVolumeUp',
  component: IconVolumeUp,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconVolumeUp {...args} />;

export const normal = Template.bind({});
normal.args = {};
