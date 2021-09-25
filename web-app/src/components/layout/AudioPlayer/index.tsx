import { FC } from 'react';
import { PlayerContainer } from './styles';

export type PropsType = {
  albumNode: React.ReactNode;
  audioInfoNode: React.ReactNode;
};

export const AudioPlayer: FC<PropsType> = (props: PropsType) => {
  const { albumNode, audioInfoNode } = props;

  return (
    <PlayerContainer>
      {albumNode}
      {audioInfoNode}
    </PlayerContainer>
  );
};
