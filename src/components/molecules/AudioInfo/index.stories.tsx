import { Meta, Story } from '@storybook/react';
import { AudioInfo, PropsType } from '.';

export default {
  title: 'Molecules/AudioInfo',
  component: AudioInfo,
} as Meta;

const Template: Story<PropsType> = (args) => <AudioInfo {...args} />;

export const normal = Template.bind({});
normal.args = {
  songName: 'sd123ascx',
  artistName: 'sd123ascx',
  isPlay: true,
  isMute: false,
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
