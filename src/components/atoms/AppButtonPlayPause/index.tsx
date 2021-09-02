import { FC } from 'react';
import { IconPause } from 'src/components/icons/IconPause';
import { IconPlay } from 'src/components/icons/IconPlay';
import { ButtonPlayPause } from './styles';

export type PropsType = {
  onPlay?: () => void;
  isPlay?: boolean;
};

export const AppButtonPlayPause: FC<PropsType> = (props: PropsType) => {
  const { onPlay, isPlay = false } = props;

  return (
    <ButtonPlayPause onClick={onPlay}>
      {isPlay ? <IconPlay /> : <IconPause />}
    </ButtonPlayPause>
  );
};
