import { FC } from 'react';
import { IconHeart } from 'src/components/icons/IconHeart';
import * as Styc from './styles';

export type PropsType = {
  imgSrc?: string;
  onHeart: () => void;
  isHeart: boolean;
};

export const AppAlbum: FC<PropsType> = (props: PropsType) => {
  const { imgSrc = '', onHeart, isHeart } = props;

  return (
    <Styc.Album imgSrc={imgSrc}>
      <Styc.Heart onClick={onHeart} isHeart={isHeart}>
        <IconHeart />
      </Styc.Heart>
    </Styc.Album>
  );
};
