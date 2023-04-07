import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div>
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <div className="loginLogo">FoodMood</div>
                  <div className="loginDesc">Let's Find The Diet Today</div>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input type="text" placeholder='email' className="loginInput" />
                      <input type="password" placeholder='password' className="loginInput" />
                      <button className="loginButton">LogIn</button>
                      <span className="loginForgot">Forgot Password??</span>
                      <button className="loginRegisterButton">Create a new Account</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
