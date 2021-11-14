import { useEffect, useState } from 'react';
import {
  formatTime,
  useCachedAsyncFunction,
  useToast,
} from 'src/features/common';
import { getArtistSongs } from 'src/services/apis';
import { SongType } from '..';

export const useSong = () => {
  const onShowToast = useToast();
  const [error, setError] = useState<Error | undefined>(undefined);
  const songList = useCachedAsyncFunction<SongType[]>(
    'song',
    getArtistSongs,
    setError,
  );

  if (error) onShowToast('error', error);

  const [currentAudioIndex, setCurrentAudioIndex] = useState<number>(0);
  const [currentAudioSong, setCurrentAudioSong] = useState<SongType>();

  const [timeCurrent, setTimeCurrent] = useState<string>('0:00');
  const [timeTotal, setTimeTotal] = useState<string>('0:00');
  const [seekPlayed, setSeekPlayed] = useState<number>(0);

  const playerRef = null;

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    songList && setCurrentAudioSong(songList[currentAudioIndex]);
  }, [songList, currentAudioIndex]);

  const onNextSong = () => {
    if (isMute) setIsMute(false);
    if (currentAudioIndex >= songList.length - 1) return;
    setCurrentAudioIndex(currentAudioIndex + 1);
    if (currentAudioIndex > songList.length) setCurrentAudioIndex(0);
    setCurrentAudioIndex(currentAudioIndex + 1);
  };

  const onPrevSong = () => {
    if (isMute) setIsMute(false);
    if (currentAudioIndex === 0) return;
    setCurrentAudioIndex(currentAudioIndex - 1);
    if (currentAudioIndex === 0) setCurrentAudioIndex(songList.length);
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

  return {
    isPlay,
    isMute,
    heart,
    currentAudioSong,
    timeCurrent,
    timeTotal,
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
  };
};
