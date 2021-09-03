import { FC } from 'react';
import { AppAlbum } from 'src/components/atoms/AppAlbum';
import { AudioInfo } from 'src/components/molecules/AudioInfo';
import { SongType } from 'src/features/songs';
import { PlayerContainer } from './styles';

export type PropsType = {
  songInfo: SongType;
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
    songInfo,
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
      <AppAlbum
        imgSrc={songInfo.song_art_image_url}
        onHeart={onHeart}
        isHeart={isHeart}
      />
      <AudioInfo
        songName={songInfo.full_title}
        artistName={songInfo.primary_artist.name}
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
