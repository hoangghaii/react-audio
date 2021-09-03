import { FC } from 'react';
import { AppButton } from 'src/components/atoms/AppButton';
import { IconMenu } from 'src/components/icons/IconMenu';

export type PropsType = {};

export const AppButtonOption: FC<PropsType> = (props: PropsType) => {
  return <AppButton icon={<IconMenu />} />;
};
