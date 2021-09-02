import { FC } from 'react';
import { IconFastForward } from 'src/components/icons/IconFastForward';
import { ButtonNext } from './styles';

export type PropsType = {
  onNextAudio?: () => void;
};

export const AppButtonNext: FC<PropsType> = (props: PropsType) => {
  const { onNextAudio } = props;

  return (
    <ButtonNext onClick={onNextAudio}>
      <IconFastForward />
    </ButtonNext>
  );
};
