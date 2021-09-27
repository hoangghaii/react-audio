import { FC } from 'react';
import * as Styc from './styles';

export type PropsType = {
  timeTotal: string;
  timeCurrent: string;
  played: number;
};

export const AppProgressBar: FC<PropsType> = (props: PropsType) => {
  const { timeTotal, timeCurrent, played } = props;

  return (
    <Styc.ProgressBar>
      <Styc.TimeCurrent>{timeCurrent}</Styc.TimeCurrent>
      <Styc.TimeTotal>-{timeTotal}</Styc.TimeTotal>
      <Styc.Fill played={played} />
      {/* <input
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={played}
        onMouseDown={this.handleSeekMouseDown}
        onChange={this.handleSeekChange}
        onMouseUp={this.handleSeekMouseUp}
      /> */}
    </Styc.ProgressBar>
  );
};
