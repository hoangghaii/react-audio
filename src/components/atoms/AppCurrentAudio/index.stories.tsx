import { Meta, Story } from '@storybook/react';
import { AppCurrentAudio, PropsType } from '.';

export default {
  title: 'Atoms/AppCurrentAudio',
  component: AppCurrentAudio,
} as Meta;

const Template: Story<PropsType> = (args) => <AppCurrentAudio {...args} />;

export const normal = Template.bind({});
normal.args = {
  songName: 'Symphony',
  artistName: 'Clean Bandit ft. Zara Larsson',
};
