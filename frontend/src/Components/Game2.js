
import React, { useState, useEffect, useRef, Component } from 'react';

import './styles2.css'
import swimsuit from './images/swimsuit3.png'
import hand from './images/hand.png'
import hair from './images/hair.png'
import arm from './images/arm.png'
import Confetti from './Confetti'

import buzzer from './images/invalid-selection-39351.mp3'
import correctsound from './images/mixkit-correct-answer-tone-2870.wav'
//identify the body part that no one is allowed to touch
function Game2() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong1, setIsWrong1] = useState(false);
  const [isWrong2, setIsWrong2] = useState(false);
  const [isWrong3, setIsWrong3] = useState(false);

  let wonAudio = new Audio(correctsound);
  let lostAudio = new Audio(buzzer);
  const handleCorrect = () => {
    setIsCorrect(!isCorrect);
    if (!isCorrect) wonAudio.play();
    setIsWrong1(false);
    setIsWrong2(false);
    setIsWrong3(false);

  }


  return (
    <center className='main-game2'>
      
      <h1 style={{ padding: "20px" }}>Which of the following is a swimsuit region?</h1>


      <button
        className={`Btn ${isCorrect === true && 'correct'}`}
        onClick={handleCorrect}
      >
        Between Thighs <br />
        <img src={swimsuit} ></img>
      </button>
      {isCorrect && <Confetti />}

      <button
        className={`Btn ${isWrong1 === true && 'wrong'}`}
        onClick={() => { 
          setIsWrong1(!isWrong1); 
          setIsCorrect(false); 
          if(!isWrong1) lostAudio.play() }}
      >
        Hand <br />
        <img src={hand} ></img>
      </button>
      <br />
      <button
        className={`Btn ${isWrong2 === true && 'wrong'}`}
        onClick={() => { setIsWrong2(!isWrong2); setIsCorrect(false); if(!isWrong2) lostAudio.play() }}
      >
        Hair <br />
        <img src={hair} ></img>
      </button>
      <button
        className={`Btn ${isWrong3 === true && 'wrong'}`}
        onClick={() => { setIsWrong3(!isWrong3); setIsCorrect(false); if(!isWrong3) lostAudio.play() }}
      >
        Arm<br />
        <img src={arm} ></img>
      </button>
    </center>
  )
}

export default Game2;