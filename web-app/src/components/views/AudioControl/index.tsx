import { FC } from 'react';
import { AppButtonOption } from 'src/components/views/AppButtonOption';
import { AppButtonShuffle } from 'src/components/views/AppButtonShuffle';
import { AppControl } from 'src/components/views/AppControl';
import * as Styc from './styles';

export type PropsType = {
  volumeNode: React.ReactNode;
  btnPrevNode: React.ReactNode;
  controlNode: React.ReactNode;
  btnNextNode: React.ReactNode;
  btnAddNode: React.ReactNode;
};

export const AudioControl: FC<PropsType> = (props: PropsType) => {
  const {
    volumeNode,
    btnPrevNode,
    controlNode,
    btnNextNode,
    btnAddNode,
  } = props;

  return (
    <AppControl>
      <Styc.ButtonOption>
        <AppButtonOption />
      </Styc.ButtonOption>
      <Styc.ButtonVolume>{volumeNode}</Styc.ButtonVolume>
      {btnPrevNode}
      <Styc.ButtonPlayPause>{controlNode}</Styc.ButtonPlayPause>
      {btnNextNode}
      <Styc.ButtonShuffle>
        <AppButtonShuffle />
      </Styc.ButtonShuffle>
      <Styc.ButtonAdd>{btnAddNode}</Styc.ButtonAdd>
    </AppControl>
  );
};
