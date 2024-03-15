import React, { useState } from 'react';
import myAudioFile from './images/stranger1.unknown';

const AudioComp = () => {
  const [audio] = useState(new Audio(myAudioFile));
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    if (muted) {
      audio.play();
    
    } else {
      audio.pause();
    }
    setMuted(!muted);
  };

  return (
    <div>
      <button style={{backgroundColor:"rgb(249, 132, 153)",borderRadius:"10px",border:"none",position:"absolute",left:"5px", top:"5px"}} onClick={toggleAudio}>{muted ? 'Unmute' : 'Mute'}</button>
      {/* Your component content */}
    </div>
  );
};

export default AudioComp;
