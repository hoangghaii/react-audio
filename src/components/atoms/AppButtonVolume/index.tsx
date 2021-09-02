import { FC } from 'react';
import { IconVolumeOff } from 'src/components/icons/IconVolumeOff';
import { IconVolumeUp } from 'src/components/icons/IconVolumeUp';
import { ButtonVolume } from './styles';

export type PropsType = {
  onChangeVolume?: () => void;
  isMute?: boolean;
};

export const AppButtonVolume: FC<PropsType> = (props: PropsType) => {
  const { onChangeVolume, isMute = false } = props;

  return (
    <ButtonVolume onClick={onChangeVolume}>
      {isMute ? <IconVolumeOff /> : <IconVolumeUp />}
    </ButtonVolume>
  );
};
