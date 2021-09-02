import { Meta, Story } from '@storybook/react';
import { AppButtonPrev, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonPrev',
  component: AppButtonPrev,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonPrev {...args} />;

export const normal = Template.bind({});
normal.args = {
  onPrevAudio: () => {
    //
  },
};
