import React from "react";
import "../App.css";

const Body = () => {
  return (
    <>
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p class="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" class="btn btn--full margin-right-sm">
            Start eating well
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
