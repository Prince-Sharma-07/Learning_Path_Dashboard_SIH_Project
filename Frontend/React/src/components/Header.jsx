import React from "react";
import "../App.css";

const Header = ({onSignUpOptions}) => {
  return (
    <>
      <header className="header">
        <img className="logo" alt="logo" src="img/omnifood-logo.png" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                community
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Section 4
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#">
                Section 5
              </a>
            </li>
          </ul>
        </nav>
        <div className="signup">
          <button onClick={onSignUpOptions} className="button" type="button">Sign Up</button>
        </div>
      </header>
    </>
  );
};

export default Header;
