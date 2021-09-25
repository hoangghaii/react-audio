import { FC } from 'react';
import * as Styc from './styles';

type PropsType = {};

export const AppProgressBar: FC<PropsType> = (props: PropsType) => {
  return (
    <Styc.ProgressBar>
      <Styc.TimeCurrent>1:25</Styc.TimeCurrent>
      <Styc.TimeTotal>-3:15</Styc.TimeTotal>
      <Styc.Fill></Styc.Fill>
    </Styc.ProgressBar>
  );
};
