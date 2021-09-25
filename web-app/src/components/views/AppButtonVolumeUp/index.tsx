import { FC } from 'react';
import { AppButton } from 'src/components/views/AppButton';
import { IconVolumeUp } from 'src/components/icons/IconVolumeUp';

export type PropsType = {
  onVolumeUp: () => void;
};

export const AppButtonVolumeUp: FC<PropsType> = (props: PropsType) => {
  const { onVolumeUp } = props;

  return <AppButton onClick={onVolumeUp} icon={<IconVolumeUp />} />;
};
