import { useEffect, useState } from 'react';
import {
  formatTime,
  useCachedAsyncFunction,
  useToast,
} from 'src/features/common';
import { getArtistSongs, getSong } from 'src/services/apis';
import { audios, SongListType, SongType } from '..';

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
  const [currentAudioSong, setCurrentAudioSong] = useState(
    audios[currentAudioIndex].src,
  );

  const [timeCurrent, setTimeCurrent] = useState<string>('0:00');
  const [timeTotal, setTimeTotal] = useState<string>('0:00');
  const [seekPlayed, setSeekPlayed] = useState<number>(0);

  const playerRef = null;

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    songList && setCurrentIdSong(songList[currentIndex].id);
  }, [songList, currentIndex]);

  useEffect(() => {
    setCurrentAudioSong(audios[currentAudioIndex].src);
  }, [currentAudioIndex]);

  const currentSong = useCachedAsyncFunction<SongType>(
    (currentIdSong as unknown) as string,
    getSong,
    setError,
  );

  const onNextSong = () => {
    if (isMute) setIsMute(false);
    if (currentIndex >= songList.length - 1) return;
    setCurrentIndex(currentIndex + 1);
    if (currentAudioIndex > audios.length) setCurrentAudioIndex(0);
    setCurrentAudioIndex(currentAudioIndex + 1);
  };

  const onPrevSong = () => {
    if (isMute) setIsMute(false);
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    if (currentAudioIndex === 0) setCurrentAudioIndex(audios.length);
    setCurrentAudioIndex(currentAudioIndex - 1);
  };

  const onPause = () => {
    if (!isPlay) return;
    setIsPlay(false);
  };

  const onPlay = () => {
    if (isPlay) return;
    setIsPlay(true);
  };

  const onControlVolume = () => {
    setIsMute(!isMute);
  };

  const onHeart = () => {
    setHeart(!heart);
  };

  const onProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    setSeekPlayed(state.played);
    setTimeCurrent(formatTime(Math.round(state.playedSeconds)));
  };

  const onDuration = (duration: number) => {
    setTimeTotal(formatTime(Math.round(duration)));
  };

  const onEnder = () => {
    console.log('ender');
  };

  return {
    isPlay,
    isMute,
    heart,
    currentSong,
    timeCurrent,
    timeTotal,
    currentAudioSong,
    playerRef,
    seekPlayed,
    onNextSong,
    onPrevSong,
    onPause,
    onPlay,
    onControlVolume,
    onHeart,
    onProgress,
    onDuration,
    onEnder,
  };
};
