import { useState } from 'react';
import { AudioPage } from 'src/components/pages/AudioPage';

function App() {
  const [heart, setHeart] = useState(false);

  return (
    <AudioPage
      imgSrc="http://4.bp.blogspot.com/-pcPjBBdE_K8/U7v4oEX3M8I/AAAAAAAAD2I/6dWyzgiPzkQ/s1600/Clean+BAndit+Album+.jpg"
      onHeart={() => setHeart(!heart)}
      isHeart={heart}
      isMute={false}
      isPlay={true}
      onAddAudio={() => {
        //
      }}
      onNextAudio={() => {
        //
      }}
      onPrevAudio={() => {
        //
      }}
      onPause={() => {
        //
      }}
      onPlay={() => {
        //
      }}
      onVolumeOff={() => {
        //
      }}
      onVolumeUp={() => {
        //
      }}
    />
  );
}

export default App;
