import { Meta, Story } from '@storybook/react';
import { AppButtonOption, PropsType } from '.';

export default {
  title: 'Atoms/AppButtonOption',
  component: AppButtonOption,
} as Meta;

const Template: Story<PropsType> = (args) => <AppButtonOption {...args} />;

export const normal = Template.bind({});
normal.args = {};
