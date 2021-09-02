import { Meta, Story } from '@storybook/react';
import { AudioControl } from '.';

export default {
  title: 'Molecules/AudioControl',
  component: AudioControl,
} as Meta;

const Template: Story = (args) => <AudioControl {...args} />;

export const normal = Template.bind({});
