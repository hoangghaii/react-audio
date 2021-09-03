import { Meta, Story } from '@storybook/react';
import { AudioPage, PropsType } from '.';

export default {
  title: 'Pages/AudioPage',
  component: AudioPage,
} as Meta;

const Template: Story<PropsType> = (args) => <AudioPage {...args} />;

export const normal = Template.bind({});
normal.args = {
  imgSrc:
    'http://4.bp.blogspot.com/-pcPjBBdE_K8/U7v4oEX3M8I/AAAAAAAAD2I/6dWyzgiPzkQ/s1600/Clean+BAndit+Album+.jpg',
  isPlay: true,
  isMute: false,
  isHeart: false,
  onHeart: () => {
    //
  },
  onPause: () => {
    //
  },
  onPlay: () => {
    //
  },
  onAddAudio: () => {
    //
  },
  onNextAudio: () => {
    //
  },
  onPrevAudio: () => {
    //
  },
  onVolumeOff: () => {
    //
  },
  onVolumeUp: () => {
    //
  },
};
