import { FC } from 'react';
import { AppButton } from 'src/components/atoms/AppButton';
import { IconPause } from 'src/components/icons/IconPause';

export type PropsType = {
  onPause: () => void;
};

export const AppButtonPause: FC<PropsType> = (props: PropsType) => {
  const { onPause } = props;

  return <AppButton onClick={onPause} icon={<IconPause />} />;
};
