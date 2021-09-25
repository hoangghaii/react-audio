import { Meta, Story } from '@storybook/react';
import { AudioPage } from '.';

export default {
  title: 'Pages/AudioPage',
  component: AudioPage,
} as Meta;

const Template: Story = (args) => <AudioPage {...args} />;

export const normal = Template.bind({});
normal.args = {};
