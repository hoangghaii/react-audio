import { Meta, Story } from '@storybook/react';
import { AppButtonVolumeUp, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonVolumeUp',
  component: AppButtonVolumeUp,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonVolumeUp {...args} />;

export const normal = Template.bind({});
normal.args = {
  onVolumeUp: () => {
    //
  },
};
