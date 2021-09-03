import { Meta, Story } from '@storybook/react';
import { AudioPlayer, PropsType } from '.';

export default {
  title: 'Organims/AudioPlayer',
  component: AudioPlayer,
} as Meta;

const Template: Story<PropsType> = (args) => <AudioPlayer {...args} />;

export const normal = Template.bind({});
normal.args = {
  songInfo: undefined,
  isHeart: false,
  isPlay: true,
  isMute: false,
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
