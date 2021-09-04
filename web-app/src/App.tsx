import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AudioPage } from 'src/components/pages/AudioPage';
import { useSong } from 'src/features/songs';

function App() {
  const [heart, setHeart] = useState(false);
  const {
    currentSong,
    onNextSong,
    onPrevSong,
    onPause,
    onPlay,
    onVolumeOff,
    onVolumeUp,
  } = useSong('29472');

  if (!currentSong) return <></>;

  return (
    <>
      <AudioPage
        songInfo={currentSong}
        onHeart={() => setHeart(!heart)}
        isHeart={heart}
        isMute={false}
        isPlay={true}
        onAddAudio={() => {
          //
        }}
        onNextAudio={onNextSong}
        onPrevAudio={onPrevSong}
        onPause={onPause}
        onPlay={onPlay}
        onVolumeOff={onVolumeOff}
        onVolumeUp={onVolumeUp}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
