import { FC } from 'react';
import * as Styc from './styles';

export type PropsType = {
  songName: string;
  artistName: string;
};

export const AppCurrentAudio: FC<PropsType> = (props: PropsType) => {
  const { songName, artistName } = props;

  return (
    <Styc.AudioContainer>
      <Styc.SongName>{songName}</Styc.SongName>
      <Styc.ArtistName>{artistName}</Styc.ArtistName>
    </Styc.AudioContainer>
  );
};
