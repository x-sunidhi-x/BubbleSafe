import React from "react";
// import { Helmet } from "react-helmet-async";
import "./age.css";
import imga from "./images/homebutton.png";
import imga2 from "./images/Guardian.png";
import Axios from 'axios';
export default function AgePage({data}) {
  const redirect = (a) => {
    window.location.href = `/${a}`;
  };
  const handlelogout = () => {
    Axios.get("http://localhost:8000/user-create/logout", {
      withCredentials: true,
    }).then((res) => {
      if (res.data.status === 500) {
        console.log(res.data.error)
      } else {
        window.location.href = "/"
      }
    })
  }
  if(!data){
  return (
    <div>

      <div className="agepage site-container modules">
        <div className="topnav">
          <button
            className="pm slide"
            onClick={() => redirect("module4")}
          >
            <img src={imga2} alt="ffs" className="homebutton-img" />
            <div className="homebutton-text">Parent's Module</div>
          </button>
          <button className="homebutton slide">
            <img src={imga} alt="ffs" className="pm-img" />
            <div className="homebutton-text" onClick={handlelogout}>Logout</div>
          </button>
        </div>
        <div className="ages">
          <button
            class="pm homebutton-text slide"
            onClick={() => redirect("module1")}
          >
            2-6
          </button>
          <button
            class="pm homebutton-text slide"
            onClick={() => redirect("module2")}
          >
            6-10
          </button>
          <button
            class="pm homebutton-text slide "
            onClick={() => redirect("module3")}
          >
            10-14
          </button>
        </div>
      </div>
    </div>
  );
  }
  else{
    return(
      <p>not accessible</p>
    )
  }
  
}
