import { useEffect, useState } from 'react';
import { useCachedAsyncFunction, useToast } from 'src/features/common';
import { getArtistSongs, getSong } from 'src/services/apis';
import { SongListType, SongType } from '..';

export const useSong = (idArtist: string) => {
  const onShowToast = useToast();
  const [error, setError] = useState<Error | undefined>(undefined);
  const songList = useCachedAsyncFunction<SongListType[]>(
    idArtist,
    getArtistSongs,
    setError,
  );

  if (error) onShowToast('error', error);

  const [currentIdSong, setCurrentIdSong] = useState<number>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    songList && setCurrentIdSong(songList[currentIndex].id);
  }, [songList, currentIndex]);

  const currentSong = useCachedAsyncFunction<SongType>(
    (currentIdSong as unknown) as string,
    getSong,
    setError,
  );

  console.log('currentSong: ', currentSong);

  const onNextSong = () => {
    if (currentIndex >= songList.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const onPrevSong = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const onPause = () => {};

  const onPlay = () => {};

  const onVolumeOff = () => {};

  const onVolumeUp = () => {};

  return {
    currentSong,
    onNextSong,
    onPrevSong,
    onPause,
    onPlay,
    onVolumeOff,
    onVolumeUp,
  };
};
