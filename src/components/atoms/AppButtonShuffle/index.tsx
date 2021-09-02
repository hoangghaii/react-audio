import { FC } from 'react';
import { IconRandom } from 'src/components/icons/IconRandom';
import { ButtonShuffle } from './styles';

export type PropsType = {};

export const AppButtonShuffle: FC<PropsType> = (props: PropsType) => {
  return (
    <ButtonShuffle>
      <IconRandom />
    </ButtonShuffle>
  );
};
