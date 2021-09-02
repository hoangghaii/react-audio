import { FC } from 'react';
import { IconMenu } from 'src/components/icons/IconMenu';
import { ButtonOption } from './styles';

export type PropsType = {};

export const AppButtonOption: FC<PropsType> = (props: PropsType) => {
  return (
    <ButtonOption>
      <IconMenu />
    </ButtonOption>
  );
};
