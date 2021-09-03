import { FC } from 'react';
import { AppButtonAdd } from 'src/components/atoms/AppButtonAdd';
import { AppButtonNext } from 'src/components/atoms/AppButtonNext';
import { AppButtonOption } from 'src/components/atoms/AppButtonOption';
import { AppButtonPause } from 'src/components/atoms/AppButtonPause';
import { AppButtonPlay } from 'src/components/atoms/AppButtonPlay';
import { AppButtonPrev } from 'src/components/atoms/AppButtonPrev';
import { AppButtonShuffle } from 'src/components/atoms/AppButtonShuffle';
import { AppButtonVolumeOff } from 'src/components/atoms/AppButtonVolumeOff';
import { AppButtonVolumeUp } from 'src/components/atoms/AppButtonVolumeUp';
import { AppControl } from 'src/components/atoms/AppControl';
import * as Styc from './styles';

export type PropsType = {
  isPlay: boolean;
  isMute?: boolean;
  onPause: () => void;
  onPlay: () => void;
  onAddAudio: () => void;
  onNextAudio?: () => void;
  onPrevAudio?: () => void;
  onVolumeOff: () => void;
  onVolumeUp: () => void;
};

export const AudioControl: FC<PropsType> = (props: PropsType) => {
  const {
    isMute = false,
    isPlay = false,
    onAddAudio,
    onNextAudio,
    onPrevAudio,
    onPause,
    onPlay,
    onVolumeOff,
    onVolumeUp,
  } = props;

  return (
    <AppControl>
      <Styc.ButtonOption>
        <AppButtonOption />
      </Styc.ButtonOption>
      <Styc.ButtonVolume>
        {isMute ? (
          <AppButtonVolumeOff onVolumeOff={onVolumeOff} />
        ) : (
          <AppButtonVolumeUp onVolumeUp={onVolumeUp} />
        )}
      </Styc.ButtonVolume>
      <AppButtonPrev onPrevAudio={onPrevAudio} />
      <Styc.ButtonPlayPause>
        {isPlay ? (
          <AppButtonPlay onPlay={onPlay} />
        ) : (
          <AppButtonPause onPause={onPause} />
        )}
      </Styc.ButtonPlayPause>
      <AppButtonNext onNextAudio={onNextAudio} />
      <Styc.ButtonShuffle>
        <AppButtonShuffle />
      </Styc.ButtonShuffle>
      <Styc.ButtonAdd>
        <AppButtonAdd onAddAudio={onAddAudio} />
      </Styc.ButtonAdd>
    </AppControl>
  );
};
