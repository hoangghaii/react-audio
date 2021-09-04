import { Meta, Story } from '@storybook/react';
import { AudioControl, PropsType } from '.';

export default {
  title: 'Molecules/AudioControl',
  component: AudioControl,
} as Meta;

const Template: Story<PropsType> = (args) => <AudioControl {...args} />;

export const normal = Template.bind({});
normal.args = {
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
