import { useEffect, useState } from 'react';
import { useCachedAsyncFunction, useToast } from 'src/features/common';
import { getArtistSongs, getSong } from 'src/services/apis';
import { SongListType, SongType, audios } from '..';
import { Howl, Howler } from 'howler';

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
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentAudioSong, setCurrentAudioSong] = useState(
    audios[currentAudioIndex].src,
  );

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [heart, setHeart] = useState(false);

  // Setup the new Howl.
  const sound = new Howl({
    src: currentAudioSong,
    html5: true,
  });

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
    if (currentAudioIndex > audios.length) setCurrentAudioIndex(0);
    setCurrentAudioIndex(currentAudioIndex + 1);
  };

  const onPrevSong = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    if (currentAudioIndex === 0) setCurrentAudioIndex(audios.length);
    setCurrentAudioIndex(currentAudioIndex - 1);
  };

  const onPause = () => {
    sound.pause();
    console.log('pause');
    setIsPlay(false);
  };

  const onPlay = () => {
    sound.play(currentAudioSong);
    setIsPlay(true);
  };

  const onVolumeOff = () => {
    Howler.volume(0);
    setIsMute(true);
  };

  const onVolumeUp = () => {
    setIsMute(false);
  };

  const onHeart = () => {
    setHeart(!heart);
  };

  return {
    isPlay,
    isMute,
    heart,
    currentSong,
    onNextSong,
    onPrevSong,
    onPause,
    onPlay,
    onVolumeOff,
    onVolumeUp,
    onHeart,
  };
};
