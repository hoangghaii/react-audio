import { Meta, Story } from '@storybook/react';
import { AudioInfo } from '.';

export default {
  title: 'Molecules/AudioInfo',
  component: AudioInfo,
} as Meta;

const Template: Story = (args) => <AudioInfo {...args} />;

export const normal = Template.bind({});
