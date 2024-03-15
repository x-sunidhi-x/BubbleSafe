// src/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './register.css'
import AgePage from './AgePage';
const Registration = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [OTPsubmitFailed, setOTPsubmitFailed] = useState(false)
  const [OTPgenFailed, setOTPgenFailed] = useState(true)
  const [signupFailed, setSignupFailed] = useState(true);
  // const [registrationStatus, setRegistrationStatus] = useState(null);
//   const [userDetails, setUserDetails] = useState({})
const handleOTPgen = (event) => {
  event.preventDefault()
  let data = {
    email: email,
  }
  Axios.post("http://localhost:8000/user-create/send-otp", data)
    .then((res) => {
      if (res.data.status === 500) {
        console.log(res.data.error)
        setOTPgenFailed(true)
      } else {
        setOTPgenFailed(false)
        
        setEmail(data.email)
      }
    })
    .catch((err) => {
      setOTPgenFailed(true)
      console.log(err)
    })
  
}

const handleSignup = (event) => {
    event.preventDefault()
    let data = {
      name: username,
      email: email,
      password: password,
      otp:otp
    }
    Axios.post("http://localhost:8000/user-create/signup", data, {
      withCredentials: true,  cors: true 
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setSignupFailed(true)
          setOTPsubmitFailed(true)
        } else {
          setSignupFailed(false)
          setOTPsubmitFailed(false)
          console.log("success")
          navigate("/profile")
          window.location.href = "/profile"
        }
      })
      .catch((err) => {
        setSignupFailed(true)
        setOTPsubmitFailed(true)
        console.log(err)
      })
    
  }

  return (
    <div className='main'>
    <div className="register-container">
      <h2>Registration</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleOTPgen}>Get OTP</button>
      <br />
      <label>
        Enter OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </label>
      <button onClick={handleSignup}>Register</button>
      { !signupFailed && (
        <p>Registration successful! Redirecting to login...</p>  // .navigate
      )}
      {/* { signupFailed && (
        <p style={{color:"red"}}>Registration unsuccessful</p>
      )} */}
       {!signupFailed && <AgePage data={signupFailed}/>}
    </div>
    </div>
  );
};

export default Registration;
