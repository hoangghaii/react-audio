import { Meta, Story } from '@storybook/react';
import { AppControl, PropsType } from '.';

export default {
  title: 'Atoms/AppControl',
  component: AppControl,
} as Meta;

const Template: Story<PropsType> = (args) => <AppControl {...args} />;

export const normal = Template.bind({});
normal.args = {
  isMute: false,
  isPlay: true,
};
