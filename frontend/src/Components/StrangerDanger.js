import './StrangerDanger.css'
import child from './both.png'
import React, { useState, useEffect, useRef, Component } from 'react';
import useSound from 'use-sound'
import Confetti from './Confetti'
import buzzer from './buzzerwav-14908.mp3'
import correctsound from './mixkit-correct-answer-tone-2870.wav'
import Axios from 'axios';
// import stranger from './stranger.png'
function StrangerDanger(){
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    let wonAudio = new Audio(correctsound);
    let lostAudio = new Audio(buzzer);
    
    return(
        <center>
        <h1>STRANGER DANGER</h1>
        <p>Hey look! It's a man who lives in your neighbourhood.
He just moved in last week.</p>
<div className="dialog">

<span className="bubble">Hello Jenny, you are a very good girl! I have noticed you a lot in the last few days. Want a treat? Please come with me.</span>
<div>
{/* <img className="stranger" src={stranger}></img> */}
<img src={child}></img>
</div>
</div>

        <p> Uh Oh! 
        He tries to invite you to his house...
        </p>
        <h2>What should you say?</h2>

        <button 
        className={`Btn ${isWrong === true && 'wrong'}`}
        onClick={() => { setIsWrong(!isWrong); setIsCorrect(false);if(!isWrong) lostAudio.play() }}
      >
        Yes, I will come to your house. I love sweets!
      </button>
        <button 
        className={`Btn ${isCorrect === true && 'correct'}`}
        onClick={() => {
          setIsCorrect(!isCorrect);
          if (!isCorrect) wonAudio.play();
          setIsWrong(false);

        }}
      >
       NO! My parents told me not to trust strangers.
      </button>
      {isCorrect && <Confetti />}

      


        </center>
    )
}

export default StrangerDanger;