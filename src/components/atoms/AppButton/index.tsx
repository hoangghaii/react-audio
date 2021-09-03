import { FC, ReactNode } from 'react';
import { Button } from './styles';

type PropsType = {
  onClick?: () => void;
  icon: ReactNode;
};

export const AppButton: FC<PropsType> = (props: PropsType) => {
  const { onClick, icon } = props;
  return <Button onClick={onClick}>{icon}</Button>;
};
