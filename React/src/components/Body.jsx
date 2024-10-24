import React from "react";
import "../App.css";

const Body = () => {
  return (
    <>
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
            yha per main heading aaegi
          </h1>
          <p class="hero-description">
           HEADING KE NICHE description aaega
          </p>
          <a href="#" class="btn btn--full margin-right-sm">
            Start Studying
          </a>
          <a href="#" class="btn btn--outline">
            Learn more &darr;
          </a>
        </div>
        <div class="hero-img-box">
          <img
            src="img/hero.png"
            class="hero-img"
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
