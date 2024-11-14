import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = ({onSignUpOptions}) => {
  return (
    <>
      <header class="header">
        <img class="logo" alt="logo" src="img/omnifood-logo.png" />
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
            <Link to="/section4">Section 4</Link>
            </li>
            <li>
            <Link to="/section5">Section 5</Link>
            </li>
          </ul>
        </nav>
        <div class="signup">
          <button onClick={onSignUpOptions} class="button" type="button">Sign Up</button>
        </div>
      </header>
    </>
  );
};

export default Header;
