import { FC } from 'react';
import { AppCurrentAudio } from 'src/components/atoms/AppCurrentAudio';
import { AppProgressBar } from 'src/components/atoms/AppProgressBar';
import { AudioControl } from 'src/components/molecules/AudioControl';
import { InfoContainer } from './styles';

export type PropsType = {};

export const AudioInfo: FC = (props: PropsType) => {
  return (
    <InfoContainer>
      <AppProgressBar />
      <AppCurrentAudio
        songName="Symphony"
        artistName="Clean Bandit ft. Zara Larsson"
      />
      <AudioControl />
    </InfoContainer>
  );
};
