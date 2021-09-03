import { Meta, Story } from '@storybook/react';
import { AudioPage, PropsType } from '.';

export default {
  title: 'Pages/AudioPage',
  component: AudioPage,
} as Meta;

const Template: Story<PropsType> = (args) => <AudioPage {...args} />;

export const normal = Template.bind({});
normal.args = {
  songInfo: undefined,
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
