import { FC } from 'react';
import { AppButton } from 'src/components/views/AppButton';
import { IconRandom } from 'src/components/icons/IconRandom';

export type PropsType = {};

export const AppButtonShuffle: FC<PropsType> = (props: PropsType) => {
  return <AppButton icon={<IconRandom />} />;
};
