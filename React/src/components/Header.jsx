import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <header class="header">
        <img class="logo" alt="logo" src="img/omnifood-logo.png" />
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li>
              <a class="main-nav-link" href="#">
                Section 1
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#">
                Section 2
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#">
                Section 3
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#">
                Section 4
              </a>
            </li>
            <li>
              <a class="main-nav-link nav-cta" href="#">
                Section 5
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
