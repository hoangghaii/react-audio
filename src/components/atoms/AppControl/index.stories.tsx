import { Meta, Story } from '@storybook/react';
import { AppControl } from '.';

export default {
  title: 'Atoms/AppControl',
  component: AppControl,
} as Meta;

const Template: Story = (args) => <AppControl {...args} />;

export const normal = Template.bind({});
