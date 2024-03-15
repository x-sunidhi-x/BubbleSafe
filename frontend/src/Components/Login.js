// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './register.css'
import AgePage from './AgePage';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(true)
  const handleSubmit = () => {
    let data = { email:email, password: password }
    Axios.post("http://localhost:8000/user-create/login",data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setLoginFailed(true)
        } else {
          setLoginFailed(false)
          navigate("/profile")
        }
      })
      .catch((err) => {
        setLoginFailed(true)
        console.log(err)
      })
    // event.target.reset()
  }
  

  return (
    <div className='main'>
    <div className="login-container">
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={handleSubmit}>Login</button>
      {!loginFailed && <p>Login successful</p>}
      {!loginFailed && <AgePage data={loginFailed}/>}
    </div>
    </div>
  )
}

export default Login;
