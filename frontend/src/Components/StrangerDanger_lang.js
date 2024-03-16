import './StrangerDanger.css';
import child from './both.png';
import React, { useState, useEffect, useRef, Component } from 'react';
import useSound from 'use-sound';
import Confetti from './Confetti';
import buzzer from './invalid-selection-39351.mp3';
import correctsound from './mixkit-correct-answer-tone-2870.wav';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Axios from 'axios';
import AudioComp from './AudioComp';
function StrangerDanger() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  let wonAudio = new Audio(correctsound);
  let lostAudio = new Audio(buzzer);
  const { t } = useTranslation();
  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'عربي',
      country_code: 'sa',
    },
    {
      code: 'ta',
      name: 'தமிழ்',
      country_code: 'fr',
    },
    {
      code: 'hn',
      name: 'हिंदी',
      country_code: 'fr',
    },
  ];
  const GlobeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-globe"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
    </svg>
  );
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GlobeIcon />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <center>
        <AudioComp />
        <h1>{t('STRANGER_DANGER')}</h1>
        <p>
          {t(
            'Hey look! Its a man who lives in your neighbourhood.He just moved in last week.'
          )}
        </p>
        <div className="dialog">
          <span className="bubble">
            {t(
              'Hello Jenny, you are a very good girl! I have noticed you a lot in the last few days. Want a treat? Please come with me.'
            )}
          </span>
          <div>
            {/* <img className="stranger" src={stranger}></img> */}
            <img src={child}></img>
          </div>
        </div>

        <p> {t('Uh Oh! He tries to invite you to his house...')}</p>
        <h2>{t('What should you say?')}</h2>

        <button
          className={`Btn ${isWrong === true && 'wrong'}`}
          onClick={() => {
            setIsWrong(!isWrong);
            setIsCorrect(false);
            if (!isWrong) lostAudio.play();
          }}
        >
          {t('Yes, I will come to your house. I love sweets!')}
        </button>
        <button
          className={`Btn ${isCorrect === true && 'correct'}`}
          onClick={() => {
            setIsCorrect(!isCorrect);
            if (!isCorrect) wonAudio.play();
            setIsWrong(false);
          }}
        >
          {t('NO! My parents told me not to trust strangers.')}
        </button>
        {isCorrect && <Confetti />}
      </center>
    </div>
  );
}

export default StrangerDanger;
