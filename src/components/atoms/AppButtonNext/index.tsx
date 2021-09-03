import { FC } from 'react';
import { AppButton } from 'src/components/atoms/AppButton';
import { IconFastForward } from 'src/components/icons/IconFastForward';

export type PropsType = {
  onNextAudio?: () => void;
};

export const AppButtonNext: FC<PropsType> = (props: PropsType) => {
  const { onNextAudio } = props;

  return <AppButton onClick={onNextAudio} icon={<IconFastForward />} />;
};
