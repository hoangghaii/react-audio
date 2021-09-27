import { Meta, Story } from '@storybook/react';
import { AppProgressBar, PropsType } from '.';

export default {
  title: 'Atoms/AppProgressBar',
  component: AppProgressBar,
} as Meta;

const Template: Story<PropsType> = (args) => <AppProgressBar {...args} />;

export const normal = Template.bind({});
normal.args = {};
