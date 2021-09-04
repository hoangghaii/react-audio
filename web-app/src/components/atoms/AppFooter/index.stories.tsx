import { Meta, Story } from '@storybook/react';
import { AppFooter } from '.';

export default {
  title: 'Atoms/AppFooter',
  component: AppFooter,
} as Meta;

const Template: Story = (args) => <AppFooter {...args} />;

export const normal = Template.bind({});
