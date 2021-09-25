import { FC } from 'react';
import { AppButton } from 'src/components/views/AppButton';
import { IconRewind } from 'src/components/icons/IconRewind';

export type PropsType = {
  onPrevAudio?: () => void;
};

export const AppButtonPrev: FC<PropsType> = (props: PropsType) => {
  const { onPrevAudio } = props;

  return <AppButton onClick={onPrevAudio} icon={<IconRewind />} />;
};
