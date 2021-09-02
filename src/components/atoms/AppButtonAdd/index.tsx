import { FC } from 'react';
import { IconPlus } from 'src/components/icons/IconPlus';
import { ButtonAdd } from './styles';

export type PropsType = {
  onAddAudio?: () => void;
};

export const AppButtonAdd: FC<PropsType> = (props: PropsType) => {
  const { onAddAudio } = props;

  return (
    <ButtonAdd onClick={onAddAudio}>
      <IconPlus />
    </ButtonAdd>
  );
};
