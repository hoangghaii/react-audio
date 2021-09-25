import { Meta, Story } from '@storybook/react';
import { AppButtonPause, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonPause',
  component: AppButtonPause,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonPause {...args} />;

export const normal = Template.bind({});
normal.args = {
  onPause: () => {
    //
  },
};
