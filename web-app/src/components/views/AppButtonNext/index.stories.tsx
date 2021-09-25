import { Meta, Story } from '@storybook/react';
import { AppButtonNext, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonNext',
  component: AppButtonNext,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonNext {...args} />;

export const normal = Template.bind({});
normal.args = {
  onNextAudio: () => {
    //
  },
};
