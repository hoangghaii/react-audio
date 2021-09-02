import { FC } from 'react';
import { IconRewind } from 'src/components/icons/IconRewind';
import { ButtonPrev } from './styles';

export type PropsType = {
  onPrevAudio?: () => void;
  isPlay?: boolean;
};

export const AppButtonPrev: FC<PropsType> = (props: PropsType) => {
  const { onPrevAudio } = props;

  return (
    <ButtonPrev onClick={onPrevAudio}>
      <IconRewind />
    </ButtonPrev>
  );
};
