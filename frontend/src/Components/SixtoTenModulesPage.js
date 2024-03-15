import React from "react";
import "./age.css";
import imga from "./images/6to10.png";
import { SlArrowLeft } from "react-icons/sl";
export default function SixtoTenModulesPage() {
  const redirect = (a) => {
    window.location.href = `/${a}`;
  };
  return (
    <div className="modules site-container stt">
      <button className="backb" onClick={() => redirect("profile")}>
        <SlArrowLeft style={{ fontSize: "34px" }} />
      </button>
      <div className="modules-box mbfor2">
        <h2 className="top-heading"> LET'S GET STARTED...</h2>
        <button className="modules-box-element slide" onClick={()=>window.location.href="/game2"}>1. The Swimsuit Rule</button>
        <button className="modules-box-element slide" onClick={()=>window.location.href="/rpage"}>
        2. The 3 R’s of Safety
        </button>
        <button className="modules-box-element slide">
          3. Power of Saying 'NO'
        </button>
        <button className="modules-box-element slide">4. Building Trust</button>
        <button className="modules-box-element slide">5. My buddies</button>
      </div>
      <div>
        <img src={imga} alt="hi" className="image-container" style={{marginRight:"10px"}} />
      </div>
    </div>
  );
}
