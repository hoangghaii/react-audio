import { FC } from 'react';
import { AppButton } from 'src/components/atoms/AppButton';
import { IconVolumeOff } from 'src/components/icons/IconVolumeOff';

export type PropsType = {
  onVolumeOff: () => void;
};

export const AppButtonVolumeOff: FC<PropsType> = (props: PropsType) => {
  const { onVolumeOff } = props;

  return <AppButton onClick={onVolumeOff} icon={<IconVolumeOff />} />;
};
