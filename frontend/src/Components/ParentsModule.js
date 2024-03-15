import React from "react";
import "./age.css";
// import { Helmet } from "react-helmet-async";
import imga from "./images/parent module.png";
import { SlArrowLeft } from "react-icons/sl";
export default function TwotoSixModulesPage() {
  const redirect = (a) => {
    window.location.href = `/${a}`;
  };
  return (
    <div className="modules site-container parm">
      <button className="backb" onClick={() => redirect("profile")}>
        <SlArrowLeft style={{ fontSize: "34px" }} />
      </button>

      <div className="modules-box mbforp">
        <h2 className="top-heading"> LET'S GET STARTED...</h2>
        <button className="modules-box-element slide">1. Talking Tips</button>
        <button className="modules-box-element slide" onClick={() => redirect("symptoms")}>
          2. Symptoms of Abuse
        </button>
        <button className="modules-box-element slide" onClick={() => redirect("legal")}>
          3. Legal Measures
        </button>
        <button className="modules-box-element slide">4. We are here for you</button>

      </div>
      <div>
        <img src={imga} alt="hi" className="image-container" />
      </div>
    </div>
  );
}
