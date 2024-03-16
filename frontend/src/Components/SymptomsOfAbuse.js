import React from 'react';
import abuseImage from './images/abuse.png'; // Import the image file
import './SymptomsOfAbuse.css'; // Import the CSS file for styling

const SymptomsOfAbuse = () => {
  return (
    <div className='main-symptoms'>
    <div className="symptoms-container">
      <div className="text-content">
        <div className='heading'>
          <h1>SYMPTOMS OF ABUSE</h1>
        </div>
        <div className="paragraph">
          <p>The signs of child abuse can be hard to spot. We can help you to recognize the signs of abuse and support you if you have concerns about a child.</p>
        </div>
        <div className="points">
          <ul>
            <li>Unexplained changes in behavior or personality</li>
            <li>Becoming withdrawn</li>
            <li>Seeming anxious</li>
            <li>Becoming uncharacteristically aggressive</li>
            <li>Lacks social skills and has few friends, if any</li>
            <li>Knowledge of adult issues inappropriate for their age</li>
            <li>Running away or going missing</li>
            <li>Always choosing to wear clothes which cover their body</li>
          </ul>
        </div>
      </div>
      <div className="image-container">
        <img src={abuseImage} style={{height:"400px", width:"250px"}} alt="Abuse" />
      </div>
    </div>
    </div>
  );
};

export default SymptomsOfAbuse;
