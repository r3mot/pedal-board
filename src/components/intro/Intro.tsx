import React from "react";
import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="intro-title-container">
          <h1 className="intro__title">Smash the pedal, not your wallet</h1>
          <p className="intro__subtitle">
            Select one of our audio samples, our plug in your instrument and
            play. It's that simple!
          </p>
        </div>
        <button className="intro__button">Get Started</button>
      </div>
    </div>
  );
};
