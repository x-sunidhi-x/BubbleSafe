import React from "react";
import "./age.css";
import { SlArrowLeft } from "react-icons/sl";

import imga from "./images/2-6.png";
export default function TwotoSixModulesPage() {
  const redirect = (a) => {
    window.location.href = `/${a}`;
  };
  return (
    <div className="modules site-container tts">
      <button className="backb">
        <SlArrowLeft
          style={{ fontSize: "34px" }}
          onClick={() => redirect("profile")}
        />
      </button>

      <div className="modules-box">
        <h2 className="top-heading"> LET'S GET STARTED...</h2>
        <button className="modules-box-element slide slid">
          1. Know your body
        </button>
        <button className="modules-box-element slide slid">
          2. Safe & Unsafe touch
        </button>
        <button className="modules-box-element slide slid" onClick={()=>{window.location.href="/stranger"}}>
          3. Stranger Danger
        </button>
        <button className="modules-box-element slide slid">
          4. Safe Secrets
        </button>
        <button className="modules-box-element slide slid">
          5. My buddies
        </button>
      </div>
      <div>
        <img src={imga} alt="hi" className="image-container" />
      </div>
    </div>
  );
}
