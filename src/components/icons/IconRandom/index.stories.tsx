import { IconPropsType } from '@/features/common';
import { Story, Meta } from '@storybook/react';
import { IconRandom } from '.';

export default {
  title: 'Icon/IconRandom',
  component: IconRandom,
} as Meta;

const Template: Story<IconPropsType> = (args) => <IconRandom {...args} />;

export const normal = Template.bind({});
normal.args = {};
