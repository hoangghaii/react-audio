import { Meta, Story } from '@storybook/react';
import { AppButtonVolumeOff, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonVolumeOff',
  component: AppButtonVolumeOff,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonVolumeOff {...args} />;

export const normal = Template.bind({});
normal.args = {
  onVolumeOff: () => {
    //
  },
};
