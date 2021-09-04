import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconPause } from '.';

export default {
  title: 'Icon/IconPause',
  component: IconPause,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconPause {...args} />;

export const normal = Template.bind({});
normal.args = {};
