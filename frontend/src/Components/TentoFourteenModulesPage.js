import React from "react";
import "./age.css";
import imga from "./images/image 22.png";
import { SlArrowLeft } from "react-icons/sl";
export default function TentoFourteenModulesPage() {
  const redirect = (a) => {
    window.location.href = `/${a}`;
  };
  return (
    <div className="modules site-container ttf">
      <button className="backb" onClick={() => redirect("profile")}>
        <SlArrowLeft style={{ fontSize: "34px" }} />
      </button>
    
      <div className="modules-box mbfor3">
        <h2 className="top-heading"> LET'S GET STARTED...</h2>
        <button className="modules-box-element slide" onClick={()=>{window.location.href="/game1"}}>1. Building Trust</button>
        <button className="modules-box-element slide">
          2. Adolescence
        </button>
        <button className="modules-box-element slide">
          3. Help a Friend
        </button>
        <button className="modules-box-element slide">4. Safe Secrets</button>
        <button className="modules-box-element slide">5. My buddies</button>
      </div>
      <div>
        <img src={imga} alt="hi" className="image-container" />
      </div>
    </div>
  );
}
