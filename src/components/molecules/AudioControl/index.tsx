import { FC } from 'react';
import { AppButtonAdd } from 'src/components/atoms/AppButtonAdd';
import { AppButtonNext } from 'src/components/atoms/AppButtonNext';
import { AppButtonOption } from 'src/components/atoms/AppButtonOption';
import { AppButtonPlayPause } from 'src/components/atoms/AppButtonPlayPause';
import { AppButtonPrev } from 'src/components/atoms/AppButtonPrev';
import { AppButtonShuffle } from 'src/components/atoms/AppButtonShuffle';
import { AppButtonVolume } from 'src/components/atoms/AppButtonVolume';
import { AppControl } from 'src/components/atoms/AppControl';

type PropsType = {};

export const AudioControl: FC<PropsType> = (props: PropsType) => {
  return (
    <AppControl>
      <AppButtonOption />
      <AppButtonVolume />
      <AppButtonPrev />
      <AppButtonPlayPause />
      <AppButtonNext />
      <AppButtonShuffle />
      <AppButtonAdd />
    </AppControl>
  );
};
