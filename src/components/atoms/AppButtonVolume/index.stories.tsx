import { Meta, Story } from '@storybook/react';
import { AppButtonVolume, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonVolume',
  component: AppButtonVolume,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonVolume {...args} />;

export const normal = Template.bind({});
normal.args = {
  onChangeVolume: () => {
    //
  },
  isMute: false,
};
