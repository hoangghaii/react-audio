import { FC } from 'react';
import { AppCurrentAudio } from 'src/components/atoms/AppCurrentAudio';
import { AppProgressBar } from 'src/components/atoms/AppProgressBar';
import { AudioControl } from 'src/components/molecules/AudioControl';
import { InfoContainer } from './styles';

export type PropsType = {
  songName: string;
  artistName: string;
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

export const AudioInfo: FC<PropsType> = (props: PropsType) => {
  const {
    songName,
    artistName,
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
    <InfoContainer>
      <AppProgressBar />
      <AppCurrentAudio songName={songName} artistName={artistName} />
      <AudioControl
        isMute={isMute}
        isPlay={isPlay}
        onAddAudio={onAddAudio}
        onNextAudio={onNextAudio}
        onPrevAudio={onPrevAudio}
        onPause={onPause}
        onPlay={onPlay}
        onVolumeOff={onVolumeOff}
        onVolumeUp={onVolumeUp}
      />
    </InfoContainer>
  );
};