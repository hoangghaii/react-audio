import { Meta, Story } from '@storybook/react';
import { AppButtonAdd, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonAdd',
  component: AppButtonAdd,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonAdd {...args} />;

export const normal = Template.bind({});
normal.args = {
  onAddAudio: () => {
    //
  },
};
