import { FC } from 'react';
import { AppButton } from 'src/components/views/AppButton';
import { IconPlus } from 'src/components/icons/IconPlus';

export type PropsType = {
  onAddAudio: () => void;
};

export const AppButtonAdd: FC<PropsType> = (props: PropsType) => {
  const { onAddAudio } = props;

  return <AppButton onClick={onAddAudio} icon={<IconPlus />} />;
};
