
import React, { useState, useEffect, useRef, Component } from 'react';

import './styles1.css'
import { useParams } from "react-router-dom";
import Confetti from './Confetti'
import buzzer from './images/buzzerwav-14908.mp3'
import correctsound from './images/mixkit-correct-answer-tone-2870.wav'
import Axios from 'axios';
function Game1() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  let wonAudio = new Audio(correctsound);
  let lostAudio = new Audio(buzzer);



  return (
    <center className='main-game1'>
      
      <h1 style={{ padding: "20px" }}>Watch the video and answer the question</h1>
      <div >
        <iframe className='video' src="https://www.youtube.com/embed/uAD17zMgjHc" title="video" allowFullScreen></iframe>
      </div>
      <h2>What should you do if someone touched your private parts?</h2>
      <button
        className={`Btn ${isCorrect === true && 'correct'}`}
        onClick={() => {
          setIsCorrect(!isCorrect);
          if (!isCorrect) wonAudio.play();
          setIsWrong(false);

        }}
      >
        Tell a trusted adult
      </button>
      {isCorrect && <Confetti />}

      <button
        className={`Btn ${isWrong === true && 'wrong'}`}
        onClick={() => { setIsWrong(!isWrong); setIsCorrect(false);if(!isWrong) lostAudio.play() }}
      >
        Don't tell anyone
      </button>
    
    </center>
  )
}

export default Game1;