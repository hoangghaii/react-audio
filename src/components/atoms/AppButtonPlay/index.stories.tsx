import { Meta, Story } from '@storybook/react';
import { AppButtonPlay, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonPlay',
  component: AppButtonPlay,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonPlay {...args} />;

export const normal = Template.bind({});
normal.args = {
  onPlay: () => {
    //
  },
};
