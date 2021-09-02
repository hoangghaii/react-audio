import { FC } from 'react';
import { IconFastForward } from 'src/components/icons/IconFastForward';
import { IconMenu } from 'src/components/icons/IconMenu';
import { IconPause } from 'src/components/icons/IconPause';
import { IconPlay } from 'src/components/icons/IconPlay';
import { IconPlus } from 'src/components/icons/IconPlus';
import { IconRewind } from 'src/components/icons/IconRewind';
import { IconVolumeOff } from 'src/components/icons/IconVolumeOff';
import { IconVolumeUp } from 'src/components/icons/IconVolumeUp';
import * as Styc from './styles';

export type PropsType = {
  isMute?: boolean;
  isPlay?: boolean;
};

export const AppControl: FC<PropsType> = (props: PropsType) => {
  const { isMute = false, isPlay = false } = props;

  return (
    <Styc.Controls>
      <Styc.Option>
        <IconMenu />
      </Styc.Option>
      <Styc.Volume>{isMute ? <IconVolumeOff /> : <IconVolumeUp />}</Styc.Volume>
      <Styc.Previous>
        <IconRewind />
      </Styc.Previous>
      <Styc.PlayPause>{isPlay ? <IconPlay /> : <IconPause />}</Styc.PlayPause>
      <Styc.Next>
        <IconFastForward />
      </Styc.Next>
      <Styc.Add>
        <IconPlus />
      </Styc.Add>
    </Styc.Controls>
  );
};
