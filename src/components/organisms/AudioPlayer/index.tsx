import { FC } from 'react';
import { AppAlbum } from 'src/components/atoms/AppAlbum';
import { AudioInfo } from 'src/components/molecules/AudioInfo';
import { PlayerContainer } from './styles';

export type PropsType = {
  imgSrc?: string;
  isHeart: boolean;
  isPlay: boolean;
  isMute?: boolean;
  onHeart: () => void;
  onPause: () => void;
  onPlay: () => void;
  onAddAudio: () => void;
  onNextAudio?: () => void;
  onPrevAudio?: () => void;
  onVolumeOff: () => void;
  onVolumeUp: () => void;
};

export const AudioPlayer: FC<PropsType> = (props: PropsType) => {
  const {
    imgSrc,
    onHeart,
    isHeart,
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
    <PlayerContainer>
      <AppAlbum imgSrc={imgSrc} onHeart={onHeart} isHeart={isHeart} />
      <AudioInfo
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
    </PlayerContainer>
  );
};
