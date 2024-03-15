import React, { useState } from 'react';
import './Rpage.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

function Rpage() {
  const [displayedImage, setDisplayedImage] = useState(null);

  const handleRecognizeClick = () => {
    setDisplayedImage(img1);
  };

  const handleReportClick = () => {
    setDisplayedImage(img3);
  };

  const handleRefuseClick = () => {
    setDisplayedImage(img2);
  };

  return (
    <div className="App">
      <div className="Title">
        <p>The 3 R's of SAFETY</p>
      </div>
      <div className="Subject">
        <p>
          Children can be taught to use these ways to stay safe to protect
          themselves from any unsafe situation or when someone breaks or tries
          to break safety rules for private body parts.
        </p>
      </div>
      <div>
        <div className="Buttons">
          <button className="recog" onClick={handleRecognizeClick}>
            RECOGNIZE
          </button>

          <button className="report" onClick={handleReportClick}>
            REFUSE
          </button>
          <button className="refuse" onClick={handleRefuseClick}>
            REPORT
          </button>
        </div>
      </div>
      <div>
        {displayedImage && <img src={displayedImage} alt="Displayed" />}
      </div>
    </div>
  );
}

export default Rpage;
