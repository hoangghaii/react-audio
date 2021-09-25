import { FC } from 'react';
import { AppButton } from 'src/components/views/AppButton';
import { IconPlay } from 'src/components/icons/IconPlay';

export type PropsType = {
  onPlay: () => void;
};

export const AppButtonPlay: FC<PropsType> = (props: PropsType) => {
  const { onPlay } = props;

  return <AppButton onClick={onPlay} icon={<IconPlay />} />;
};
