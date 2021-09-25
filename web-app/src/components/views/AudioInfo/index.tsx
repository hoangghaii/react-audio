import { FC } from 'react';
import { InfoContainer } from './styles';

export type PropsType = {
  progressBarNode: React.ReactNode;
  audioNode: React.ReactNode;
  controlNode: React.ReactNode;
};

export const AudioInfo: FC<PropsType> = (props: PropsType) => {
  const { progressBarNode, audioNode, controlNode } = props;

  return (
    <InfoContainer>
      {progressBarNode}
      {audioNode}
      {controlNode}
    </InfoContainer>
  );
};
