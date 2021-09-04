import { Meta, Story } from '@storybook/react';
import { AppButtonShuffle, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonShuffle',
  component: AppButtonShuffle,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonShuffle {...args} />;

export const normal = Template.bind({});
normal.args = {
  onPrevAudio: () => {
    //
  },
};
