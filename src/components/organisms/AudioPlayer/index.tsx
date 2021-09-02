import { FC } from 'react';
import { AppAlbum } from 'src/components/atoms/AppAlbum';
import { AudioInfo } from 'src/components/molecules/AudioInfo';
import { PlayerContainer } from './styles';

export type PropsType = {
  imgSrc?: string;
  onHeart: () => void;
  isHeart: boolean;
};

export const AudioPlayer: FC<PropsType> = (props: PropsType) => {
  const { imgSrc, onHeart, isHeart } = props;

  return (
    <PlayerContainer>
      <AppAlbum imgSrc={imgSrc} onHeart={onHeart} isHeart={isHeart} />
      <AudioInfo />
    </PlayerContainer>
  );
};
