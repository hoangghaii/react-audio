import { IconPropsType } from 'src/features/common';
import { Story, Meta } from '@storybook/react';
import { IconHeart } from '.';

export default {
  title: 'Icon/IconHeart',
  component: IconHeart,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconHeart {...args} />;

export const normal = Template.bind({});
normal.args = {};
