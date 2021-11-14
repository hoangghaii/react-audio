import { FC } from 'react';
import ReactPlayer from 'react-player';
import { AudioPage } from 'src/components/layout/AudioPage';
import { AudioPlayer } from 'src/components/layout/AudioPlayer';
import { AppAlbum } from 'src/components/views/AppAlbum';
import { AppButtonAdd } from 'src/components/views/AppButtonAdd';
import { AppButtonNext } from 'src/components/views/AppButtonNext';
import { AppButtonPause } from 'src/components/views/AppButtonPause';
import { AppButtonPlay } from 'src/components/views/AppButtonPlay';
import { AppButtonPrev } from 'src/components/views/AppButtonPrev';
import { AppButtonVolumeOff } from 'src/components/views/AppButtonVolumeOff';
import { AppButtonVolumeUp } from 'src/components/views/AppButtonVolumeUp';
import { AppCurrentAudio } from 'src/components/views/AppCurrentAudio';
import { AppProgressBar } from 'src/components/views/AppProgressBar';
import { AudioControl } from 'src/components/views/AudioControl';
import { AudioInfo } from 'src/components/views/AudioInfo';
import { useSong } from 'src/features/songs';

export type PropsType = {};

export const AudioContainer: FC<PropsType> = (props: PropsType) => {
  const {
    isPlay,
    isMute,
    heart,
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
  } = useSong();

  // if(!currentAudioSong) return <></>

  const songImage = currentAudioSong?.imageUrl ?? '/sound-bars.svg';
  const songName = currentAudioSong?.songName ?? 'Loading...';
  const artistName = currentAudioSong?.artist ?? 'Loading...';

  return (
    <AudioPage>
      <AudioPlayer
        albumNode={
          <AppAlbum imgSrc={songImage} onHeart={onHeart} isHeart={heart} />
        }
        audioInfoNode={
          <AudioInfo
            progressBarNode={
              <AppProgressBar
                played={seekPlayed}
                timeTotal={timeTotal}
                timeCurrent={timeCurrent}
              />
            }
            audioNode={
              <AppCurrentAudio songName={songName} artistName={artistName} />
            }
            controlNode={
              <AudioControl
                volumeNode={
                  isMute ? (
                    <AppButtonVolumeOff onVolumeOff={onControlVolume} />
                  ) : (
                    <AppButtonVolumeUp onVolumeUp={onControlVolume} />
                  )
                }
                btnPrevNode={<AppButtonPrev onPrevAudio={onPrevSong} />}
                controlNode={
                  isPlay ? (
                    <AppButtonPause onPause={onPause} />
                  ) : (
                    <AppButtonPlay onPlay={onPlay} />
                  )
                }
                btnNextNode={<AppButtonNext onNextAudio={onNextSong} />}
                btnAddNode={
                  <AppButtonAdd
                    onAddAudio={() => {
                      //
                    }}
                  />
                }
              />
            }
          />
        }
      />
      <ReactPlayer
        width="0"
        height="0"
        ref={playerRef}
        url={currentAudioSong?.songUrl}
        playing={isPlay}
        muted={isMute}
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onDuration={onDuration}
      />
    </AudioPage>
  );
};
