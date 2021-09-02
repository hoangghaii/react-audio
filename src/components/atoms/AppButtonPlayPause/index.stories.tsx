import { Meta, Story } from '@storybook/react';
import { AppButtonPlayPause, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonPlayPause',
  component: AppButtonPlayPause,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonPlayPause {...args} />;

export const normal = Template.bind({});
normal.args = {
  onPlay: () => {
    //
  },
  isPlay: true,
};
