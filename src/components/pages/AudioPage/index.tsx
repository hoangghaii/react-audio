import { FC } from 'react';
import { AppFooter } from 'src/components/atoms/AppFooter';
import { AudioPlayer } from 'src/components/organisms/AudioPlayer';
import { AudioContainer } from './styles';

export type PropsType = {
  imgSrc?: string;
  isPlay: boolean;
  isMute?: boolean;
  isHeart: boolean;
  onHeart: () => void;
  onPause: () => void;
  onPlay: () => void;
  onAddAudio: () => void;
  onNextAudio?: () => void;
  onPrevAudio?: () => void;
  onVolumeOff: () => void;
  onVolumeUp: () => void;
};

export const AudioPage: FC<PropsType> = (props: PropsType) => {
  const {
    imgSrc,
    isMute = false,
    isPlay = false,
    isHeart = false,
    onHeart,
    onAddAudio,
    onNextAudio,
    onPrevAudio,
    onPause,
    onPlay,
    onVolumeOff,
    onVolumeUp,
  } = props;

  return (
    <AudioContainer>
      <AudioPlayer
        imgSrc={imgSrc}
        onHeart={onHeart}
        isHeart={isHeart}
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
      <AppFooter />
    </AudioContainer>
  );
};
