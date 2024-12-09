import React, { useState } from "react";
import "../App.css";
const Login = () => {
  return (
    <>
        <div className="SignupPage">
    <div className="form-container">
    <p className="title">Sign Up</p>
    <form className="form">
      <div className="name">
        <input type="text" className="input" placeholder="Full Name" />
        <input type="text" className="input" placeholder="Username" />
      </div>
      <div className="contact">
        <input type="email" className="input" placeholder="E-Mail" />
        <input type="tel" className="input" placeholder="Contact Number" />
      </div>
      <input type="text" className="input" placeholder="Gender" />
      <input type="email" className="input" placeholder="Confirm E-mail" />
      <input type="password" className="input" placeholder="Create Password" />
      <button className="form-btn">Sign Up</button>
    </form>
    <p className="sign-up-label">
      Already have an account?
      <span className="sign-up-link">
        <a href="login.html">Login</a>
      </span>
    </p>
    <div className="buttons-container">
      <div className="apple-login-button">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          className="apple-icon"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Add Apple login icon path here */}
        </svg>
        <span>
          <a href="https://www.apple.com/">Log in with Apple</a>
        </span>
      </div>
      <div className="google-login-button">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          className="google-icon"
          viewBox="0 0 48 48"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Add Google login icon path here */}
        </svg>
        <span>
          <a href="https://mail.google.com/">Log in with Google</a>
        </span>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Login;
