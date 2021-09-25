import { Meta, Story } from '@storybook/react';
import { AppAlbum, PropsType } from '.';

export default {
  title: 'Atoms/AppAlbum',
  component: AppAlbum,
} as Meta;

const Template: Story<PropsType> = (args) => <AppAlbum {...args} />;

export const normal = Template.bind({});
normal.args = {
  imgSrc:
    'http://4.bp.blogspot.com/-pcPjBBdE_K8/U7v4oEX3M8I/AAAAAAAAD2I/6dWyzgiPzkQ/s1600/Clean+BAndit+Album+.jpg',
  isHeart: false,
};
