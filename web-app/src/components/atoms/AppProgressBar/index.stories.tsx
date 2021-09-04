import { Meta, Story } from '@storybook/react';
import { AppProgressBar } from '.';

export default {
  title: 'Atoms/AppProgressBar',
  component: AppProgressBar,
} as Meta;

const Template: Story = (args) => <AppProgressBar {...args} />;

export const normal = Template.bind({});
