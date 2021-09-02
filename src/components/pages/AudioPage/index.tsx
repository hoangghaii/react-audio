import { FC, useState } from 'react';
import { AppFooter } from 'src/components/atoms/AppFooter';
import { AudioPlayer } from 'src/components/organisms/AudioPlayer';

export type PropsType = {
  imgSrc?: string;
};

export const AudioPage: FC<PropsType> = (props: PropsType) => {
  const { imgSrc } = props;

  const [heart, setHeart] = useState(false);

  return (
    <>
      <AudioPlayer
        imgSrc={imgSrc}
        onHeart={() => setHeart(!heart)}
        isHeart={heart}
      />
      <AppFooter />
    </>
  );
};
